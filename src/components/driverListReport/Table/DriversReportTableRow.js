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
        width: '14%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 6,
        paddingTop: 4,
    },
    row2: {
        width: '12%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 6,
        paddingTop: 4,
    },
    row3: {
        width: '7%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 6,
        paddingTop: 4,
    },
    row4: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 6,
        paddingTop: 4,
    },
    row5: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 6,
        paddingTop: 4,
    },
  });


export const DriversReportTableRow = ({items}) => {
    const rows = items.map( item => 
        <View style={styles.row} key={item.id.toString()}>
            <Text style={styles.row1}>{item.first_name}</Text>
            <Text style={styles.row1}>{item.last_name}</Text>
            <Text style={styles.row1}>{item.company_id}</Text>
            <Text style={styles.row2}>{item.date_of_birth}</Text>
            <Text style={styles.row2}>{item.license}</Text>
            <Text style={styles.row3}>{item.license_state}</Text>
            <Text style={styles.row4}>{item.cdl_yn}</Text>
            <Text style={styles.row1}>{item.phone_number}</Text>
            <Text style={styles.row4}>{item.status}</Text>
            <Text style={styles.row5}>{item.date_of_hire}</Text>
            <Text style={styles.row5}>{item.date_of_termination}</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment> )
};
