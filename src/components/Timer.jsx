import React, { useEffect } from 'react'
import { Text, TextInput, View } from 'react-native'

const Timer = ({ time, setTime, setIsActive, isActive }) => {
    const formattedTime = `${Math.floor(time / 60).toString().padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`;

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime(time - 1)
            }, 1000);
        }else{
            clearInterval(interval)
        }

        if (time == 0) {
            setIsActive(false)
           
        }
        return () =>  clearInterval(interval); 
    }, [time, isActive]);

    return (

        <View style={{ backgroundColor: '#F1F1F1', borderRadius: 18, marginHorizontal: 20, padding: 5, height: '45%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[{ fontSize: 65, fontWeight: 700 }]}>{formattedTime}</Text> 
        </View>
    )
}



export default Timer
