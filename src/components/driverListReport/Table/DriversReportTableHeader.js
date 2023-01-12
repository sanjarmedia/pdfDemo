import React from 'react';
import {Text, View, StyleSheet} from '@react-pdf/renderer';

const borderColor = '#EEEEEE'
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    textAlign: 'left',
  },
  row1: {
    width: '14%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 6,
    paddingTop: 4,
  },
  row2: {
    width: '12%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 6,
    paddingTop: 4,
  },
  row3: {
    width: '7%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 6,
    paddingTop: 4,
  },
  row4: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 6,
    paddingTop: 4,
  },
  row5: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 6,
    paddingTop: 4,
  },
});

export const DriversReportTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.row1}>Driver First Name</Text>
    <Text style={styles.row1}>Driver Last Name</Text>
    <Text style={styles.row1}>Driver Company {`\n`} ID</Text>
    <Text style={styles.row2}>Date Of Birth</Text>
    <Text style={styles.row2}>License</Text>
    <Text style={styles.row3}>License State</Text>
    <Text style={styles.row4}>CDL (Y/N)</Text>
    <Text style={styles.row1}>Driver Phone</Text>
    <Text style={styles.row4}>Active or {`\n`} Inactive</Text>
    <Text style={styles.row5}>Date Of Hire</Text>
    <Text style={styles.row5}>Date of {`\n`} Termination</Text>
  </View>
);
