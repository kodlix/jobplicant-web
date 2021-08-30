import React from 'react';
import moment from 'moment';
import { ProgressBar } from 'primereact/progressbar';
import { Dropdown } from 'primereact/dropdown'
import { useState } from 'react';

import '../../designs/template-one/TemplateOne.css'

import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'
import TemplateOneSidebar from './components/TemplateOneSidebar';
import TemplateOneContent from './components/TemplateOneContent';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#e4e4e4',
        position: 'relative',
    },
    sidePanelBackground: {
        backgroundColor: '#e4e4e4',
        width: '180px',
        height: '100vh',
        position: 'absolute',
        top: 0,
        bottom: 0,
        zIndex: -1
    },
    contents: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
})

const SkillLevel = ({ editMode }) => {
    const skills = [
        { label: 'Novice', value: 20 },
        { label: 'Amateur', value: 50 },
        { label: 'Professional', value: 75 },
        { label: 'Expert', value: 100 }
    ];
    const [selectedSkill, setSelectedSkill] = useState(0);

    return (<>
        {editMode && <Dropdown
            options={skills}
            value={selectedSkill}
            onChange={e => setSelectedSkill(e.value)}
            placeholder="Skill level"
            className="form-control"
        />}
        <div style={{ padding: '10px' }}></div>
        <div className="info-progress">
            <ProgressBar value={selectedSkill} />
        </div>
    </>)
}

const TemplatePDFOne = ({ profileInfo, editMode, setEditMode }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page} wrap={false}>
                <View style={styles.contents}>
                    <TemplateOneSidebar profileInfo={profileInfo} />
                    <TemplateOneContent profileInfo={profileInfo} />
                </View>
                <View style={styles.sidePanelBackground} fixed />
            </Page>
        </Document>
    )
}

export default TemplatePDFOne