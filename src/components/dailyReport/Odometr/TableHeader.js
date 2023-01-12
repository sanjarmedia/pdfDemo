import React from 'react';
import {Text, View, StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    alignItems: 'center',
    textAlign: 'left',
    fontFamily: 'Helvetica-Bold',
    flexGrow: 1,
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

const TableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.vehicle}>Vehicle</Text>
    <Text style={styles.start}>Start</Text>
    <Text style={styles.end}>End</Text>
    <Text style={styles.distance}>Distance</Text>
  </View>
);

export default TableHeader