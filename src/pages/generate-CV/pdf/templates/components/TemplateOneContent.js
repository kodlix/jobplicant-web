import React from 'react';
import { View, Text, StyleSheet, Font } from '@react-pdf/renderer'

import Experience from './Experience';

//Disable word hyphenation
Font.registerHyphenationCallback(word => [word]);

const styles = StyleSheet.create({
    container: {
        width: '70%',
        paddingHorizontal: '12px',
    },
    bioStyle: {
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: '1.2',
        marginBottom: '20px',
        textAlign: 'justify',
        paddingRight: '15px',
        width: '100%',
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
    }
})


const TemplateOneContent = ({ profileInfo }) => {
    return (
        <View style={styles.container}>
            <View style={styles.bioStyle}>
                <Text>{profileInfo.profile}</Text>
            </View>
            <View style={styles.headerStyle}>
                <Text style={styles.headerTitleStyle}>Experience</Text>
            </View>
            <View>
                {profileInfo.experiences.map((experience, i) => <Experience key={i} experience={experience} />)}
            </View>

        </View>
    )
}

export default TemplateOneContent