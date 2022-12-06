import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Componentes/Home";
import SignIn from "../Componentes/SignIn";
import SignUp from "../Componentes/SignUp";

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerNav.Navigator>
      <DrawerNav.Screen name="Home" component={Home} />
      <DrawerNav.Screen name="SignIn" component={SignIn} />
      <DrawerNav.Screen name="SignUp" component={SignUp} />
    </DrawerNav.Navigator>
  );
}
