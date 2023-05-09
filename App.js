import { Image, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { HomeIcon, CmangaIcon, NettruyenIcon } from './components/icon';
import * as Font from 'expo-font';
import { Component } from 'react';



function HomeScreen() {
  return (
    <View
    style = {{
      backgroundColor: '#fff',
    }}
    >
      <Text 
      style = {{
        fontSize: 30,
        marginTop: 30,
        marginLeft: 8
      }}
      >Xin</Text>
      <Text 
      style = {{
        fontSize: 30,
        marginTop: -10,
        marginLeft: 8,
        color: '#9d9d9d'
      }}
      >chào</Text>
      
      <Image 
      style = {{
        resizeMode: 'center',
        height: 100,
        width: 200,
      }}
      source={require('./assets/images/rondevtransparent.png')}/>


    </View>

  );
}

function NettruyenScreen() {
  return (
    <WebView
      originWhitelist={['*']}
      source={{ uri: 'https://www.nettruyenplus.com/' }}
    />
  );
}

function CmangaScreen() {
  return (
    <WebView

      originWhitelist={['*']}
      source={{ uri: 'https://cmangaaf.com/' }}
    />
  );
}
const Tab = createBottomTabNavigator();


class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: {
                height: 0,
              },
              title: 'RONDEV',
              tabBarIcon: ({ focused, color, size }) => (
                <HomeIcon focused={focused} color={color} size={size} />
              )
            }} />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <CmangaIcon focused={focused} color={color} size={size} />
              )
            }}
            name="Cmanga"
            component={CmangaScreen} />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <NettruyenIcon focused={focused} color={color} size={size} />
              )
            }}
            name="Nettruyen"
            component={NettruyenScreen} />
        </Tab.Navigator>
      </NavigationContainer >
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
});
