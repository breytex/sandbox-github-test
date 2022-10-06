import { useEffect, useState } from "react";
import { supabase } from "../supabase";

const databaseTableName = "todos";

export const useSupabase = <T>(room: string) => {
  const [data, setData] = useState<T[] | null>(null);

  const reload = async () => {
    const { data, error } = await supabase
      .from(databaseTableName)
      .select()
      .eq("room", room);

    if (error) {
      console.error(error);
      return;
    }
    setData(data as T[]);
  };

  const push = async (element: T) => {
    const { error } = await supabase
      .from(databaseTableName)
      .insert({ ...element, room });

    if (error) {
      console.error(error);
      return;
    }
    reload();
  };

  const update = async (data: T, where: Partial<T>) => {
    const { error } = await supabase
      .from(databaseTableName)
      .update(data)
      .match(where);
    if (error) {
      console.error(error);
      return;
    }
    reload();
  };

  const remove = async (where: Partial<T>) => {
    const { error } = await supabase
      .from(databaseTableName)
      .delete()
      .match(where);
    if (error) {
      console.error(error);
      return;
    }
    reload();
  };

  useEffect(() => {
    reload();
  }, []);

  return { data, reload, remove, update, push };
};
