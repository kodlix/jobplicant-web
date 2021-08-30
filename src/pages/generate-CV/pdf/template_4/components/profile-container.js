import React from 'react';

import {View, Text, StyleSheet } from '@react-pdf/renderer'

const styles  = StyleSheet.create({
    container: {},
    contactItem: {
        marginVertical: '6px',
        flexDirection: 'row'
    },
   
    titleStyle: {
        fontSize: '12px',
        fontWeight: 'semibold',

    },
    spacer: {
        padding: 4
    },
    descriptionStyle: {
        fontSize: '10px',
        flexWrap: 'wrap',
        
    }
})

const ProfileContainer = ({ profileInfo }) => {
    return (<View style={styles.container}>
        <Text style={styles.titleStyle}>PROFILE</Text>
        <View style={styles.spacer} />
        <Text style={styles.descriptionStyle}>
        {profileInfo.profile}
        </Text>
    </View>)
}

export default ProfileContainer