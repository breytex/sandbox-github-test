import { Container, Button } from "@mui/material";
import { PersonCard } from "./PersonCard";

export const StartPage = () => {
  return (
    <Container>
      <h1>Hello World</h1>
      <p>This is a test</p>
      <b>Hallo Talisa</b>
      <PersonCard age={15} shoe={40}>
        Stella
      </PersonCard>
      <PersonCard age={15} shoe={44}>
        Talisa
      </PersonCard>
      <PersonCard>Alex</PersonCard>
      <PersonCard>Dominik</PersonCard>
    </Container>
  );
};
