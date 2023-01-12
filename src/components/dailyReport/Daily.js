import React from 'react'
import {Page, Document, StyleSheet, Image,} from '@react-pdf/renderer'
import InvoiceNo from './Table/InvoiceNo'
import InvoiceItemsTable from './InvoiceItemsTable'
import Header from './Odometr/Header'
import Odometr from './Odometr/Odometr'
import {Footer} from './Footer'
import Recap from './Recap'
import RecapItemsTable from './Recap/Table/RecapItemsTable'
import {Signature} from './DriverSignature'
import Chard from './chard.png'

export function Daily({daily}) {
 return (
   <Document title={daily.ifata_status}>
     <Page size='A4' style={styles.page} >
       <InvoiceNo daily={daily}/>
       <InvoiceItemsTable daily={daily}/>
       <Header/>
       <Odometr daily={daily}/>
       <Image style={styles.chard} src={Chard}/>
       <Recap daily={daily}/>
       <RecapItemsTable recap={daily.recap}/>
       <Signature/>
       <Footer/>
     </Page>
   </Document>
 )
}

const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 24,
    paddingRight: 24,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  chard: {
    marginTop: 20
  }
});