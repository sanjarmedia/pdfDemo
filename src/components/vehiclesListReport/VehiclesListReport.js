import React from 'react'
import {Page, Document, StyleSheet} from '@react-pdf/renderer'
import {VehiclesReportNo} from './VehiclesReportNo'
import {VehiclesReportTable} from './Table/VehiclesReportTable'
// import Footer from './Footer'


const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    paddingTop: 30,
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

export const VehiclesListReport = ({vehiclesReports}) => (
  <Document>
    <Page size="A4" orientation='landscape' style={styles.page}>
      <VehiclesReportNo vehiclesReports={vehiclesReports}/>
      <VehiclesReportTable vehiclesReports={vehiclesReports}/>
      {/*<Footer/>*/}
    </Page>
  </Document>
);
