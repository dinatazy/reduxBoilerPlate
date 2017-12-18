'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import { fetchData } from '../actions/actions'
import firebase from 'firebase'

class Launch extends Component {

    constructor(props) {
        super(props);
    }

/*     componentDidMount() {
        firebase.auth().createUserWithEmailAndPassword('email@email.com', '123456').then(function (res) {
            console.log('res', res)
        });
    } */

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Redux Examples</Text>
                <TouchableHighlight style={styles.button} onPress={() => this.props.fetchData()}>
                    <Text style={styles.buttonText}>Load Data</Text>
                </TouchableHighlight>
                <View style={styles.mainContent}>
                    {
                        this.props.appData.isFetching && <Text>Loading</Text>
                    }
                    {
                        this.props.appData.data.length ? (
                            this.props.appData.data.map((person, i) => {
                                return <View key={i} >
                                    <Text>Name: {person.name}</Text>
                                    <Text>Age: {person.age}</Text>
                                </View>
                            })
                        ) : null
                    }
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        marginTop: 100
    },
    text: {
        textAlign: 'center'
    },
    button: {
        height: 60,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b7eff'
    },
    buttonText: {
        color: 'white'
    },
    mainContent: {
        margin: 10,
    }
})

function mapStateToProps(state) {
    return {
        appData: state.appData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Launch)



