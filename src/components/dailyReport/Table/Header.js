import React from 'react';
import {Text, View, StyleSheet, Font} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  headerContainer: {
    textAlign: 'center',
    marginTop: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 800,
    fontFamily: 'Helvetica-Bold',
  },
});


const Header = ({invoice}) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>Vehicle: {invoice.vehicle}</Text>
  </View>
);

export default Header