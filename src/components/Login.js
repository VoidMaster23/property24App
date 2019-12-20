//import statements
import React, {Component} from 'react';
import {Card, Section, TexInput, Button, Spinner} from './common';
import {emailChanged, passChanged, loginUser} from '../actions';
import {connect} from 'react-redux';
import {View, Text, Image, ScrollView} from 'react-native';

//class definintion
class Login extends Component {
  //is called whenever you enter a character in the input
  onEChange(text) {
    this.props.emailChanged(text);
  }

  onPChange(text) {
    this.props.passChanged(text);
  }

  onBPress() {
    const {email, pass} = this.props;
    console.log(this.props.error);
    this.props.loginUser({email, pass});
  }

  //called when there is an error
  renderError() {
    if (this.props.error) {
      return (
        <View style={styles.viewStyle}>
          <Text style={styles.errorStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  //determines what shows up
  renderB() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onBPress.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <ScrollView style={styles.tryBg}>
        <View style={styles.fixAlign}>
          {/* this is for the property24 logo */}
          <Section>
            <Image
              source={require('../images/property24.png')}
              style={styles.imgStyle}
              resizeMode="center"
            />
          </Section>

          {/* for the welcome and sign in words */}
          <Section>
            <View style={styles.otherViewStyle}>
              <Text style={styles.welcomeStyle}>Welcome Back,</Text>
              <Text style={styles.promptStyle}>Sign in to continue</Text>
            </View>
          </Section>
          <View>
            {/*This is for the email*/}
            <Section>
              <TexInput
                label="Email"
                placeholder="user123@gmail.com"
                onChangeText={this.onEChange.bind(this)}
                value={this.props.email}
              />
            </Section>

            {/*This is for the password*/}
            <Section>
              <TexInput
                secureTextEntry
                label="Password"
                placeholder="password"
                onChangeText={this.onPChange.bind(this)}
                value={this.props.pass}
              />
            </Section>
          </View>

          {/*Show an error */}
          {this.renderError()}

          {/* for the forgot password */}
          <Section>
            <View>
              <Text style={styles.forgotPass}>Forgot Password?</Text>
            </View>
          </Section>

          {/*This is for the login button*/}
          <Section>{this.renderB()}</Section>

          {/* this is for the signup ink  */}
          <Section>
            <View style={styles.bottomStyle}>
              <Text style={styles.bottomText}>New User? </Text>
              <Text style={styles.linkText}>Sign Up!</Text>
            </View>
          </Section>
        </View>
      </ScrollView>
    );
  }
}

//styling
const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },

  viewStyle: {
    backgroundColor: 'white',
  },

  imgStyle: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    resizeMode: 'center',
    height: 150,
    width: undefined,
  },

  otherViewStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcomeStyle: {
    fontSize: 45,
    textAlign: 'center',
    flex: 1,
  },

  promptStyle: {
    color: 'gray',
  },

  forgotPass: {
    alignSelf: 'stretch',
    color: 'gray',
    textAlign: 'center',
  },

  fixAlign: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 2,
  },

  tryBg: {
    backgroundColor: 'white',
  },

  bottomStyle: {
    flexDirection: 'row',
    paddingTop: 100,
  },

  bottomText: {
    fontSize: 18,
  },

  linkText: {
    fontSize: 18,
    color: 'royalblue',
    fontWeight: 'bold',
  },
};

//allows tou to send state as a prop
const mapStateToProps = state => {
  console.log(state.auth.error);
  return {
    email: state.auth.email,
    pass: state.auth.pass,
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

//export statement
export default connect(
  mapStateToProps,
  {emailChanged, passChanged, loginUser},
)(Login);
