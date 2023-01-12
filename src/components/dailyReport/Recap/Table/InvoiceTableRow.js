import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#EEEEEE'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 1,
        alignItems: 'center',
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 9,
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


const InvoiceTableRow = ({items}) => {
    const rows = items.map( item => 
        <View style={styles.row} key={item.id.toString()}>
            <Text style={styles.no}>{item.id}</Text>
            <Text style={styles.div}>{item.status}</Text>
            <Text style={styles.div}>{item.time_est}</Text>
            <Text style={styles.div}>{item.duration}</Text>
            <Text style={styles.unidentified_miles}>{item.location}</Text>
            <Text style={styles.div}>{item.odometer}</Text>
            <Text style={styles.div}>{item.eng_hours}</Text>
            <Text style={styles.total}>{item.notes}</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment> )
};
  
  export default InvoiceTableRow