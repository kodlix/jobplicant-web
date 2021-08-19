import React from 'react';
import {View, Text, StyleSheet} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    left: {
        alignSelf: 'flex-start'
    },
    nameContainer: {
        flexDirection: 'row'
    },
    nameTextStyle: {
        fontSize: '30px',
        fontWeight: 'normal'
    },
    nameTextStyleBold: {
        fontWeight: 'bold',
        fontSize: '30px',
    },
    subtitleTexStyle: {
        fontWeight: 17,
        letterSpacing: 2,
    },
    right: {
        alignSelf: 'flex-end'
    },
    rightTextContainer: {
        flexDirection: 'row'
    },
    rightKeyTextBold: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    rightTextStyle: {
        fontSize: 12,
        fontWeight: 'normal'
    }
})

const Header = () => {
    return <View style={styles.container}>
        <View style={styles.left}>
            <View style={styles.nameContainer}>
                <Text style={styles.nameTextStyleBold}>HARRY</Text><Text> </Text>
                <Text style={styles.nameTextStyle}> ROBERTS</Text>
            </View>
            <Text style={styles.subtitleTexStyle}>ENTER YOUR TITLE HERE</Text>
        </View>
        <View style={styles.right}>
            <View style={styles.rightTextContainer}>
            <Text style={styles.rightKeyTextBold}>T:</Text> 
            <Text style={styles.rightTextStyle}>968-666-8968</Text>
            </View>
            <View style={styles.rightTextContainer}>
            <Text style={styles.rightKeyTextBold}>E:</Text>
            <Text style={styles.rightTextStyle}> harryroberts@gmail.com</Text>
            </View>
            <View style={styles.rightTextContainer}>
            <Text style={styles.rightKeyTextBold}>A:</Text>
            <Text style={styles.rightTextStyle}> Linkedin.com/in/username</Text>
            </View>
        </View>
    </View>
}

export default Header