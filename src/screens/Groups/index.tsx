import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { Container } from "./styles";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turma" subtitle="Jogue com sua turma"/>
      <GroupCard title='Grupo do audi'/>
    </Container>
  );
}
