import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";
import { ActivityIndicator, StatusBar } from "react-native";
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
      {fontsLoaded ? <Groups /> : <Loading />}
      <StatusBar barStyle="light-content" />
    </ThemeProvider>
  );
}
