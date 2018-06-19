import React from 'react'
import Loader from './loader/index'
import './loader/styles.css'

export default (props) => {
  if (props.error) {
    console.log(props.error);
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) {
    return <Loader active={ true } size={ 'md' } type="line-scale-pulse-out" />
  } else {
    return null;
  }
} 