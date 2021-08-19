import React from 'react';
import {View, Text, StyleSheet} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    container: {  
        marginTop: '10px'
      },
    divider: {
        border: '1px solid #bbb',
        width: '100%',
        height: 1
    },
    experienceStyle: {
        paddingTop: '12px'
    },
    titleStyle: {
        fontSize: 14
    },
    space: {
        padding: '10px'
    },
    rowStyle: {
        flexDirection: 'row'
    },
    dateStyle: {
        fontSize: 12
    },
    jobTitleStyle: {
        fontSize: 12
    },
    jobDescriptionStyle: {
        fontSize: 12
    },
    jobItemsStyle: {
        fontSize: 11
    }
})
const Experience = () => {
    return <View style={styles.container}>
        <View style={styles.divider} />
        <View style={styles.experienceStyle}>
            <Text style={styles.titleStyle}>WORK EXPERIENCE</Text>
        </View>
        <View style={styles.space} />
        <View style={styles.rowStyle}>
            <View>
                <Text style={styles.dateStyle}>2016 - Present</Text>
            </View>
            <View style={styles.space}></View>
            <View>
                <Text style={styles.jobTitleStyle}>ENTER POSITION TITLE HERE/Company Here</Text>
                <View style={styles.space} />
                <Text style={styles.jobDescriptionStyle}>
                    aldadjf;adk;aokd;foa;dofj9djadpfadofjadjfa;odfpaodjfajdbfjubnguhuehaisfoiadfad
                </Text>
                <View>
                    <Text style={styles.jobItemsStyle}>adljfaldkjfaldkjfaldfjaldj</Text>
                    <Text style={styles.jobItemsStyle}>adljfaldkjfaldkjfaldfjaldj</Text>
                    <Text style={styles.jobItemsStyle}>adljfaldkjfaldkjfaldfjaldj</Text>
                    <Text style={styles.jobItemsStyle}>adljfaldkjfaldkjfaldfjaldj</Text>
                    <Text style={styles.jobItemsStyle}>adljfaldkjfaldkjfaldfjaldjs</Text>
                </View>
            </View>
        </View>
    </View>
}

export default Experience