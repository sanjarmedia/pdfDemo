import React from 'react';
import {Page, Document, StyleSheet} from '@react-pdf/renderer';
import Header from './Header'
import InvoiceItemsTable from './InvoiceItemsTable'
import Footer from './Footer'


const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

const Warning = ({warning}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header/>
      <InvoiceItemsTable warning={warning}/>
      <Footer/>
    </Page>
  </Document>
);

export default Warning