import React from 'react';
import {View, Text, StyleSheet} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    container: {},
    titleStyle: {
        fontSize: '12px',
        fontWeight: 'bold'
    },
    space: {
        padding: '8px'
    },
    itemStyle:{
        fontSize: 12,
        fontWeight: 'normal'
    },
    itemStyleBold: {
        fontSize: 12,
        fontWeight: 'bold'
    }
})

const Education = ({profileInfo}) => {
    console.log('education', profileInfo);
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>EDUCATION</Text>
        <View style={styles.space} />
        {profileInfo?.educations.map((education, i) => (<View key={i}>
        <Text style={styles.itemStyleBold}>{education.institution}</Text>
        <Text style={styles.itemStyleBold}>{education.city}, {education.country}</Text>
        <Text style={styles.itemStyle}>{education.qualification} in</Text>
        <Text style={styles.itemStyle}>{education.course}</Text>
        <Text style={styles.itemStyle}>{education.yearOfGraduation}</Text>
        </View>))}
    </View>
}

export default Education