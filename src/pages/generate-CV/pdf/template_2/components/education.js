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

const Education = () => {
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>EDUCATION</Text>
        <View style={styles.space} />
        <Text style={styles.itemStyleBold}>BOSTON UNIVERSITY</Text>
        <Text style={styles.itemStyleBold}>Boston, MA</Text>
        <Text style={styles.itemStyle}>Bachelor of Sciences in</Text>
        <Text style={styles.itemStyle}>Marketing Communications</Text>
        <Text style={styles.itemStyle}>2006 - 2010</Text>
    </View>
}

export default Education