import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer'
import {VehiclesReportTableHeader} from './VehiclesReportTableHeader'
import {VehiclesReportTableRow} from './VehiclesReportTableRow'

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

export const VehiclesReportTable = ({vehiclesReports}) => (
    <View style={styles.tableContainer}>
        <VehiclesReportTableHeader />
        <VehiclesReportTableRow items={vehiclesReports.items} />
    </View>
  );
