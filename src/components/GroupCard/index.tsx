import { TouchableOpacityProps } from "react-native";
import { Container, Title, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  title: String;
};

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
