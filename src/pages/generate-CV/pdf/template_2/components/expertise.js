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
const Expertise = () => {
    return <View style={styles.container}>
    <Text style={styles.titleStyle}>EXPERTISE</Text>
    <View style={styles.space} />
    <Text style={styles.itemStyle}>Building organizations</Text>
    <Text style={styles.itemStyle}>Strategic Planning</Text>
    <Text style={styles.itemStyle}>client Management</Text>
    <Text style={styles.itemStyle}>Social Perceptiveness</Text>
    <Text style={styles.itemStyle}>Business Development</Text>
</View>
}

export default Expertise