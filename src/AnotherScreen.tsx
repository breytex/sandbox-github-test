import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const AnotherScreen = () => {
  return (
    <Container>
      <Typography variant="h1">Another screen</Typography>
      <Link to="/">
        <Button variant="contained">back</Button>
      </Link>
    </Container>
  );
};
