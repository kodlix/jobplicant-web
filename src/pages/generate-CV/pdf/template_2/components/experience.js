import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import moment from "moment";

const styles = StyleSheet.create({
  container: {
    marginTop: "10px",
  },
  divider: {
    border: "1px solid #bbb",
    width: "100%",
    height: 1,
  },
  experienceStyle: {
    paddingTop: "12px",
  },
  titleStyle: {
    fontSize: 14,
  },
  space: {
    padding: "10px",
  },
  rowStyle: {
    flexDirection: "row",
  },
  dateStyle: {
    fontSize: 12,
  },
  jobTitleStyle: {
    fontSize: 12,
  },
  jobDescriptionStyle: {
    fontSize: 11,
    textAlign: 'justify',
    flexWrap: 'wrap',
    
  },
  jobItemsStyle: {
    fontSize: 11,
  },
  experienceContentStyle: {
    borderLeftWidth: "1px",
    borderLeftColor: "#999",
    paddingLeft: 4,
    paddingBottom: 8,
    textAlign: "justify",
    flexWrap: "wrap",
    marginRight: 10
  },
});
const Experience = ({ profileInfo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <View style={styles.experienceStyle}>
        <Text style={styles.titleStyle}>WORK EXPERIENCE</Text>
      </View>
      <View style={styles.space} />
      {profileInfo?.experiences.map((experience, i) => (
        <View style={styles.rowStyle} wrap={false}>
          <View>
            <Text style={styles.dateStyle}>
              {moment(experience.startDate).format("YYYY-MM")} -{" "}
              {moment(experience.endDate).format("YYYY-MM")}
            </Text>
          </View>
          <View style={styles.space}></View>
          <View style={styles.experienceContentStyle}>
            <Text style={styles.jobTitleStyle}>
              {experience.jobTitle} / {experience.company}
            </Text>
            <View style={styles.space} />
            <Text style={styles.jobDescriptionStyle}>
              {experience.description}
            </Text>
            {/* <View>
                    <Text style={styles.jobItemsStyle}>adljfaldkjfaldkjfaldfjaldj</Text>
                    <Text style={styles.jobItemsStyle}>adljfaldkjfaldkjfaldfjaldj</Text>
                    <Text style={styles.jobItemsStyle}>adljfaldkjfaldkjfaldfjaldj</Text>
                    <Text style={styles.jobItemsStyle}>adljfaldkjfaldkjfaldfjaldj</Text>
                    <Text style={styles.jobItemsStyle}>adljfaldkjfaldkjfaldfjaldjs</Text>
                </View> */}
          </View>
        </View>
      ))}
    </View>
  );
};

export default Experience;
