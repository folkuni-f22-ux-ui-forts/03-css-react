import { useState } from 'react'
import './App.css'

function App() {
	const [chameleonToggled, setChameleonToggled] = useState(false)

	const chameleonClass = 'chameleon ' + (chameleonToggled ? 'toggled' : '')

	const chameleonClick = () => setChameleonToggled(!chameleonToggled)

	return (
		<main>
		
			<div>
				<button onClick={chameleonClick}>
					Change color
				</button>
				<div className={chameleonClass}></div>
			</div>

		</main>
	)
}

export default App
