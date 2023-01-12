import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
        borderWidth: 1,
        borderTopColor: '#000000',
        borderLeftColor: '#EEEEEE',
        borderRightColor: '#EEEEEE',
        borderBottomColor: '#EEEEEE',
    },
});

  const InvoiceItemsTable = ({warning}) => (
    <View style={styles.tableContainer}>
        <InvoiceTableHeader />
        <InvoiceTableRow warning={warning} />
    </View>
  );
  
  export default InvoiceItemsTable