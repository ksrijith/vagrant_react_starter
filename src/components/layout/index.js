import React from 'react'
import Router from '../../pages/router'
import Helmet from 'react-helmet'

import Site from './Site'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Sidebar from './Sidebar'

import './styles.css'

class Layout extends React.Component {
  render () {
    return (
    <Site>
      <Helmet
        title="Sterling On-Tap"
        meta={[
          { name: 'description', content: 'IBM Sterling Order Management with Zero Implementation Costs.' },
          { name: 'keywords', content: 'Sterling, IBM, OMS, WMS, SAAS' },
        ]}
        script={[
          { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
        ]}
        link={[
          {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
        ]}
      />
      <Header />
      <Content>
        <Router />
      </Content>
      <Sidebar/>
      <Footer />
    </Site>
    )
  }
}

export default Layout