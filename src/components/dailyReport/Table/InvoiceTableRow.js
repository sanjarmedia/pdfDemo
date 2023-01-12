import React, {Fragment} from 'react';
import {Text, View, StyleSheet} from '@react-pdf/renderer';

const borderColor = '#EEEEEE'
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    fontSize: 9,
  },
  div_50: {
    width: '50%',
    textAlign: 'left',
  },
  div_text: {
    width: '50%',
    textAlign: 'left',
    paddingTop: 5,
    fontFamily: 'Helvetica-Bold',
  },
  left_div_text: {
    width: '50%',
    textAlign: 'left',
    paddingTop: 5,
    paddingLeft: 8,
    fontFamily: 'Helvetica-Bold',
  },
  right_divText: {
    width: '50%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 5,
    paddingLeft: 8,
  },
  right_divText2: {
    width: '50%',
    textAlign: 'left',
    paddingTop: 5,
    paddingLeft: 8,
  },
  div: {
    flexDirection: 'row',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
  },
  notes: {
    textAlign: 'left',
    flexDirection: 'row',
    height: 39,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
  }
});


const InvoiceTableRow = ({items}) => {
  const rows = items.map(item =>
    <View style={styles.row} key={item.id.toString()}>
      <View style={styles.div_50}>
        <View style={styles.div}>
          <Text style={styles.div_text}>
            Driver
          </Text>
          <Text style={styles.right_divText}>{item.driver}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.div_text}>
            ID
          </Text>
          <Text style={styles.right_divText}>{item.driver_id}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.div_text}>
            ST
          </Text>
          <Text style={styles.right_divText}>{item.st}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.div_text}>
            DL Number
          </Text>
          <Text style={styles.right_divText}>{item.dl_number}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.div_text}>
            Provider ID
          </Text>
          <Text style={styles.right_divText}>{item.provider_id}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.div_text}>
            Provider
          </Text>
          <Text style={styles.right_divText}>{item.Provider}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.div_text}>
            Carrier
          </Text>
          <Text style={styles.right_divText}>{item.carrier}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.div_text}>
            USDOT #
          </Text>
          <Text style={styles.right_divText}>{item.usdot}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.div_text}>
            Main Office
          </Text>
          <Text style={styles.right_divText}>{item.main_office}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.div_text}>
            Home Terminal
          </Text>
          <Text style={styles.right_divText}>{item.home_terminal}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.div_text}>
            From Address
          </Text>
          <Text style={styles.right_divText}>{item.from_address}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.div_text}>
            Shipping Docs
          </Text>
          <Text style={styles.right_divText}>{item.shipping_docs}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.div_text}>
            Malfunction Indicators
          </Text>
          <Text style={styles.right_divText}>{item.malfunction_indicators}</Text>
        </View>
      </View>

      <View style={styles.div_50}>
        <View style={styles.div}>
          <Text style={styles.left_div_text}>
            Co-Drivers (ID)
          </Text>
          <Text style={styles.right_divText2}>{item.co_driver_id}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.left_div_text}>
            Time Zone
          </Text>
          <Text style={styles.right_divText2}>{item.time_zone}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.left_div_text}>
            Time Zone Offset
          </Text>
          <Text style={styles.right_divText2}>{item.time_zone_offset}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.left_div_text}>
            24 Period Starting Time
          </Text>
          <Text style={styles.right_divText2}>{item.period_starting_time}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.left_div_text}>
            Exempt Driver Status
          </Text>
          <Text style={styles.right_divText2}>{item.exempt_driver_status}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.left_div_text}>
            Vehicles (VIN)
          </Text>
          <Text style={styles.right_divText2}>{item.vehicles_vin}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.left_div_text}>
            Trailers
          </Text>
          <Text style={styles.right_divText2}>{item.trailers}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.left_div_text}>
            Distance
          </Text>
          <Text style={styles.right_divText2}>{item.distance}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.left_div_text}>
            Unidentified {`\n`}
            Driver Records
          </Text>
          <Text style={styles.right_divText2}>{item.unidentified_driver_records}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.left_div_text}>
            Data Diagnostic {`\n`}
            Indicators

          </Text>
          <Text style={styles.right_divText2}>{item.data_diagnostic_indicators}</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.left_div_text}>
            To Address
          </Text>
          <Text style={styles.right_divText2}>{item.to_address}</Text>
        </View>
        <View style={styles.notes}>
          <Text style={styles.left_div_text}>
            Notes
          </Text>
          <Text style={styles.right_divText2}>{item.notes}</Text>
        </View>
      </View>
    </View>
  )
  return (<Fragment>{rows}</Fragment>)
};

export default InvoiceTableRow