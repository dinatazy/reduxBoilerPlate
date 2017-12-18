'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import { fetchData, registerUser } from '../actions/actions'
import firebase from 'firebase'
import { FormLabel, FormInput, Button } from 'react-native-elements'

class Launch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
        }
    }

    /*     componentDidMount() {
            firebase.auth().createUserWithEmailAndPassword('email@email.com', '123456').then(function (res) {
                console.log('res', res)
            });
        } */


    render() {
        let { email, password } = this.state
        //to do navigate and show data there
        return (
            <View style={styles.container}>
                
                <FormLabel>Email</FormLabel>
                <FormInput onChangeText={(email) => { this.setState({ email }) }} />

                <FormLabel>Password</FormLabel>
                <FormInput onChangeText={(password) => { this.setState({ password }) }} />

                <Button
                    title='Register'
                    onPress={() => this.props.registerUser(email, password)}
                    buttonStyle = {{backgroundColor:'#000080', marginTop:20, }}
                />
            
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
        registerUser: (email, password) => dispatch(registerUser(email, password))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Launch)



