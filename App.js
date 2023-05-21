import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>  
      </View>
      <ScrollView horizontal contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>  
          <Text style={styles.description}>화창</Text>  
        </View>  
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>  
          <Text style={styles.description}>화창</Text>  
        </View>  
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>  
          <Text style={styles.description}>화창</Text>  
        </View>  
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>  
          <Text style={styles.description}>화창</Text>  
        </View>  
      </ScrollView>         
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:"tomato"
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 58,
    fontWeight: "800",
  },
  weather: {
    flex: 2,
  },
  day: {
    flex: 1,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 158,
  },
  description: {
    marginTop: -30,
    fontSize: 100,
  },
});



