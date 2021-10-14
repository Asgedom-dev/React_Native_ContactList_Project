import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import Constants from 'expo-constants';

import CourseList from './components/CoursesList'
import CourseDetails from './components/CourseDetails';
import About from './components/About'
import AddReview from './components/AddReview'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {


  const CourceScreen=()=>{
         return(
            <Stack.Navigator>
              <Stack.Screen name="CourseList" component={CourseList}/>
              <Stack.Screen name="CourseDetails" component={CourseDetails}/>
              <Stack.Screen name="AddReview" component={AddReview}/>
            </Stack.Navigator>
        )
  }

  const AboutUs=()=>{
return(
  <View>
    hello again
  </View>
)
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="COURCE" component={CourceScreen} 
        options={{
          tabBarLabel: 'COURCE',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={"red"} size={26} />
          ),
        }}/> 
        <Tab.Screen name="ABOUT US" component={About}
          options={{
            tabBarLabel: 'ABOUT',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="information" color={"red"} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center'
  },
});
