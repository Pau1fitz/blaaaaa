import React, { Component } from 'react'
import PinPad from './containers/PinPad'
import styled from 'styled-components'
import './App.css'

export default () => <Application><PinPad/></Application> 

const Application = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
`;

