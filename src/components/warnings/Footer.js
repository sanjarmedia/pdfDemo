import React from 'react';
import {Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        flexDirection: 'row',
        marginTop: 12
    },
    reportTitle:{
        fontSize: 8,
        textAlign: 'right',
    }
  });


  const Footer = () => (
    <Text
      style={styles.titleContainer}
      render={({pageNumber, totalPages}) => (
        `Page ${pageNumber} of ${totalPages}`
      )} fixed
    />
  );
  
  export default Footer