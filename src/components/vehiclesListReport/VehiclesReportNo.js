import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  invoiceNoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 9,
  },
  ista_status: {
    marginTop: 7,
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
  },
  address: {
    width: 110,
    textAlign: 'right',
  },
  company: {
    width: 110,
    textAlign: 'right',
    fontFamily: 'Helvetica-Bold',
  },
});


export const VehiclesReportNo = ({vehiclesReports}) => (
  <Fragment>
    <View style={styles.invoiceNoContainer}>
      <View>
        <Text style={{fontSize: 8, marginTop: -20}}>
         Generated: {vehiclesReports.generated}
        </Text>
        <Text style={styles.ista_status}>
          {vehiclesReports.ifata_status}
        </Text>
      </View>
      <View>
        <Text style={styles.company}>
          {vehiclesReports.company}
        </Text>
        <Text style={styles.address}>
          {vehiclesReports.address}
        </Text>
      </View>
    </View>
  </Fragment>
);
