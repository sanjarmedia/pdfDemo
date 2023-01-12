import React from 'react';
import {Text, StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  titleContainer: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    marginTop: 12,
    fontSize: 8,
    textAlign: 'right',
  },
});


export function Footer() {
  return (
      <Text
        style={styles.titleContainer}
        render={({pageNumber, totalPages}) => (
          `Page ${pageNumber} of ${totalPages}`
        )} fixed
      />
  )
}

