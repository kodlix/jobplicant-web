import React from 'react';
import {View, Text, StyleSheet} from '@react-pdf/renderer'
import moment from 'moment'

const styles = StyleSheet.create({
    container: {},
    titleStyle: {
        fontSize: '12px',
        fontWeight: 'bold'
    },
    space: {
        padding: '8px'
    },
    itemContainer: {
        marginBottom: "8px"
    },
    itemStyle:{
        fontSize: 12,
        fontWeight: 'normal'
    },
    itemStyleBold: {
        fontSize: 12,
        fontWeight: "bold"
    }
})

const Education = ({profileInfo}) => {
    console.log('education', profileInfo);
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>EDUCATION</Text>
        <View style={styles.space} />
        {profileInfo?.educations.map((education, i) => (<View key={i} style={styles.itemContainer}>
            <Text style={styles.itemStyleBold}>{education.institution}</Text>
            <Text style={styles.itemStyleBold}>{education.city}, {education.country}</Text>
            <Text style={styles.itemStyle}>{education.qualification} in</Text>
            <Text style={styles.itemStyle}>{education.course}</Text>
            <Text style={styles.itemStyle}>{moment(education.yearOfGraduation).format("YYYY")}</Text>
        </View>))}
    </View>
}

export default Education