import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View} from 'react-native';
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

import ServiceCategoriesScreen from "./src/screens/ServiceCategoriesScreen";
import ServiceProvidersScreen from "./src/screens/ServiceProvidersScreen";
import ServiceProviderDetailsScreen from "./src/screens/ServiceProviderDetailsScreen";
import LandingScreen from "./src/screens/LandingScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AuthContextProvider, { AuthContext } from "./src/store/auth-context";
import { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import YourAccount from "./src/screens/YourAccount";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import IconButton from "./src/components/ui/IconButton";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#FAFAFA" },
        headerTintColor: "blue",
        sceneContainerStyle: { backgroundColor: "#FAFAFA" },
      }}
    >
      
      <Drawer.Screen
        name="Service Categories"
        component={ServiceCategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="category" color={color} size={size} />
          ),
          
        }}
      />
      <Drawer.Screen
        name="Your Account"
        component={YourAccount}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="logout"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
          
        }}
      />
     
    </Drawer.Navigator>
  );
};

function AuthStack() {
  return (

     <Stack.Navigator
        screenOptions={{
         headerStyle: { backgroundColor: "#FAFAFA" },
         headerTintColor: "black",
         contentStyle: { backgroundColor: " #FAFAFA" },
        }}
      >
  
      <Stack.Screen name="Senpro" component={LandingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      
      </Stack.Navigator>

  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#FAFAFA" },
        headerTintColor: "black",
        contentStyle: { backgroundColor: " #FAFAFA" },
      }}
    >
      <Stack.Screen
        name="Drawer Screen"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ServiceProviders"
        component={ServiceProvidersScreen}
      />
      <Stack.Screen
        name="Service Provider Details"
        component={ServiceProviderDetailsScreen}
      />

    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}

      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>

      <StatusBar style="dark" />

      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}

