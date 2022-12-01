import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups, NewGroup, Players } from "@screens/index";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  <Navigator>
    <Screen name="groups" component={Groups} />
    <Screen name="new" component={NewGroup} />
    <Screen name="players" component={Players} />
  </Navigator>;
}
