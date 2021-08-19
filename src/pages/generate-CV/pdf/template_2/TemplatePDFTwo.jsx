import React from 'react';
import { Document, Page, View, StyleSheet, Text } from '@react-pdf/renderer';

import Header from './components/header'
import Profile from './components/profile'
import Education from './components/education'
import Skill from './components/skill'
import Experience from './components/experience'
import Expertise from './components/expertise'
import Interest from './components/interest'


const styles = StyleSheet.create({
    page: {
        paddingHorizontal: '24px',
        paddingTop: '24px'
    },
    divider: {
        border: '1px solid #bbb',
        width: '100%',
        height: 1
    },
    rowStyle: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingTop: 12,
    },
})

const TemplatePDFTwo = ({ profileInfo, editMode, setEditMode }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Header profileInfo={profileInfo} />
                <Profile profileInfo={profileInfo} />
                <View style={styles.divider} />
                <View style={styles.rowStyle}>
                    <Education />
                    <Skill />
                    <Expertise />
                </View>
                <Experience />
                <View style={styles.divider} />
                <View style={styles.rowStyle}>
                    <Interest />                  
                </View>
            </Page>
        </Document>
    )
}

export default TemplatePDFTwo