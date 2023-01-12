import React from 'react';
import {Text, View, StyleSheet} from '@react-pdf/renderer';
import RecapDate from './Recap/RecapDate';
import RecapWorkDate from './Recap/RecapWorkDate';

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
  }
})

const Recap = ({daily}) => (
  <View style={styles.container}>
    <Text>Recap</Text>
    <RecapDate recap={daily.recap} />
    <RecapWorkDate recap={daily.recap} />
  </View>
);

export default Recap