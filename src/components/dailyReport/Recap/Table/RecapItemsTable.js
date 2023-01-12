import React from 'react';
import {View, StyleSheet} from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    borderWidth: 1,
    borderTopColor: '#000000',
    borderLeftColor: '#EEEEEE',
    borderRightColor: '#EEEEEE',
    borderBottomColor: '#EEEEEE',
  },
});

const RecapItemsTable = ({recap}) => (
  <View style={styles.tableContainer}>
    <InvoiceTableHeader/>
    <InvoiceTableRow items={recap}/>
  </View>
);

export default RecapItemsTable