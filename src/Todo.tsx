import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export const Todo = (props) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        marginBottom: "15px",
        padding: "15px"
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
      >
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label={props.title} />
        </FormGroup>

        <IconButton aria-label="delete" size="large" onClick={props.onDelete}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </Paper>
  );
};
