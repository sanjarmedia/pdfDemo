import React from 'react'
import {PDFViewer, PDFDownloadLink} from '@react-pdf/renderer'
// import Invoice from './components/reports/Invoice'
// import invoice from './data/invoice'
// import {Daily} from './components/dailyReport/Daily'
// import daily from './data/daily'
// import {warnings} from './data/warning'
// import Warning from './components/warnings/Warning'
import {DriversReport} from './components/driverListReport/DriversReport'
// import {driversListReport} from './data/driversListReport'
import {VehiclesListReport} from './components/vehiclesListReport/VehiclesListReport'
import {vehiclesListReport} from './data/vehiclesListReport'
import './App.css'

export function App() {
  return (
    <>
      <PDFViewer className='page'>
        {/*<Invoice invoice={invoice}/>*/}
        {/*<Daily daily={daily}/>*/}
        {/*<Warning warning={warnings} />*/}
        {/*<DriversReport driverReports={driversListReport} />*/}
        <VehiclesListReport vehiclesReports={vehiclesListReport} />
      </PDFViewer>
      {/*<PDFDownloadLink document={<Daily daily={daily}/>} fileName='test'>*/}
      {/*  test*/}
      {/*</PDFDownloadLink>*/}
    </>
  )
}
