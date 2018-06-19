import React from 'react'
import './styles.css'

const Footer = () => (
  <div className="uk-section-small uk-section-secondary">
		<div className="uk-container uk-container-expand uk-text-center uk-position-relative">
			<ul uk-margin="" className="uk-subnav tm-subnav uk-flex-inline uk-flex-center uk-margin-remove-bottom">
				<li className="uk-first-column">
					<span>
					Version
					<span uikit-version="">3.0.0-rc.6</span>
					</span>
				</li>
				<li>
					<a href="https://github.com/uikit/uikit/stargazers">
					<span uk-icon="icon: star" className="uk-margin-small-right uk-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
							<polygon fill="none" stroke="#000" strokeWidth="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27" />
						</svg>
					</span>
					<span uikit-stargazers="">12610</span>
					Stargazers
					</a>
				</li>
				<li className="">
					<a href="https://twitter.com/getuikit" className="uk-text-lowercase">
					<span uk-icon="icon: twitter" className="uk-margin-small-right uk-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
							<path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74" />
						</svg>
					</span>
					@getuikit
					</a>
				</li>
				<li className="">
					<a href="https://gitter.im/uikit/uikit">
					<span uk-icon="icon: gitter" className="uk-margin-small-right uk-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
							<rect x="3.5" y="1" width="1.531" height="11.471" />
							<rect x="7.324" y="4.059" width="1.529" height="15.294" />
							<rect x="11.148" y="4.059" width="1.527" height="15.294" />
							<rect x="14.971" y="4.059" width="1.529" height="8.412" />
						</svg>
					</span>
					Community
					</a>
				</li>
			</ul>
			<a href="./v2" className="uk-button uk-button-default tm-button-default uk-position-center-right uk-position-medium uk-visible@m">
				UIkit 2
				<span uk-icon="icon: arrow-right" className="uk-icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
					<polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14" />
					<line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5" />
					</svg>
				</span>
			</a>
		</div>
	</div>
)

export default Footer