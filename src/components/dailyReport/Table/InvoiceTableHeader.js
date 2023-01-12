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
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 5,
  },
  state: {
    width: '45%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 5,
    paddingLeft: 8,
  },
  identified_miles: {
    width: '20%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 5,
    paddingLeft: 8,
  },
  unidentified_miles: {
    width: '20%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 5,
    paddingLeft: 8,
  },
  total: {
    width: '10%',
    textAlign: 'left',
    paddingTop: 5,
    paddingLeft: 8,
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.no}>No</Text>
    <Text style={styles.state}>State</Text>
    <Text style={styles.identified_miles}>Identified Miles</Text>
    <Text style={styles.unidentified_miles}>Unidentified Miles</Text>
    <Text style={styles.total}>Total</Text>
  </View>
);

export default InvoiceTableHeader