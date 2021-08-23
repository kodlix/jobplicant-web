import React from 'react';
import moment from 'moment'
import {View, Text, StyleSheet } from '@react-pdf/renderer'

const styles  = StyleSheet.create({
    container: {},
    contactItem: {
        marginVertical: '2px',
        flexDirection: 'row'
    },
    contactItemTextStyle: {
        fontSize: '10px',

    },
    titleStyle: {
        fontSize: '11px',
        fontWeight: 'light',

    },
    contentStyle: {
        paddingTop: '8px'
    },
    contentTitleStyle: {
        fontSize: '10px',
        fontWeight: 'bold'
    },
    contentDescriptionStyle: {
        fontSize: '9px',
        flexWrap: 'wrap'
    }
})

const EducationSidebar = ({ profileInfo }) => {
    return (<View style={styles.container}>
        <Text style={styles.titleStyle}>EDUCATION</Text>
        {profileInfo.educations.map((education, i) => (<View key={i} style={styles.contentStyle}>
            <Text style={styles.contentTitleStyle}>{education.institution}</Text>
            <Text style={styles.contentTitleStyle}>{education.country}</Text>
            <Text style={styles.contentDescriptionStyle}>
                {education.qualification} in {'\n'}
                {education.course} {'\n'}
                {moment(education.yearOfGraducation).format("YYYY")}
            </Text>
        </View>))}
    </View>)
}

export default EducationSidebar