import { Groups, NewGroup, Players } from "@screens/index";
import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";
import { StatusBar } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading/index";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Players /> : <Loading />}
      <StatusBar barStyle="light-content" />
    </ThemeProvider>
  );
}
