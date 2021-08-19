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
const Skill = () => {
    return <View style={styles.container}>
    <Text style={styles.titleStyle}>SKILLS</Text>
    <View style={styles.space} />
    <Text style={styles.itemStyle}>Microsoft Office</Text>
    <Text style={styles.itemStyle}>Adobe Creative Suite</Text>
    <Text style={styles.itemStyle}>Social Media</Text>
    <Text style={styles.itemStyle}>Web Design</Text>
    <Text style={styles.itemStyle}>Photoshop &amp; Flash</Text>
</View>
}

export default Skill