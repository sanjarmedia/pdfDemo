import React, {Fragment} from 'react';
import {Text, View, StyleSheet} from '@react-pdf/renderer';

const borderColor = '#EEEEEE'
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    fontSize: 9,
  },
  vehicle: {
    width: '25%',
    paddingTop: 5,
  },
  start: {
    width: '25%',
    paddingTop: 5,
    paddingLeft: 8,
  },
  end: {
    width: '25%',
    paddingTop: 5,
    paddingLeft: 8,
  },
  distance: {
    width: '25%',
    paddingTop: 5,
    paddingLeft: 8,
  },

});


const InvoiceTableRow = ({items, daily}) => {
  const rows = items.map(item =>
    <View style={styles.row} key={item.id.toString()}>
      <Text style={styles.vehicle}>{daily.vehicle}</Text>
      <Text style={styles.start}>{item.start}</Text>
      <Text style={styles.end}>{item.end}</Text>
      <Text style={styles.distance}>{item.distance} mi</Text>
    </View>
  )
  return (<Fragment>{rows}</Fragment>)
};

export default InvoiceTableRow