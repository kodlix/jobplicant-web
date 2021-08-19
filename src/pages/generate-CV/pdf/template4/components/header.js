import React from 'react';
import { Document, Page, View, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        paddingTop: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 22,
        fontWeight: 'light',
        color: '#f5f5f5'
    },
    subtitle: {
        fontSize: 13,
        fontWeight: 'light',
        color: '#f5f5f5'
    },
    spacer: {
        padding: 8
    },
    divider: {
        border: '1px solid #f3f3f3',
        height: 1,
        width: '100%',
        marginTop: 16,
    }
})
const Header = () => {
    return <View style={styles.container}>
        <Text>ANNIE RICHARDS</Text>
        <View style={styles.spacer} />
        <Text>MARKETING CONSULTANT</Text>
        <View style={styles.divider} />
    </View>
}

export default Header