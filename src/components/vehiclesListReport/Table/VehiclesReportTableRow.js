import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#EEEEEE'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        borderBottomColor: borderColor,
        borderBottomWidth: 1,
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


export const VehiclesReportTableRow = ({items}) => {
    const rows = items.map( item => 
        <View style={styles.row} key={item.id.toString()}>
            <Text style={styles.row3}>{item.unit}</Text>
            <Text style={styles.row2}>{item.vehicle_type}</Text>
            <Text style={styles.row2}>{item.vehicle_year}</Text>
            <Text style={styles.row4}>{item.vehicle_make}</Text>
            <Text style={styles.row4}>{item.vehicle_model}</Text>
            <Text style={styles.row1}>{item.gross_vehicle_weight_rating}</Text>
            <Text style={styles.row1}>{item.vehicle_id_vin}</Text>
            <Text style={styles.row4}>{item.license_plate}</Text>
            <Text style={styles.row4}>{item.license_plate_state}</Text>
            <Text style={styles.row5}>{item.leased_or_owned}</Text>
            <Text style={styles.row3}>{item.eld_make}</Text>
            <Text style={styles.row3}>{item.eld_model}</Text>
            <Text style={styles.row3}>{item.eld_year}</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment> )
};
