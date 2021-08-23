import React from 'react';
import { Document, Page, View, StyleSheet, Text } from '@react-pdf/renderer';

import Header from './components/header';
import ContactSidebar from './components/contact-sidebar';
import EducationSidebar from './components/education-sidebar';
import SkillSidebar from './components/skill-sidebar';
import ExtraInfo from './components/extra-info-sidebar';
import WorkExperience from './components/work-experience';
import ProfileContainer from './components/profile-container';

const styles = StyleSheet.create({
    page: {},
    container: {},
    spacer: {
        padding: 10
    },
    divider: {
        border: '1px solid #999', 
    marginVertical: 10},
    content: {
        marginHorizontal: '24px',
        marginTop: '16px',
        flexDirection: 'row',

    },
    sidebar: {
        width: '20%'
    },
    main: {
        width: '80%',
        marginLeft: '15px',
        borderLeftWidth: '1px',
        borderLeftColor: '#999',
        borderLeftStyle: 'solid',
        paddingLeft: 10
    }
})

const TemplatePDFFour = ({profileInfo}) => {
    return <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.container}>
                <Header  profileInfo={profileInfo}/>
                <View style={styles.spacer} />
                <View style={styles.content}>
                    <View style={styles.sidebar}>
                        <ContactSidebar profileInfo={profileInfo} />
                        <View style={styles.divider} />
                        <EducationSidebar profileInfo={profileInfo} />
                        <View style={styles.divider} />
                        <SkillSidebar profileInfo={profileInfo} />
                        <View style={styles.divider} />
                        <ExtraInfo profileInfo={profileInfo} />
                    </View>
                    <View style={styles.main}>
                        <ProfileContainer profileInfo={profileInfo} />
                        <View style={styles.divider} />
                        <WorkExperience profileInfo={profileInfo} />
                    </View>
                </View>
            </View>
        </Page>
    </Document>
}

export default TemplatePDFFour;