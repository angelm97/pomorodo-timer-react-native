import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Platform } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';

const colors = ["#F7DC6F","#A2D9CE","#D7BDE2"]

export default function App() {

  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG");
  const [isActive, setIsActive] = useState(false);

  return (
    <SafeAreaView style={[styles.container, {paddingTop: Platform.OS === 'android' && 55}, {backgroundColor: colors[currentTime]}]}>   
      <View >
        <Text style={{fontSize: 33, fontWeight: 900, marginBottom: '5%', textAlign: 'center'}}>Pomodoro</Text>
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime} setIsActive={setIsActive}/>
        <Timer time={time} setTime={setTime} isActive={isActive} setIsActive={setIsActive} />
        <Button onPress={()=> setIsActive(!isActive)} title={!isActive ? 'Start' : 'Stop'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
   height: '100%'

  },



});
