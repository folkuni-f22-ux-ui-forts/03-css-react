import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
	// State-variabler och refs
	const [chameleonToggled, setChameleonToggled] = useState(false)
	const [isVisible, setIsVisible] = useState(true)
	const inputRef = useRef(null)
	const buttonRef = useRef(null)
	// console.log('inputRef', inputRef)

	// useEffect körs när komponenten renderas första gången
	useEffect(() => {
		inputRef.current.focus()
	}, [])

	// CSS classes
	const chameleonClass = 'chameleon ' + (chameleonToggled ? 'toggled' : '')
	const visibleClass = 'visibility-container ' + (isVisible ? '' : 'invisible')

	// Event handlers
	const chameleonClick = () => setChameleonToggled(!chameleonToggled)
	const handleVisibility = () => setIsVisible(!isVisible)
	const handleFocus = () => {
		inputRef.current.focus()
		buttonRef.current.classList.toggle('fancy')
	}

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

			<div className="form">
				<input ref={inputRef} />
				<button ref={buttonRef} onClick={handleFocus}> Select the input field </button>
			</div>

		</main>
	)
}

export default App
