import React from 'react';
import {Text, View, StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  headerContainer: {
    textAlign: 'left',
    marginTop: 30,
  },
  headerText: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
  },
});


const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>Odometr</Text>
  </View>
);

export default Header