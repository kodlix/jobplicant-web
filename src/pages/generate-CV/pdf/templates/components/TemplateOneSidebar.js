import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer'
import Header from './Header'
import HeaderItem from './HeaderItem'
import HeaderProgressItem from './HeaderProgress';

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: '12px',
        marginBottom: '16px'
    },
    headerTitle: {
        fontSize: '16px',
        marginBottom: '4px',
        fontWeight: 'bold',
        color: '#fff'
    },
    headerText: {
        fontSize: '12px',
        color: '#E0E0E0'
    },
    headerContainerStyle: {
        paddingBottom: '20px'
    },
    sidePanelContents: {
        backgroundColor: '#333',
        width: '180px'
    }
})

const TemplateOneSidebar = ({ profileInfo }) => {
    return (
        <View style={styles.container}>
            <View style={styles.sidePanelContents}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{profileInfo?.firstName} {profileInfo?.lastName}</Text>
                    <Text style={styles.headerText}>Sales Representative</Text>
                </View>
                <Header label="Personal Info" />
                <View style={styles.headerContainerStyle}>
                    <HeaderItem title="Phone" label={profileInfo?.contactPhoneNumber} />
                    <HeaderItem title="E-mail" label={profileInfo?.contactEmail} />
                    <HeaderItem title="LinkedIn" label="linkedin.com/in/jilimorganzety"
                    />
                </View>
                <Header label="Skills" />
                <View style={styles.headerContainerStyle}>
                    {profileInfo?.skills.map((skill, i) => <HeaderProgressItem key={i} title={skill} />)}
                </View>
                <Header label="Languages" />
                <View style={styles.headerContainerStyle}>
                    <HeaderProgressItem title="Spanish" />
                    <HeaderProgressItem title="English" />
                </View>
            </View>
        </View>
    )
}

export default TemplateOneSidebar