import React from 'react';
import {StyleSheet, View, Text} from '@react-pdf/renderer';


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    fontSize: 9,
  },
  signature: {
    width: 200,
    height: 1,
    borderWidth: 1,
    borderColor: 'black'
  },
  signatureText: {
    paddingTop: 5,
    margin: 'auto',
  }
});

export const Signature = () => (
  <View style={styles.container}>
    <Text style={{fontFamily: 'Helvetica-Bold',}}>I certify these entries are true and correct</Text>
    <View style={{marginTop: 10, marginLeft: 10}}>
      <Text style={styles.signature}/>
      <Text style={styles.signatureText}>
        Driver’s signature
      </Text>
    </View>
  </View>
)