import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer'

import Experience from './Experience';
import Education from './Education';

const styles = StyleSheet.create({
    container: {
        width: '70%',
        paddingTop: '7px',
        paddingHorizontal: '8px'
    },
    bioStyle: {
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: '1.2',
        marginBottom: '20px',
    },
    bioTextStyle: {
        textAlign: "justify"
    },
    headerStyle: {
        borderTopWidth: '2px',
        borderTopColor: '#333',
        borderBottomColor: '#333',
        borderBottomWidth: '2px',
        paddingVertical: '4px'
    },
    headerTitleStyle: {
        fontSize: '14px',
        fontWeight: 400,
    },
    space: {
        padding: '16px'
    }
})


const TemplateOneContent = ({ profileInfo }) => {
    return (
        <View style={styles.container}>
            <View style={styles.bioStyle}>
                <Text style={styles.bioTextStyle}>{profileInfo.profile}</Text>
            </View>
            <View style={styles.headerStyle}>
                <Text style={styles.headerTitleStyle}>Experiences</Text>
            </View>
            <View>
                {profileInfo.experiences.map((experience, i) => <Experience key={i} experience={experience} />)}
            </View>
            <View style={styles.space} />
            <View style={styles.headerStyle}>
                <Text style={styles.headerTitleStyle}>Education</Text>
            </View>
            <View>
                {profileInfo.educations.map((education, i) => <Education key={i} education={education} />)}
            </View>
        </View>
    )
}

export default TemplateOneContent