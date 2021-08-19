import React from 'react';
import { Document, Page, View, StyleSheet, Text } from '@react-pdf/renderer';

import Header from './components/header';

const styles = StyleSheet.create({
    page: {
    },
    divider: {
        border: '1px solid #bbb',
        width: '100%',
        height: 1,
        marginHorizontal: 30,
        marginRight: 36
    },
    space: {
        padding: 8
    },
    container: {
        paddingVertical: 12,
        paddingHorizontal: 30
    },
    titleStyle: {
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        paddingBottom: 8
    },
    descriptionStyle: {
        fontSize: 11
    },
    contentStyle: {},
    contentTitle: {
        fontWeight: 'bold',
        fontSize: 12
    },
    contentSubtitle: {
        fontWeight: 'semibold',
        fontSize: 11
    },
    contentDescription: {
        fontSize: 11,
        fontWeight: 'semibold'
    },
    contentListStyle: {},
    contentListItemStyle: {
        fontSize: 11,
         fontWeight: 'semibold'
    },
    skillTextContainer: {
        flexDirection: 'row',
    },
    skillTextStyleBold: {
        fontSize: 11,
        fontWeight: 'heavy'
    },
    skillTextStyle: {
        fontSize: 11,
        fontWeight: 'semibold',
        marginLeft: 12
    },
    publicationTextStyle: {
        fontSize: 12,
        fontWeight: 'semibold',
        marginLeft: 12
    },
    space1: {
        padding: 2
    }
})

const TemplatePDFThree = ({ profileInfo, editMode, setEditMode }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Header profile={profileInfo} />
                <View style={styles.divider} />
                <View style={styles.container}>
                    <Text style={styles.titleStyle}>PROFILE</Text>
                    <Text style={styles.descriptionStyle}>asjl kfjadifjaoiejrwu0e9r kfjadifjaoiejrwu0e9r kfjadifjaoiejrwu0e9r kfjadifjaoiejrwu0e9r kfjadifjaoiejrwu0e9r kfjadifjaoiejrwu0e9r  kfjadifjaoiejrwu0e9rkfjadifjaoiejrwu0e9r kfjadifjaoiejrwu0e9r uu0w9erwj0dfj9sj9dfjs9djfh w9er9wue09r 9wejrw</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.container}>
                    <Text style={styles.titleStyle}>EDUCATION</Text>
                    <View style={styles.contentStyle}>
                        <Text style={styles.contentTitle}>BOSTON UNIVERSITY, Boston, MA</Text>
                        <Text style={styles.contentSubtitle}>Bachelor of Science in Marketing Communications, 2006 - 2010</Text>
                        <View style={styles.space1} />
                        <Text style={styles.contentDescription}>akdjlfa akdjf iwou3 uei3u sdk jalu 20 kjsdlalisjeoiroqij lj lkjfadf ddfadf</Text>
                        <View style={styles.contentListStyle}>
                            <Text style={styles.contentListItemStyle}>{'\u2022 '}skajdfklajdkfj ajldkjf ae oowij eiowejro </Text>
                            <Text style={styles.contentListItemStyle}>{'\u2022 '}skajdfklajdkfj ajldkjf ae oowij eiowejro </Text>
                            <Text style={styles.contentListItemStyle}>{'\u2022 '}skajdfklajdkfj ajldkjf ae oowij eiowejro </Text>
                            <Text style={styles.contentListItemStyle}>{'\u2022 '}skajdfklajdkfj ajldkjf ae oowij eiowejro </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.container}>
                    <Text style={styles.titleStyle}>PROFESSIONAL EXPERIENCE</Text>
                    <View style={styles.contentStyle}>
                        <Text style={styles.contentTitle}>ENTER POSITION TITLE HERE</Text>
                        <Text style={styles.contentSubtitle}>Company Here / 2014 - Present</Text>
                    </View>
                    <View>
                        <View style={styles.space} />
                        <Text style={styles.contentDescription}>akdjlfa akdjf iwou3 uei3u sdk jalu 20 kjsdlalisjeoiroqij lj lkjfadf ddfadf</Text>
                        <View style={styles.contentListStyle}>
                            <Text style={styles.contentListItemStyle}>skajdfklajdkfj ajldkjf ae oowij eiowejro </Text>
                            <Text style={styles.contentListItemStyle}>skajdfklajdkfj ajldkjf ae oowij eiowejro </Text>
                            <Text style={styles.contentListItemStyle}>skajdfklajdkfj ajldkjf ae oowij eiowejro </Text>
                            <Text style={styles.contentListItemStyle}>skajdfklajdkfj ajldkjf ae oowij eiowejro </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.container}>
                    <Text style={styles.titleStyle}>SKILLS</Text>
                    <View style={styles.skillTextContainer}>
                        <Text style={styles.skillTextStyleBold}>TECHNICAL-</Text>
                        <Text style={styles.skillTextStyle}>Microsoft Office / Email Management / Photoshop / Mac &amp; PC System / Enter your skills here / ENTER YOUR SKILLS HERE</Text>
                    </View>
                    <View style={styles.skillTextContainer}>
                        <Text style={styles.skillTextStyleBold}>PROFESSIONAL-</Text>
                        <Text style={styles.skillTextStyle}>Team Communication / Decision-making / Time Management / Active Listening / Public speaking / Enter your skills here / ENTER YOUR SKILLS HERE</Text>
                    </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.container}>
                    <Text style={styles.titleStyle}>PUBLICATIONS</Text>
                    <Text style={styles.publicationTextStyle}>akajkdj akjd woie jjadja ldkjf wueirjw elkjaldj w0eurjwoiejjnekjwoe woeur woeriwejr ioeqoi wjoijoerhtw rti4 fnslkeorslfkg shaeland nknldskandnl ndl alnakdsaldaldkfla dfaanl sf</Text>
                </View>
            </Page>
        </Document>
    )
}

export default TemplatePDFThree