import React from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    container: {

    },
    titleContainer: {
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    subtitleStyle: {
        letterSpacing: 2,
        fontSize: 14,
        fontWeight: 'normal'
    },
    spacer: {
        padding: 4
    },
    contactContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 4,
    },
    contactTextStyle: {
        fontSize: 8
    },
    contactSpacer: {
        paddingHorizontal: 4
    }
})

const Header = () => {

    return <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>Daniel Esteban</Text>
            <Text style={styles.subtitleStyle}>PROFESSIONAL TITLE HERE</Text>
        </View>
        <View style={styles.spacer} />
        <View style={styles.contactContainer}>
            <Text style={styles.contactTextStyle}>867-398-9097</Text>
            <Text style={styles.contactSpacer}>|</Text>
            <Text style={styles.contactTextStyle}>danielesteban@gmail.com</Text>
            <Text style={styles.contactSpacer}>|</Text>
            <Text style={styles.contactTextStyle}>www.linkedin.com/in/danielesteban</Text>
        </View>
    </View>
}

export default Header