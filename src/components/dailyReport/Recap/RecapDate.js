import React from 'react';
import {StyleSheet, View, Text} from '@react-pdf/renderer';

const borderColor = "#C4C4C4"
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: borderColor ,
    borderWidth: 1.5,
    backgroundColor: "#EEEEEE",
    borderRadius: 5,
    fontSize: 9
  },
  div: {
    borderRightColor: borderColor ,
    borderRightWidth: 1.5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 6,
  },
  lastDiv:{
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 6,
  }
})
const RecapDte = ({recap}) => (
  <View style={styles.container}>
    <View style={styles.div}>
      <Text style={{margin: 'auto'}}>
        {recap.time || "00:00"}
      </Text>
      <Text style={{margin: 'auto'}}>
        {recap.day || "Nov 22"}
      </Text>
    </View>
    <View style={styles.div}>
      <Text style={{margin: 'auto'}}>
        {recap.time || "00:00"}
      </Text>
      <Text style={{margin: 'auto'}}>
        {recap.day || "Today"}
      </Text>
    </View>
    <View style={styles.div}>
      <Text style={{margin: 'auto'}}>
        {recap.time || "00:00"}
      </Text>
      <Text style={{margin: 'auto'}}>
        {recap.day || "Today"}
      </Text>
    </View>
    <View style={styles.div}>
      <Text style={{margin: 'auto'}}>
        {recap.time || "00:00"}
      </Text>
      <Text style={{margin: 'auto'}}>
        {recap.day || "Today"}
      </Text>
    </View>
    <View style={styles.div}>
      <Text style={{margin: 'auto'}}>
        {recap.time || "00:00"}
      </Text>
      <Text style={{margin: 'auto'}}>
        {recap.day || "Today"}
      </Text>
    </View>
    <View style={styles.lastDiv}>
      <Text style={{margin: 'auto'}}>
        {recap.time || "00:00"}
      </Text>
      <Text style={{margin: 'auto'}}>
        {recap.day || "Today"}
      </Text>
    </View>
  </View>
)
export default RecapDte