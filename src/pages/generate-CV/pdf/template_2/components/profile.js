import React from 'react';
import {View, Text, StyleSheet} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    container: {  
        
        marginTop: '10px'
      },
    divider: {
        border: '1px solid #bbb',
        width: '100%',
        height: 1
    },
    profileContainer: {
        paddingTop: '16px'
    },
    titleStyle: {
        fontSize: '14px',
        fontWeight: 'bold',
        paddingBottom: '8px'
    },
    descriptionStyle: {
        fontSize: '12px',
        paddingBottom: '10px'
    }
})

const Profile = () => {
    return <View style={styles.container}>
        <View style={styles.divider} />
        <View style={styles.profileContainer}>
            <Text style={styles.titleStyle}>PROFILE</Text>
            <Text style={styles.descriptionStyle}>ajdlkfjaldjfaierqj0e8ru jiqjowiejfqo8 9qhe ijjleijfq osi</Text>
        </View>
    </View>
}

export default Profile