import React, {Fragment} from 'react';
import {Text, View, StyleSheet, Font} from '@react-pdf/renderer';
import Inter from '../../../Inter/inter.ttf'

Font.register({
  family: "Montserrat",
  src: Inter,
})


const InvoiceNo = ({daily}) => (
  <Fragment>
    <View style={styles.invoiceNoContainer}>
      <View>
        <Text style={styles.ista_status}>
          {daily.ifata_status}
        </Text>
        <Text style={styles.data}>
          {daily.date}
        </Text>
      </View>
      <Text style={styles.work}>
        {daily.work}
      </Text>
    </View>
  </Fragment>
);

const styles = StyleSheet.create({
  invoiceNoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // fontFamily: 'Montserrat',
  },
  ista_status: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
  },
  data: {
    marginTop: -5,
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
  },
  work: {
    width: 130,
    fontSize: 10,
  },
});

export default InvoiceNo