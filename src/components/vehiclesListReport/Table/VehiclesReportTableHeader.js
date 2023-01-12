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
    width: '14.5%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 6,
    paddingTop: 4,
  },
  row2: {
    width: '7%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 6,
    paddingTop: 4,
  },
  row3: {
    width: '4.5%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 6,
    paddingTop: 4,
  },
  row4: {
    width: '9%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 6,
    paddingTop: 4,
  },
  row5: {
    width: '8%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 6,
    paddingTop: 4,
  },
});

export const VehiclesReportTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.row3}>Unit</Text>
    <Text style={styles.row2}>Vehicle Type</Text>
    <Text style={styles.row2}>Vehicle Year</Text>
    <Text style={styles.row4}>Vehicle Make</Text>
    <Text style={styles.row4}>Vehicle Model</Text>
    <Text style={styles.row1}>Gross Vehicle Weight Rating (GVWR)</Text>
    <Text style={styles.row1}>Vehicle ID number (VIN)</Text>
    <Text style={styles.row4}>License Plate</Text>
    <Text style={styles.row4}>License Plate State</Text>
    <Text style={styles.row5}>Leased or Owned</Text>
    <Text style={styles.row3}>ELD Make</Text>
    <Text style={styles.row3}>ELD Model</Text>
    <Text style={styles.row3}>ELD Year</Text>
  </View>
);
