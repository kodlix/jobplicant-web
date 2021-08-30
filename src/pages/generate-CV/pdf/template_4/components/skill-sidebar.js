import React from 'react';

import {View, Text, StyleSheet } from '@react-pdf/renderer'

const styles  = StyleSheet.create({
    container: {},
    contentListStyle: {
        marginVertical: '2px',
    },
    contactItemTextStyle: {
        fontSize: '11px',

    },
    titleStyle: {
        fontSize: '12px',
        fontWeight: 'light',

    },
    
})


const SkillSidebar = ({ profileInfo }) => {
    return (<View style={styles.container}>
        <Text style={styles.titleStyle}>SKILLS</Text>
        <View style={styles.contentListStyle}>
        {profileInfo?.skills.map((skill, i) => (
            <Text key={i} style={styles.contactItemTextStyle}>{skill}</Text>))}
           
        </View>
    </View>)
}

export default SkillSidebar