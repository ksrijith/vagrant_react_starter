import React from 'react'
import './styles.css'
export default (props) => (
	<div id="app-main-sidebar" uk-offcanvas="overlay: true;mode: push">
        <div className="uk-offcanvas-bar">
            <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
            <ul className="uk-nav uk-nav-default">
                <li>
                    <a className="uk-navbar-item uk-logo logo" href="#">SterlingOnTap</a>
                </li>
                <li className="uk-nav-divider"></li>
                <li className="uk-parent">
                    <a href="#">Parent</a>
                    <ul className="uk-nav-sub">
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li>
                <li className="uk-nav-header">Header</li>
                <li><a href="#"><span className="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
                <li><a href="#"><span className="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
                <li><a href="#"><span className="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>
            </ul>
        </div>
    </div>
)