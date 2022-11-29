import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

export function ButtonIcon({ type = "PRIMARY", icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon
      name={icon}
      type={type} 
      />
    </Container>
  );
}
