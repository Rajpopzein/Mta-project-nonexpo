// import * as React from 'react';
import { View, StyleSheet } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
import Test from '../../Pages/Test';
import Feed from '../../Pages/Feed';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DeviceOrientation from '../../statics/DeviceOrientation';


const FirstRoute = () => (
  <View style={style.feedlist}>
    <Feed/>
  </View>
);
 


const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {elevation:0, backgroundColor:"#"},
      tabBarPressColor:"#fff",
      tabBarPressOpacity: 0
    }}>
      <Tab.Screen name="NewsFeed" component={FirstRoute} />
      <Tab.Screen name="Higlights" component={Test} />
    </Tab.Navigator>
  );
}

export default Tabs

const style = StyleSheet.create({
  feedlist:{
    marginHorizontal: (5/100) * DeviceOrientation.devicewidth
  }
})