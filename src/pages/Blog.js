import React from 'react'
import getLoadableComponent from '../components/Loadable'

export default class Loader extends React.Component {
  render() {
    const LoadableComponent = getLoadableComponent(
      import('./blog/index'), 
      ['http://slowwly.robertomurray.co.uk/delay/2900/url/https://jsonplaceholder.typicode.com/posts/10']
      )
    return (
    <LoadableComponent>
      { this.props.children }
    </LoadableComponent>
    )
  }
}