import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Inicio from "../screens/Inicio";
import Billetera from "../screens/Billetera";
import Recolecciones from "../screens/Recolecciones";
import Perfiles from "../screens/Perfiles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "../icons/HomeIcon";
import WalletIcon from "../icons/WalletIcon";
import CalendarIcon from "../icons/CalendarIcon";
import ProfileIcon from "../icons/ProfileIcon";

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      activeColor="#C7E835"
      barStyle={{ backgroundColor: "#141414" }}
    >
      <Tab.Screen
        name="Inicio"
        component={Inicio}
        options={{
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="Billetera"
        component={Billetera}
        options={{
          tabBarIcon: () => <WalletIcon />,
        }}
      />
      <Tab.Screen
        name="Recolecciones"
        component={Recolecciones}
        options={{
          tabBarIcon: () => <CalendarIcon />,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfiles}
        options={{
          tabBarIcon: () => <ProfileIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
