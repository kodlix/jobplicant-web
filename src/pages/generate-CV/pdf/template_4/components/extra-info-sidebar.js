import React from 'react';

import {View, Text, StyleSheet } from '@react-pdf/renderer'

const styles  = StyleSheet.create({
    container: {},
    contentListStyle: {
        marginVertical: '2px',
    },
    contactItemTextStyle: {
        fontSize: '12px',

    },
    titleStyle: {
        fontSize: '11px',
        fontWeight: 'normal',

    },
    content: {
        marginTop: '7px',
    },
    contentTitleStyle: {
        fontWeight: 'extrabold', 
        fontSize: '9px'
    },
    contentDescriptionStyle: {
        fontSize: '9px'
    }
})

const ExtraInfo = ({ profileInfo }) => {
    return (<View style={styles.container}>
        <Text style={styles.titleStyle}>HOBBIES</Text>
        {profileInfo.hobbies.map((hobby) => (<View style={styles.content}>
            <Text style={styles.contentTitleStyle}>{hobby}</Text>
            {/* <Text style={styles.contentDescriptionStyle}>More In?formation</Text> */}
        </View>))}
    </View>)
}

export default ExtraInfo