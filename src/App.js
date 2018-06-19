import React, { Component } from 'react'
import { IntlProvider, addLocaleData, injectIntl } from "react-intl"
import arLocaleData from "react-intl/locale-data/ar"
import esLocaleData from "react-intl/locale-data/es"
import Layout from './components/Layout'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import './styles/global.css'

export default class App extends Component {
  render() {
    UIkit.use(Icons);
    return (
        <Layout />
    );
  }
}
