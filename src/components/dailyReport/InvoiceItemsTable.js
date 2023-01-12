import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableRow from './Table/InvoiceTableRow'

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
        borderWidth: 1,
        borderTopColor: '#000000',
        borderLeftColor: '#FFFFFF',
        borderRightColor: '#FFFFFF',
        borderBottomColor: '#FFFFFF',
    },
});

  const InvoiceItemsTable = ({daily}) => (
    <View style={styles.tableContainer}>
        <InvoiceTableRow items={daily.items} />
    </View>
  );
  
  export default InvoiceItemsTable