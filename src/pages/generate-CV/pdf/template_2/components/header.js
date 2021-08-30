import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    alignSelf: "flex-start",
  },
  nameContainer: {
    flexDirection: "row",
  },
  nameTextStyle: {
    fontSize: "30px",
    fontWeight: "normal",
  },
  nameTextStyleBold: {
    fontWeight: "bold",
    fontSize: "30px",
  },
  subtitleTexStyle: {
    fontWeight: 17,
    letterSpacing: 2,
  },
  right: {
    alignSelf: "flex-end",
  },
  rightTextContainer: {
    flexDirection: "row",
  },
  rightKeyTextBold: {
    fontSize: 12,
    fontWeight: "bold",
  },
  rightTextStyle: {
    fontSize: 12,
    fontWeight: "normal",
  },
});

const Header = ({ profileInfo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTextStyleBold}>{profileInfo?.firstName}</Text>
          <Text> </Text>
          <Text style={styles.nameTextStyle}> {profileInfo?.lastName}</Text>
        </View>
        {profileInfo?.experiences[0] && (
          <Text style={styles.subtitleTexStyle}>
            {profileInfo?.experiences[0].jobTitle}
          </Text>
        )}
      </View>
      <View style={styles.right}>
        {profileInfo?.contactPhoneNumber && <View style={styles.rightTextContainer}>
          <Text style={styles.rightKeyTextBold}>T:</Text>
          <Text style={styles.rightTextStyle}>
            {profileInfo?.contactPhoneNumber}
          </Text>
        </View>}
        {profileInfo?.contactEmail && <View style={styles.rightTextContainer}>
          <Text style={styles.rightKeyTextBold}>E:</Text>
          <Text style={styles.rightTextStyle}>
            {" "}
            {profileInfo?.contactEmail}
          </Text>
        </View>}
        {profileInfo?.website && (
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightKeyTextBold}>A:</Text>
            <Text style={styles.rightTextStyle}> {profileInfo?.website}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Header;
