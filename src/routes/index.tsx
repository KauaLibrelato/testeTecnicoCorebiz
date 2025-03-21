import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Screen1 } from "../screens";
import { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

export function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Screen1">
                <Stack.Screen name="Screen1" component={Screen1} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
