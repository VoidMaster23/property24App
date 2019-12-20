import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Login from './components/Login';
import {StatusBar} from 'react-native';
import SignUp from './components/SignUp';
import TabbedView from './nav/TabbedView';
import CreateListing from './components/CreateListing';
import EditListing from './components/EditListing';
import ViewListing from './components/ViewListing';

//this specifies how different screens will be shown
const RouterComp = () => {
  return (
    //parent
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={Login} hideNavBar />
          <Scene key="signUp" component={SignUp} hideNavBar  initial />
          <Scene
            key="tabs"
            navigationBarStyle={styles.navBar}
            component={TabbedView}
            title="property24"
            titleStyle={styles.navTitle}
          />
          <Scene
            key="createListing"
            component={CreateListing}
            title="Create a Listing"
          />

          <Scene
            key="editListing"
            component={EditListing}
            title="Editing Property"
          />

          <Scene
            key="viewListing"
            component={ViewListing}
            title="3 Bedroom Villa"
          />
        </Scene>

        <Scene key="main">
          <Scene key="createListing" component={CreateListing} />
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = {
  navTitle: {
    color: 'white', // changing navbar title color
  },

  navBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'royalblue', // changing navbar color
    textAlign: 'center',
  },
};

export default RouterComp;
