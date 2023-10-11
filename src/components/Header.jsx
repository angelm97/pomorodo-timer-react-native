import React from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, Platform, LogBox, TouchableOpacity } from 'react-native';

const options = ["Pomodoro", "Short Break", " Long Break"];

const Header = ({ currentTime, setCurrentTime , setTime, setIsActive}) => {

    const handleCurrentTime = (index) => {
        let newTime = index === 0 ? 25 : index === 1 ? 5 : 15; 
        setCurrentTime(index)
        setTime(newTime * 60)
    }
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: "row",  marginBottom: '5%', marginHorizontal: 15, }}>
                {
                    options.map((res, index) => (
                        
                        <TouchableOpacity onPress={() => {handleCurrentTime(index); setIsActive(false); }} onLongPress={()=> alert(currentTime)} style={[{ width: "33%", textAlign: 'center', borderRadius: 8  }, currentTime == index && {borderWidth: 2,} ]} key={index}>
                            <Text style={{textAlign: 'center'}}>{res}</Text>

                        </TouchableOpacity>
                    ))
                }
            </View>

        </View>
    )
}

export default Header
