import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconStyleProps;
};

export const Container = styled(TouchableOpacity)`
  height: 56px;
  height: 56px;

  align-items: center;
  justify-content: center;

  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))``;
