import React from 'react';
import {View, Text, StyleSheet} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    container: {},
    titleStyle: {
        fontSize: '12px',
        fontWeight: 'bold'
    },
    space: {
        padding: '8px'
    },
    itemStyle:{
        fontSize: 12,
        fontWeight: 'normal'
    },
    itemStyleBold: {
        fontSize: 12,
        fontWeight: 'bold'
    }
})

const Hobbies = ({profileInfo}) => {
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>HOBBIES</Text>
        <View style={styles.space} />
        {profileInfo?.hobbies.map((hobby, i)=>(<Text key={i} style={styles.itemStyle}>{hobby}</Text>))}
    </View>
}

export default Hobbies