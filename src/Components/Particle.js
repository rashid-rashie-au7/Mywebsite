import React from 'react'
import Particles from 'react-particles-js'
import deer from '../assets/small-deer.2a0425af.svg'
import './Particle.css'
function Particle() {

	return (
		<>
			<Particles
				className='particle-canvas'
				params={{
					"particles": {
						"number": {
							"value": 50
						},
						"size": {
							"value": 3
						}
					},
					"interactivity": {
						"events": {
							"onhover": {
								"enable": true,
								"mode": "repulse"
							}
						}
					}
				}} />
		</>
	);
}

export default Particle;