// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAM8X0do5Rurpysi_ei1V_cJ3nwl_PnNBc",
  authDomain: "chatproject-f3ba0.firebaseapp.com",
  databaseURL: "https://chatproject-f3ba0.firebaseio.com",
  projectId: "chatproject-f3ba0",
  storageBucket: "chatproject-f3ba0.appspot.com",
  messagingSenderId: "670222074196"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

