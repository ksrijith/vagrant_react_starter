import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../components/Loader'

const LoadableComponent = Loadable({
  loader: () => import('./home/index'),
  loading: Loading,
});

export default class Loader extends React.Component {
  render() {
    return (
    <LoadableComponent>
      { this.props.children }
    </LoadableComponent>
    )
  }
}