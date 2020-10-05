import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { Text, View, StatusBar } from 'react-native'
import AuthProvider from './src/contexts/auth'

import Routes from "./src/routes";

console.disableYellowBox = true

export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#131313' barStyle='light-content' />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}

