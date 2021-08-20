import React from 'react';
import { Document, Page, View, StyleSheet, Text } from '@react-pdf/renderer';
import moment from 'moment'
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
    console.log('profile info', profileInfo);
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Header profileInfo={profileInfo} />
                <View style={styles.divider} />
                <View style={styles.container}>
                    <Text style={styles.titleStyle}>PROFILE</Text>
                    <Text style={styles.descriptionStyle}>{profileInfo?.profile}</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.container}>
                    <Text style={styles.titleStyle}>EDUCATION</Text>
                    {profileInfo.educations.map((education, i) => <View key={i} style={styles.contentStyle}>
                        <Text style={styles.contentTitle}>{education.institution}, {education.city}, {education.country}</Text>
                        <Text style={styles.contentSubtitle}>{education.qualification} in {education.course}, {moment(education.yearOfGraducation).format("YYYY")}</Text>
                        <View style={styles.space1} />
                        {/* <Text style={styles.contentDescription}>{akdjlfa akdjf iwou3 uei3u sdk jalu 20 kjsdlalisjeoiroqij lj lkjfadf ddfadf}</Text>
                        <View style={styles.contentListStyle}>
                            <Text style={styles.contentListItemStyle}>{'\u2022 '}skajdfklajdkfj ajldkjf ae oowij eiowejro </Text>
                            <Text style={styles.contentListItemStyle}>{'\u2022 '}skajdfklajdkfj ajldkjf ae oowij eiowejro </Text>
                            <Text style={styles.contentListItemStyle}>{'\u2022 '}skajdfklajdkfj ajldkjf ae oowij eiowejro </Text>
                            <Text style={styles.contentListItemStyle}>{'\u2022 '}skajdfklajdkfj ajldkjf ae oowij eiowejro </Text>
                        </View> */}
                    </View>)}
                </View>
                <View style={styles.divider} />
                <View style={styles.container}>
                    <Text style={styles.titleStyle}>PROFESSIONAL EXPERIENCE</Text>
                    {profileInfo?.experiences.map((experience, i) => (<View key={i}>
                        <View style={styles.contentStyle}>
                            <Text style={styles.contentTitle}>{experience.jobTitle}</Text>
                            <Text style={styles.contentSubtitle}>{experience.company} / {moment(experience.startDate).format("YYYY-MM")} - {moment(experience.endDate).format("YYYY-MM")} -</Text>
                        </View>
                        <View>
                            <View style={styles.space} />
                            <Text style={styles.contentDescription}>{experience.jobDescription}</Text>
                            {/* <View style={styles.contentListStyle}>
                                <Text style={styles.contentListItemStyle}>skajdfklajdkfj ajldkjf ae oowij eiowejro </Text>
                                <Text style={styles.contentListItemStyle}>skajdfklajdkfj ajldkjf ae oowij eiowejro </Text>
                                <Text style={styles.contentListItemStyle}>skajdfklajdkfj ajldkjf ae oowij eiowejro </Text>
                                <Text style={styles.contentListItemStyle}>skajdfklajdkfj ajldkjf ae oowij eiowejro </Text>
                            </View> */}
                        </View>
                    </View>))}
                </View>
                <View style={styles.divider} />
                <View style={styles.container}>
                    <Text style={styles.titleStyle}>SKILLS</Text>
                    <View style={styles.skillTextContainer}>
                        {/* <Text style={styles.skillTextStyleBold}>TECHNICAL-</Text> */}
                        {profileInfo?.skills.map((skill, i) => <Text key={i} style={styles.skillTextStyle}>{skill}</Text>)}
                    </View>
                    {/* <View style={styles.skillTextContainer}>
                        <Text style={styles.skillTextStyleBold}>PROFESSIONAL-</Text>
                        <Text style={styles.skillTextStyle}>Team Communication / Decision-making / Time Management / Active Listening / Public speaking / Enter your skills here / ENTER YOUR SKILLS HERE</Text>
                    </View> */}
                </View>
                <View style={styles.divider} />
                <View style={styles.container}>
                    <Text style={styles.titleStyle}>HOBBIES</Text>
                    {profileInfo?.hobbies.map((hobby, i) => <Text style={styles.publicationTextStyle}>{hobby}</Text>)}
                </View>
            </Page>
        </Document>
    )
}

export default TemplatePDFThree