import React from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    container: {

    },
    titleContainer: {
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 8,
        paddingBottom: 4,
    },
    subtitleStyle: {
        letterSpacing: 2,
        fontSize: 14,
        fontWeight: 'normal'
    },
    spacer: {
        padding: 4
    },
    contactContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 4,
    },
    contactTextStyle: {
        fontSize: 10
    },
    contactSpacer: {
        paddingHorizontal: 4
    }
})

const Header = ({ profileInfo }) => {

    return <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>{profileInfo?.firstName} {profileInfo?.lastName}</Text>
            {profileInfo?.experiences[0] && <Text style={styles.subtitleStyle}>{profileInfo?.experiences[0].jobTitle}</Text>}
        </View>
        <View style={styles.spacer} />
        <View style={styles.contactContainer}>
            <Text style={styles.contactTextStyle}>{profileInfo?.contactPhoneNumber}</Text>
            <Text style={styles.contactSpacer}>|</Text>
            <Text style={styles.contactTextStyle}>{profileInfo?.contactEmail}</Text>
            <Text style={styles.contactSpacer}>|</Text>
            <Text style={styles.contactTextStyle}>{profileInfo?.website}</Text>
        </View>
    </View>
}

export default Header