import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";

export const Test = () => {
  const [counter, setCounter] = useState(0);

  const onFabiansLikeButtonClick = () => {
    setCounter(counter + 1);
  };

  return (
    <Stack direction="row" alignItems="center" spacing={4}>
      <Button variant="contained" onClick={onFabiansLikeButtonClick}>
        Like
      </Button>
      <Box>{counter}</Box>
    </Stack>
  );
};
