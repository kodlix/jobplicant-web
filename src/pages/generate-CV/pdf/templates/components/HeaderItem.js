import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        padding: '8px 12px'
    },
    titleStyle: {
        fontSize: '12px',
        color: '#aaa',
        marginBottom: "5px"
    },
    textStyle: {
        fontSize: '12px',
        fontWeight: 500,
        color: '#eee'
    }
})
const HeaderItem = ({ title, label }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.textStyle}>{label}</Text>
        </View>
    )
}
export default HeaderItem