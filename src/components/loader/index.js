import React from 'react'
import Loader from 'react-loaders'
import './styles.css'
export default () => {
    return (
        <div className="loaders">
            <div className="loader-container">
                <Loader innerClassName="soloader" 
                    size="md"
                    type="line-scale-pulse-out-rapid"
                    active={true}/>
            </div>
        </div>
    )
}
