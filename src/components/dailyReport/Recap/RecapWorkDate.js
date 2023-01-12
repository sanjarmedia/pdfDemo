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
    width: '104px',
    height: '50px',
    borderRightColor: borderColor ,
    borderRightWidth: 1.5,
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 6,
    paddingBottom: 6,
    textAlign: 'center',
  },
  lastDiv:{
    width: '104px',
    height: '50px',
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 6,
    paddingBottom: 6,
    textAlign: 'center',
  },
  time: {
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: "#FFFFFF",
    width: 43,
    borderColor: borderColor ,
    borderWidth: 1.5,
    borderRadius: 5,
    paddingTop: 5,
    fontFamily: 'Helvetica-Bold',
    fontsSize: 10
  }
})
const RecapWorkDate = ({recap}) => (
  <View style={styles.container}>
    <View style={styles.div}>
      <Text>
        {recap.day || "Available On Duty"}
      </Text>
      <View style={styles.time}>
        <Text>
          {recap.time || "00:00"}
        </Text>
      </View>
    </View>
    <View style={styles.lastDiv}>
      <Text>
        {recap.day || "Worked Today"}
      </Text>
      <View style={styles.time}>
        <Text>
          {recap.time || "00:00"}
        </Text>
      </View>
    </View>
  </View>
)
export default RecapWorkDate