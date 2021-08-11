import React from 'react';
import {View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        paddingVertical: '8px ',
        paddingLeft: '12px',
        fontSize: '12px',
        fontWeight: 500,
        color: '#f4f4f4',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

const Header = ({ label }) => {
    return <Text style={styles.container}>{label}</Text>
}

export default Header