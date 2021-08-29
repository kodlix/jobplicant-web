import React from "react";
import { Document, Page, View, StyleSheet, Text } from "@react-pdf/renderer";

import Header from "./components/header";
import Profile from "./components/profile";
import Education from "./components/education";
import Skill from "./components/skill";
import Experience from "./components/experience";
import Expertise from "./components/expertise";
import Interest from "./components/interest";
import Hobbies from "./components/hobbies";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#e4e4e4",
    paddingVertical: "20px",
    position: "relative",
    paddingHorizontal: "20px"
  },
  sidePanelBackground: {
    backgroundColor: "#333",
    width: "180px",
    height: "100vh",
    position: "absolute",
    zIndex: -1,
  },
  contents: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  divider: {
    border: "1px solid #bbb",
    width: "100%",
    height: 1,
  },
  rowStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 12,
  },
});

const TemplatePDFTwo = ({ profileInfo, editMode, setEditMode }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header profileInfo={profileInfo} />
        <Profile profileInfo={profileInfo} />
        <View style={styles.divider} />
        <View style={styles.rowStyle}>
          <Education profileInfo={profileInfo} />
          <Skill profileInfo={profileInfo} />
          <Expertise profileInfo={profileInfo} />
        </View>
        <Experience profileInfo={profileInfo} />
        <View style={styles.divider} />
        <View style={styles.rowStyle}>
          <Interest profileInfo={profileInfo} />
          <Hobbies profileInfo={profileInfo} />
        </View>
      </Page>
    </Document>
  );
};

export default TemplatePDFTwo;
