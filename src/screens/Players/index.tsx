import { Header, Highlight, ButtonIcon, Input } from "@components/index";
import { Container, Form } from "./styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="check" />
      </Form>
    </Container>
  );
}
