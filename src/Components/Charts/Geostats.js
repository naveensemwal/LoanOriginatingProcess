import React, { Component } from 'react';
//import Iframe from 'react-iframe';


export default class Geostats extends Component {
  render() {
    return (
      // <div>
      //   <Iframe url='http://localhost:8080/viewone/india.html'
      //     id="myId"
      //     allowFullScreen
      //     width='100%'
      //     height='600px'
      //   />
      // </div>

      <div>
        <div dangerouslySetInnerHTML={{
          __html: `<iframe src='http://localhost:8080/viewone/india.html'
          id="myId"
          allowFullScreen
          width='100%'
          height='600px'
          </iframe>`}}
        />
      </div>
    )
  }
}
