import { Button, Stack } from "@mui/material";

export const PersonCard = (props) => {
  return (
    <div className="card">
      <h1>hallo {props.children}</h1>
      <Stack spacing={1}>
        <b>Alter: {props.age}</b>
        <b>Schuhgröße: {props.shoe}</b>
        <Button variant="contained" color="primary">
          Kontakt aufnehmen
        </Button>
      </Stack>
    </div>
  );
};
