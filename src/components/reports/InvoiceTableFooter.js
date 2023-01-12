import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#EEEEEE'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 11,
    },
    description: {
        width: '50%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
        paddingTop: 5,
        fontFamily: 'Helvetica-Bold',
    },
    identifiedMiles: {
        width: '20%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
        paddingTop: 5,
    },
    total: {
        width: '10%',
        textAlign: 'left',
        paddingLeft: 8,
        paddingTop: 5,
    },
  });

const InvoiceTableFooter = ({items}) => {
    const identifiedMiles = items.reduce((accumulator, value) => {
        return accumulator + value.identified_miles;
    }, 0);
    const unidentifiedMiles = items.reduce((accumulator, value) => {
        return accumulator + value.unidentified_miles;
    }, 0);
    return(    
        <View style={styles.row}>
            <Text style={styles.description}>TOTAL</Text>
            <Text style={styles.identifiedMiles}>{identifiedMiles}</Text>
            <Text style={styles.identifiedMiles}>{unidentifiedMiles}</Text>
            <Text style={styles.total}>{unidentifiedMiles + identifiedMiles}</Text>
        </View>
    )
};
  
  export default InvoiceTableFooter