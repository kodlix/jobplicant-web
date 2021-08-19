import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer'
import Header from './Header'
import HeaderItem from './HeaderItem'
import HeaderProgressItem from './HeaderProgress';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        width: '30%',
        height: '100%'
    },
    header: {
        padding: '6px 12px',
        marginBottom: '16px'
    },
    headerTitle: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff'
    },
    headerText: {
        fontSize: '12px',
        color: '#E0E0E0'
    },
    headerContainerStyle: {
        paddingBottom: '24px'
    }
})

const TemplateOneSidebar = ({ profileInfo }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{profileInfo?.firstName} {profileInfo?.lastName}</Text>
                <Text style={styles.headerText}>Sales Representative</Text>
            </View>
            <Header label="Personal Info" />
            <View style={styles.headerContainerStyle}>
                <HeaderItem title="Phone" label={profileInfo?.contactPhone} />
                <HeaderItem title="E-mail" label={profileInfo?.contactEmail} />
                <HeaderItem title="LinkedIn" label="linkedin.com/in/jilimorganzety" />
            </View>
            <Header label="Skills" />
            <View style={styles.headerContainerStyle}>
                {profileInfo?.skills.map((skill, i) => <HeaderProgressItem key={i} title={skill} />)}
            </View>
            <Header label="Hobbies" />
            <View style={styles.headerContainerStyle}>
                {profileInfo?.hobbies.map((hobby, i) => <HeaderProgressItem key={i} title={hobby} />)}
            </View>
        </View>
    )
}

export default TemplateOneSidebar