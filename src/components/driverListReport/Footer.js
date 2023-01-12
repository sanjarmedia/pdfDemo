import React from 'react'
import {Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    titleContainer:{
        textAlign: 'right',
        fontSize: 8,
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