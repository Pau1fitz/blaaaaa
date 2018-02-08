import React from 'react'
import PinPad from './containers/PinPad'
import styled, { injectGlobal } from 'styled-components'

export default () => <Application><PinPad/></Application> 

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400');
  html, 
  body,
  p {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: #BABABE;
    font-family: 'Open Sans', sans-serif;
  }
`

const Application = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
`

