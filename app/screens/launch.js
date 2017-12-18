'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class Launch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <Text>Launch</Text>
            </View>
        );
    }
}


