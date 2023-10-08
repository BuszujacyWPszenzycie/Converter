const allBtns = document.querySelectorAll('.btn')
const allModals = document.querySelectorAll('.modal')
const allRadioInputs = document.querySelectorAll('.input__radio')
const allRadioLabels = document.querySelectorAll('.label__radio')

let allBtnsConverted = Array.prototype.slice.call(allBtns)
let allModalsConverted = Array.prototype.slice.call(allModals)

let textContentBtns = []

allBtnsConverted.forEach(item => textContentBtns.push(item.textContent))

const showModalFunctionZIndex = e => {
	let textContentOfSelectedButton = e.target.textContent
	let indexOfSelectedButton = textContentBtns.indexOf(textContentOfSelectedButton)
	allModalsConverted.forEach(modal => (modal.style.zIndex = '0'))
	allModalsConverted[indexOfSelectedButton].style.zIndex = '5'
	console.log(allBtnsConverted[indexOfSelectedButton])
}

const showModalFunctionTransition = e => {
	let textContentOfSelectedButton = e.target.textContent
	let indexOfSelectedButton = textContentBtns.indexOf(textContentOfSelectedButton)

	allModalsConverted.forEach(modal => modal.classList.remove('show-modal'))
	allModalsConverted[indexOfSelectedButton].classList.add('show-modal')
}

let textContentLabels = []

allRadioLabels.forEach(label => textContentLabels.push(label.textContent))

const selectRadioButtonFunction = e => {
	let texContentOfSelectedLabel = e.target.textContent
	let indexOfSelectedLabel = textContentLabels.indexOf(texContentOfSelectedLabel)
	allRadioLabels.forEach(label => label.classList.remove('radio-checked'))
	allRadioLabels[indexOfSelectedLabel].classList.add('radio-checked')
	// console.log(texContentOfSelectedLabel)
}

// allBtns.forEach(item => item.addEventListener('click', showModalFunctionZIndex))
allBtns.forEach(btn => btn.addEventListener('click', showModalFunctionTransition))
allRadioLabels.forEach(radio => radio.addEventListener('click', selectRadioButtonFunction))
