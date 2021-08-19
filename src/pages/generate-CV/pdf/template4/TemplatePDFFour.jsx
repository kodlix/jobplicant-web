import React from 'react';
import { Document, Page, View, StyleSheet, Text } from '@react-pdf/renderer';

import Header from './components/header';

const styles = StyleSheet.create({
    page: {},
    container: {}
})

const TemplatePDFFour = () => {
    return <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.container}>
                <Header />
                <Text>Template four</Text>
            </View>
        </Page>
    </Document>
}

export default TemplatePDFFour;