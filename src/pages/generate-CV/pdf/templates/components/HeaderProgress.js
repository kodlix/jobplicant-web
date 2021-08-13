import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    container: {
        paddingVertical: '4px',
        paddingLeft: '12px'
    },
    titleStyle: {
        fontSize: '12px',
        color: '#aaa'
    },
})

const HeaderProgressItem = ({ title, value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
        </View>
    )
}

export default HeaderProgressItem