import React from 'react';
import {View, StyleSheet} from '@react-pdf/renderer';
import InvoiceTableRow from './InvoiceTableRow'
import TableHeader from "./TableHeader";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderTopColor: '#000000',
    borderLeftColor: '#FFFFFF',
    borderRightColor: '#FFFFFF',
    borderBottomColor: '#FFFFFF',
  },
});

const Odometr = ({daily}) => (
  <View style={styles.tableContainer}>
    <TableHeader/>
    <InvoiceTableRow items={daily.items} daily={daily}/>
  </View>
);

export default Odometr