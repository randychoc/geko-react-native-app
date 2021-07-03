import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ReportListStyles } from '../styles/General';

class Reportlist extends Component {
  getOperations() {
    const { op, index } = this.props;    
    return (
        <View style={ReportListStyles.containerBody} key={index}>
          <View style={ReportListStyles.containerId}>
            <Text style={ReportListStyles.textIndex}>{index + 1}</Text>
          </View>
          <View>
            <Text style={ReportListStyles.textOp}>{op}</Text>
          </View>
        </View>
      );
  }

  render() {
    return <View>{this.getOperations()}</View>;
  }
}

export default Reportlist;
