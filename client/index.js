import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  onClick = e => {
    scan.scanDoc(onSuccess, onFail, {sourceType:1})
    function onSuccess(imageURI) {
      alert(imageURI)
      var image = document.getElementById('myImage')
      image.src = imageURI.replace(/file:\/\//, '/')
      alert(image.src)
    }
    function onFail(message) {
      alert('Failed because: ' + message)
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>BUTTON1234</button>
        <img id='myImage' src='http://pic-bucket.ws.126.net/photo/0001/2019-03-26/EB6JFRPJ00AN0001NOS.jpg' style={{ width: '100%', height: '100%' }} />
      </div>
    )
  }
}

Meteor.startup(init)

function init() {
  const app = document.createElement('div')
  app.id = 'app'
  document.body.appendChild(app)
  render(<App />, app)
}
