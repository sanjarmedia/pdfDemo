import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  invoiceNoContainer: {
    flexDirection: 'row',
    justifyContent: 'between',
  },
  address:{
    width: 110,
    fontSize: 9,
    textAlign: 'right',
  },
  company:{
    width: 110,
    fontSize: 14,
    textAlign: 'right',
    fontFamily: 'Helvetica-Bold',
  },
  ista_status: {
    marginTop: 7,
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
  },
  data: {
    marginTop: -5,
    fontSize: 9,
    fontWeight: 'bold',
  }
});


const InvoiceNo = ({invoice}) => (
  <Fragment>
    <View style={styles.invoiceNoContainer}>
    <View>
      <Text style={{fontSize: 8,marginTop: -20}}>
        Generated: {invoice.generated}
      </Text>
      <Text style={styles.ista_status}>
        {invoice.ifata_status}
      </Text>
      <Text style={styles.data}>
        {`${invoice.range1_date} - ${invoice.range2_date}`}
      </Text>
    </View>
      <View>
        <Text style={styles.company}>
          {invoice.company}
        </Text>
        <Text style={styles.address}>
          {invoice.address}
        </Text>
      </View>
    </View >
  </Fragment>
);

export default InvoiceNo