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

const Interest = () => {
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>INTEREST</Text>
        <View style={styles.space} />
        <Text style={styles.itemStyle}>Travel &amp; Running</Text>
        <Text style={styles.itemStyle}>Reading &amp; Football</Text>
        <Text style={styles.itemStyle}>Cooking &amp; Dancing</Text>

    </View>
}

export default Interest