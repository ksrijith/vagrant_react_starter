import React from 'react'
import getLoadableComponent from './Loadable'

export default class Loader extends React.Component {
  render() {
    const LoadableComponent = getLoadableComponent(import('./layout/index'))
    return (
    <LoadableComponent>
      { this.props.children }
    </LoadableComponent>
    )
  }
}