import React from 'react'
import './styles.css'
export default (props) => (
	<section>
		<div className="site uk-offcanvas-content">
			{ props.children }
		</div>
	</section>
)