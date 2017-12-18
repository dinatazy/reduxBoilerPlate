'use strict';

import React, { Component } from 'react';
import {
    View,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import { Badge, Text } from 'react-native-elements'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let { email, password } = this.state
        //to do navigate and show data there
        return (
            <View style={styles.container}>
                <Text h4>Welcome {this.props.appData.data}</Text>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
})

function mapStateToProps(state) {
    return {
        appData: state.appData
    }
}

export default connect(
    mapStateToProps,
    null
)(Home)



