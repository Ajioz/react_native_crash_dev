import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackScreen from "./screens/HomeStackScreen";
import ProductCategory from "./screens/ProductCategory";

const Stack = createNativeStackNavigator();

// import MyTransform from "./components/MyTransform";
// import Home from "./screens/Home";
// import { StatusBar } from "expo-status-bar";
// import MyDrawer from "./components/MyDrawer";
// import { View } from "react-native";
// import InputProps from "./components/InputProps";
// import MyRefreshControl from './components/MyRefreshControl';
// import MyInputAccesoryView from './components/MyInputAccesoryView';
// import UseCustomList from './components/UseCustomList';
// import MySectionList from './components/MySectionList';
// import Loader from './components/Loader';
// import UseCustom from './components/UseCustom';
// import ComponentWithProps from './components/ComponentWithProps';
// import MultipleSwitch from './components/MultipleSwitch';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "darkcyan",
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            title: "Register",
          }}
        />
        <Stack.Screen
          name="ProductCategory"
          component={ProductCategory}
          options={{
            title: "Account Details",
          }}
        />
      </Stack.Navigator>
      {/* <Home /> */}
    </NavigationContainer>
  );
}

// {/* <MyTransform /> */}
// {/* <MyDrawer /> */}
// {/* <View> */}
// {/* <StatusBar style="auto" /> */}
// {/* <MyInputAccesoryView />  */}

// {/* <MyRefreshControl /> */}
// {/* <InputProps /> */}
// {/* <Home /> */}
// {/* <MyDrawer /> */}
// {/* <UseCustomList /> */}
// {/* <MySectionList /> */}
// {/* <Loader /> */}
// {/* <ComponentWithProps /> */}
// {/* <MultipleSwitch /> */}
// {/* <UseCustom /> */}
// {/* </View> */}
