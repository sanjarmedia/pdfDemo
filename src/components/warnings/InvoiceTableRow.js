import React, {Fragment} from 'react';
import {Text, View, StyleSheet} from '@react-pdf/renderer';

const borderColor = '#EEEEEE'
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'between',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 9,
  },
  no: {
    width: '5.5%',
    height: '100%',
    textAlign: 'center',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 5,
  },
  data: {
    width: '18%',
    height: '100%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 5,
    paddingLeft: 4,
  },
  type: {
    width: '14.5%',
    height: '100%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'center',
    paddingRight: 15,
    paddingTop: 8,
  },
  vehicle: {
    width: '8%',
    height: '100%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 5,
  },
  driver: {
    width: '16%',
    height: '100%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 5,
  },
  description: {
    width: '30%',
    paddingTop: 5,
  },
});


const InvoiceTableRow = ({warning}) => {
  const rows = warning.map(item =>
    <View style={styles.row} key={item.id.toString()}>
      <View style={styles.no}>
        <Text>{item.id}</Text>
      </View>
      <View style={styles.data}>
        <Text>{item.data} {item.time}</Text>
      </View>
      <View style={styles.type}>
        <Text>{item.type}</Text>
      </View>
      <View style={styles.vehicle}>
        <Text>{item.vehicle}</Text>
      </View>
      <View style={styles.driver}>
        <Text>{item.driver}</Text>
      </View>
      <View style={styles.description}>
        <Text>{item.description}</Text>
      </View>
    </View>
  )
  return (<Fragment>{rows}</Fragment>)
};

export default InvoiceTableRow