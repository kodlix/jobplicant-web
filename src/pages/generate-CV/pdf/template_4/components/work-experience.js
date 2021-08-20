import React from "react";
import moment from 'moment'

import { View, Text, StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  container: {},

  titleStyle: {
    fontSize: '12px',
        fontWeight: 'semibold',
  },
  
  contentStyle: {
    paddingTop: "8px",
  },
  contentHeader: {

  },
  contentHeaderTitleStyle: {
    fontSize: '11px',
    fontWeight: 'semibold',
  },
  contentHeaderDescriptionStyle: {
    fontSize: "10px",
    flexWrap: "wrap",
    textAlign: 'justify'
  },
  contactItem: {
   
  },
  contentItemTextStyle: {
    fontSize: "10px",
  },
  spacer: {
    padding: 4,
  },
});

const WorkExperience = ({ profileInfo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>WORK EXPERIENCE</Text>
        {profileInfo.experiences.map((experience, i) => (<View key={i} style={styles.contentStyle}>
            <View style={styles.contentHeader}>
                <Text style={styles.contentHeaderTitleStyle}>{experience.jobTitle}</Text>
                <Text style={styles.contentHeaderDescriptionStyle}>{experience.company} / {moment(experience.startDate).format("YYYY-MM")} - {moment(experience.endDate).format("YYYY-MM")}</Text>
            </View>
            <View style={styles.spacer} />
            <View style={styles.contentItem}>
                
                <Text style={styles.contentItemTextStyle}>
                    {experience.description}
                </Text>
            </View>
        </View>)
        )
        }
            
    </View>
  );
};

export default WorkExperience;
