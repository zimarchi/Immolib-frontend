import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import proHome from "./screens/pro/proHome";
import proClients from "./screens/pro/proClients";
import proVisites from "./screens/pro/proVisites";
import proTchats from "./screens/pro/proTchats";
import proAnnonces from "./screens/pro/proAnnonces";

import persoHome from "./screens/perso/persoHome";
import persoProfil from "./screens/perso/persoProfil";
import persoVisites from "./screens/perso/persoVisites";
import persoTchats from "./screens/perso/persoTchats";
import persoMonDossier1 from "./screens/perso/persoMonDossier1";
import persoMonDossierLoc2 from "./screens/perso/persoMonDossier2Loc";

import PageTests from "./screens/pageTests";

import FontAwesome from "react-native-vector-icons/FontAwesome";

import { Provider } from 'react-redux';
import user from './reducers/user';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { user },
});

const TabNavigatorPro = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "";
          if (route.name === "Home") {
            iconName = "minus";
          } else if (route.name === "Mes tchats") {
            iconName = "minus";
          } else if (route.name === "Mes annonces") {
            iconName = "minus";
          } else if (route.name === "Mes visites") {
            iconName = "minus";
          } else if (route.name === "Mes clients") {
            iconName = "minus";
          }
          return (
            <FontAwesome
              name={iconName}
              size={60}
              color={color}
              style={styles.icon}
            />
          );
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#b2b2b2",
        headerShown: false,
        tabBarStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          //backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0, // For Android to remove the shadow
          width: 341,
          height: 56,
          flexShrink: 0,
          background: 'rgba(255, 255, 255, 0,7)',
          borderRadius: 30,
        },
        tabBarOptions: {
          showLabel: false, // Hide the tab labels
        },
      })}
    >
      <Tab.Screen name="Home" component={proHome} />
      <Tab.Screen name="Mes tchats" component={proTchats} />
      <Tab.Screen name="Mes annonces" component={proAnnonces} />
      <Tab.Screen name="Mes visites" component={proVisites} />
      <Tab.Screen name="Mes clients" component={proClients} />
    </Tab.Navigator>
  );
};

const TabNavigatorPerso = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "";
          if (route.name === "welcome") {
            iconName = "minus";
          } else if (route.name === "visites") {
            iconName = "minus";
          }
          return (
            <FontAwesome
              name={iconName}
              size={60}
              color={color}
              style={styles.icon}
            />
          );
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#b2b2b2",
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0, // For Android to remove the shadow
        },
        tabBarOptions: {
          showLabel: false, // Hide the tab labels
        },
      })}
    >
      <Tab.Screen name="Home" component={persoHome}  />
      <Tab.Screen name="Mes tchats" component={persoTchats} />
      <Tab.Screen name="Mes visites" component={persoVisites} />
      <Tab.Screen name="Mon profil" component={persoProfil}/>
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} style={styles.main}>
            <Stack.Screen name="PageTests" component={persoMonDossierLoc2} />
            <Stack.Screen name="TabNavigatorPro" component={TabNavigatorPro} />
            <Stack.Screen name="TabNavigatorPerso" component={TabNavigatorPerso} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {},
});
