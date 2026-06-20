import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FiturScreen from '../screens/FiturScreen';
import TentangScreen from '../screens/TentangScreen';
import PasarScreen from '../screens/PasarScreen';
import KeuanganScreen from '../screens/KeuanganScreen';
import BmcScreen from '../screens/BmcScreen';
import KontakScreen from '../screens/KontakScreen';

export type RootStackParamList = {
  MainTabs: undefined;
  ScanDetail: {id: string};
  Fitur: undefined;
  Tentang: undefined;
  Pasar: undefined;
  Keuangan: undefined;
  Bmc: undefined;
  Kontak: undefined;
};

export type TabParamList = {
  Home: undefined;
  Scan: undefined;
  History: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const MainTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#22c55e',
        tabBarInactiveTintColor: '#6b7280',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="camera" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="history" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="Fitur" component={FiturScreen} />
      <Stack.Screen name="Tentang" component={TentangScreen} />
      <Stack.Screen name="Pasar" component={PasarScreen} />
      <Stack.Screen name="Keuangan" component={KeuanganScreen} />
      <Stack.Screen name="Bmc" component={BmcScreen} />
      <Stack.Screen name="Kontak" component={KontakScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
