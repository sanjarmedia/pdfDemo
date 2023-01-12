import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer'
import {DriversReportTableHeader} from './DriversReportTableHeader'
import {DriversReportTableRow} from './DriversReportTableRow'

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        borderWidth: 1,
        borderTopColor: '#000000',
        borderLeftColor: '#EEEEEE',
        borderRightColor: '#EEEEEE',
        borderBottomColor: '#EEEEEE',
    },
});

export const DriversReportTable = ({invoice}) => (
    <View style={styles.tableContainer}>
        <DriversReportTableHeader />
        <DriversReportTableRow items={invoice.items} />
    </View>
  );
