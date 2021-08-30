import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import moment from 'moment'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: '8px'
    },
    momentContainer: {
        width: '20%',
        padding: '8px'
    },
    momentStyle: {
        fontSize: '11px'
    },
    bodyContainer: {
     
        width: '80%',
        padding: '4px'
    },
    bodyText: {
        fontSize: '10px',
        textAlign: "justify"
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

const Education = ({ education }) => {
    return (
        <View style={styles.container}>
            <View style={styles.momentContainer}>
                <Text style={styles.momentStyle}>{moment(education.yearOfGraducation).format("YYYY")}</Text>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.bodyHeaderStyle}>
                    <Text style={styles.bodyHeaderTitle}>{education.qualification}</Text>
                    <Text style={styles.bodyHeaderSubtitle}>{education.institution}, {education.country}</Text>
                </View>
                <View style={styles.space}></View>
                <View style={styles.bodyText}>
                    <Text>Course: <strong>{education.course}</strong></Text>
                    <Text>Curabitur in efficitur ex, ac rutrum purus. Quisque pellentesque iaculis orci</Text>
                    <Text>Proin vulputate varius est, ut dictum neque aliquet sit amet. Curabitur blandit nunc in</Text>
                    <Text>Curabitur in efficitur ex, ac rutrum purus. Quisque pellentesque iaculis orci</Text>
                </View>
                <View style={styles.space}></View>
                <View style={[styles.bodyText]}>
                    <Text>Key Achievement</Text>
                    <Text>Achieved over $500,000 in sales in each fiscal quarter from 2019.</Text>
                </View>
            </View>
        </View>
    )
}
export default Education