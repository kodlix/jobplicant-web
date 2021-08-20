import React from "react";

import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {},
  contactItem: {
    marginVertical: "2px",
    flexDirection: "row",
  },
  contactItemTextStyle: {
    fontSize: "10px",
  },
  titleStyle: {
    fontSize: "12px",
    fontWeight: "light",
    paddingBottom: 4,
  },
  ballStyle: {
    backgroundColor: "#00008B",
    borderRadius: "50px",
    width: 10,
    height: 10,
    textAlign: 'center',
    marginRight: 3
  },
});

const ContactSidebar = ({ profileInfo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>CONTACT</Text>
      <View style={styles.contactItem}>
        <View style={styles.ballStyle}>
          <Text>#</Text>
        </View>
        <Text style={styles.contactItemTextStyle}>{profileInfo?.contactEmail}</Text>
      </View>
      <View style={styles.contactItem}>
        <View style={styles.ballStyle}>
          <Text>#</Text>
        </View>
        <Text style={styles.contactItemTextStyle}>{profileInfo?.contactPhoneNumber}</Text>
      </View>
      <View style={styles.contactItem}>
        <View style={styles.ballStyle}>
          <Text>#</Text>
        </View>
        <Text style={styles.contactItemTextStyle}>New York, NY 10005</Text>
      </View>
      {profileInfo.website && <View style={styles.contactItem}>
        <View style={styles.ballStyle}>
          <Text>#</Text>
        </View>
        <Text style={styles.contactItemTextStyle}>{profileInfo?.website}</Text>
      </View>}
    </View>
  );
};

export default ContactSidebar;
