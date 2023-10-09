import { useState } from 'react'
import './App.css'

function App() {
	const [chameleonToggled, setChameleonToggled] = useState(false)
	const [isVisible, setIsVisible] = useState(true)

	const chameleonClass = 'chameleon ' + (chameleonToggled ? 'toggled' : '')
	const visibleClass = 'visibility-container ' + (isVisible ? '' : 'invisible')

	const chameleonClick = () => setChameleonToggled(!chameleonToggled)
	const handleVisibility = () => setIsVisible(!isVisible)

	return (
		<main>
		
			<div className="chameleon-container">
				<button onClick={chameleonClick}>
					Change color
				</button>
				<div className={chameleonClass}></div>
			</div>

			<div className={visibleClass}>
				<div> visibility </div>
				<div> opacity </div>
				<div> display </div>
				{isVisible ? <div> c.rendering </div> : null}
			</div>
			<br/>
			<button onClick={handleVisibility}> Toggle visibility </button>

		</main>
	)
}

export default App
