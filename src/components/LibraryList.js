import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    return (
      <View>

      </View>
    );
  }
}

function mapStateToProps(state) {
  return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);
