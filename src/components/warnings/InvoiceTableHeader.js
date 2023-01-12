import React from 'react';
import {Text, View, StyleSheet} from '@react-pdf/renderer';

const borderColor = '#EEEEEE'
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold',
    flexGrow: 1,
    fontSize: 9,
  },
  no: {
    width: '5%',
    height: '100%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 5,
  },
  data: {
    width: '18.1%',
    height: '100%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 5,
    paddingLeft: 4,
  },
  type: {
    width: '14.8%',
    height: '100%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 5,
  },
  vehicle: {
    width: '8.8%',
    height: '100%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 5,
  },
  driver: {
    width: '16.3%',
    height: '100%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 5,
  },
  description: {
    width: '30%',
    paddingTop: 5,
    paddingLeft: 30,
    textAlign: 'left',
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.no}>No</Text>
    <Text style={styles.data}>Date & Time (EST)</Text>
    <Text style={styles.type}>Type</Text>
    <Text style={styles.vehicle}>Vehicle</Text>
    <Text style={styles.driver}>Driver</Text>
    <Text style={styles.description}>Description</Text>
  </View>
);

export default InvoiceTableHeader