import { Container, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {};

export function ButtonIcon({}: Props) {
  return <Container>
    <Icon name='check' type='PRIMARY'/>
  </Container>;
}
