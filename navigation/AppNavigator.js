import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import DashboardScreen from "../screens/DashboardScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TodoListScreen from "../screens/TodoListScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { colorThemes } from "../themes/colors";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [switchV, setSwitchV] = useState(false);
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [todos, setTodos] = useState([
    { id: "1", title: "Kerjakan laporan", done: false },
    { id: "2", title: "Belajar React Native", done: true },
    { id: "3", title: "Olahraga sore", done: false },
    { id: "4", title: "Beli groceries", done: false },
    { id: "5", title: "Meeting tim", done: true },
  ]);

  // Splash screen timer - 5 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5000 ms = 5 detik

    return () => clearTimeout(timer);
  }, []);

  const currentTheme = colorThemes[currentThemeIndex];

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Dashboard">
          {(props) => (
            <DashboardScreen
              {...props}
              theme={currentTheme}
              username={username}
              setUsername={setUsername}
              switchV={switchV}
              setSwitchV={setSwitchV}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Profile">
          {(props) => (
            <ProfileScreen
              {...props}
              theme={currentTheme}
              username={username}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="TodoList">
          {(props) => (
            <TodoListScreen
              {...props}
              theme={currentTheme}
              todos={todos}
              setTodos={setTodos}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Settings">
          {(props) => (
            <SettingsScreen
              {...props}
              theme={currentTheme}
              currentThemeIndex={currentThemeIndex}
              setCurrentThemeIndex={setCurrentThemeIndex}
              colorThemes={colorThemes}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;