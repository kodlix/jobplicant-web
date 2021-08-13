import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import moment from 'moment'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: "10px",
        textAlign: 'justify',
        whiteSpace: 'nowrap'
    },
    momentContainer: {
        width: '20%',
        paddingHorizontal: '8px'
    },
    momentStyle: {
        fontSize: '11px'
    },
    bodyContainer: {
        width: '80%',
        paddingHorizontal: '25px',
        paddingBottom: '4px'
    },
    bodyText: {
        fontSize: '10px',
    },
    bodyHeaderStyle: {
  
    },
    bodyHeaderTitle: {
        fontSize: '12px',
        fontWeight: 500
    },
    bodyHeaderSubtitle: {
        fontSize: '10px',
        fontWeight: 500,
        fontStyle: 'italic',
    },
    space: {
        padding: '4px'
    }
})

const Experience = ({ experience }) => {
    return (
        <View style={styles.container} wrap={false}>
            <View style={styles.momentContainer}>
                <Text style={styles.momentStyle}>{moment(experience.startDate).format("YYYY-MM")} - </Text>
                <Text style={styles.momentStyle}>{moment(experience.endDate).format("YYYY-MM")}</Text>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.bodyHeaderStyle}>
                    <Text style={styles.bodyHeaderTitle}>{experience.jobTitle}</Text>
                    <Text style={styles.bodyHeaderSubtitle}>{experience.company}, {experience.location}</Text>
                </View>
                <View style={styles.space}></View>
                <View style={styles.bodyText}>
                   <Text>
                       {experience.description}
                   </Text>
                </View>
                {/* <View style={styles.space}></View> */}
                {/* <View style={[styles.bodyText]}>
                    <Text>Key Achievement</Text>
                    <Text>Achieved over $500,000 in sales in each fiscal quarter from 2019.</Text>
                </View> */}
            </View>
        </View>
    )
}
export default Experience