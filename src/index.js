import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter} from "react-router-dom";

// import * as deviceModule from '../node_modules/aws-iot-device-sdk/device';

// const loadAWS = function(){
//   //
//    // The device module exports an MQTT instance, which will attempt
//    // to connect to the AWS IoT endpoint configured in the arguments.
//    // Once connected, it will emit events which our application can
//    // handle.
//    //
//     const device = deviceModule({
//       keyPath: '/Users/jaskaranpreetsingh/Projects/lvt/node_modules/aws-iot-device-sdk/certs/35451d4407-private.pem',
//       certPath: '/Users/jaskaranpreetsingh/Projects/lvt/node_modules/aws-iot-device-sdk/certs/35451d4407-certificate.pem',
//       caPath: '/Users/jaskaranpreetsingh/Projects/lvt/node_modules/aws-iot-device-sdk/certs/root-CA-certificate.pem',
//       clientId: 'client-id-1',
//       region: undefined,
//       baseReconnectTimeMs: 4000,
//       keepalive: 300,
//       protocol: 'mqtts',
//       port: 8883,
//       host: 'a21eiei82rfb3s-ats.iot.us-east-2.amazonaws.com',
//       debug: true
//   });

//   let timeout;
//   let count = 0;
//   const minimumDelay = 250;
  
//   if (true) {
//       device.subscribe('topic_1');
//   } else {
//       device.subscribe('topic_2');
//   }
//   // if ((Math.max(args.delay, minimumDelay)) !== args.delay) {
//   //     console.log('substituting ' + minimumDelay + 'ms delay for ' + args.delay + 'ms...');
//   // }
//   timeout = setInterval(function() {
//       count++;

//       if (true) {
//         device.publish('topic_2', JSON.stringify({
//             mode1Process: count
//         }));
//       } else {
//         device.publish('topic_1', JSON.stringify({
//             mode2Process: count
//         }));
//       }
//   }, minimumDelay); // clip to minimum

//   //
//   // Do a simple publish/subscribe demo based on the test-mode passed
//   // in the command line arguments.  If test-mode is 1, subscribe to
//   // 'topic_1' and publish to 'topic_2'; otherwise vice versa.  Publish
//   // a message every four seconds.
//   //
//   device
//       .on('connect', function() {
//         console.log('connect');
//       });
//   device
//       .on('close', function() {
//         console.log('close');
//       });
//   device
//       .on('reconnect', function() {
//         console.log('reconnect');
//       });
//   device
//       .on('offline', function() {
//         console.log('offline');
//       });
//   device
//       .on('error', function(error) {
//         console.log('error', error);
//       });
//   device
//       .on('message', function(topic, payload) {
//         console.log('message', topic, payload.toString());
//       });
// }
ReactDOM.render(
  <BrowserRouter><App/></BrowserRouter>,
  document.getElementById('root')
);
// loadAWS()
