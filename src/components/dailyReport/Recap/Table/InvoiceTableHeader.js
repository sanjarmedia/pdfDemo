import React from 'react';
import {Text, View, StyleSheet} from '@react-pdf/renderer';

const borderColor = '#EEEEEE'
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    alignItems: 'center',
    fontFamily: 'Helvetica-Bold',
    flexGrow: 1,
    fontSize: 9,
    textAlign: 'left',
  },
  no: {
    width: '5%',
    textAlign: 'center',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 5,
  },
  div: {
    width: '13%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
    paddingTop: 5,
  },
  unidentified_miles: {
    width: '21%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
    paddingTop: 5,
  },
  total: {
    width: '10%',
    paddingLeft: 8,
    paddingTop: 5,
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.no}>No</Text>
    <Text style={styles.div}>Status</Text>
    <Text style={styles.div}>Time (EST)</Text>
    <Text style={styles.div}>Duration</Text>
    <Text style={styles.unidentified_miles}>Location</Text>
    <Text style={styles.div}>Odometer</Text>
    <Text style={styles.div}>Eng.Hours</Text>
    <Text style={styles.total}>Notes</Text>
  </View>
);

export default InvoiceTableHeader