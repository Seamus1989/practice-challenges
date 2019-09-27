let morseChar = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}
/* run (boolean, text) */
function run(morseToEnglish, textToTranslate) {
	let morse = Object.values(morseChar)
	let english = Object.keys(morseChar)
	let j = 0;
	let textArray = [];
	let result = [];
	(function textLoop(morseToEnglish, textToTranslate, result) {
		if (morseToEnglish) {
			//////////////////////////////////////////////////////////////////////////
			if (textToTranslate === "") {
				return result
			} else {
				let spaces = (textToTranslate.indexOf(" "));
				if (spaces === -1) {
					let charIndex = morse.indexOf(textToTranslate)
					let letter = english[charIndex]
					result.push(letter)
				} else if (spaces === 0) {
					result.push(" ")
					let resultingString = textToTranslate.slice(2, textToTranslate.length)
					textLoop(true, resultingString, result)
				} else {
					let subst = textToTranslate.substring(0, spaces)
					let charIndex = morse.indexOf(subst)
					let letter = english[charIndex]
					result.push(letter)
					let resultingString = textToTranslate.slice(spaces+1, textToTranslate.length)
					textLoop(true, resultingString, result)
				}
			}
			//////////////////////////////////////////////////////////////////////////
		} else if (!morseToEnglish) {
			//////////////////////////////////////////////////////////////////////////
			if (textToTranslate === "") {
				return result
			} else {
				let firstChar = textToTranslate[0]
				let indexOfChar = english.indexOf(firstChar)
				if (indexOfChar === -1) { // its a space.
					result.push("  ")
					let resultingString = textToTranslate.slice(1, textToTranslate.length)
					textLoop(false, resultingString, result)
				} else {
					if (textToTranslate.length === 1) {
						let moreChar = morse[indexOfChar]
						let inputString = moreChar
						result.push(inputString)
						let resultingString = textToTranslate.slice(1, textToTranslate.length)
						textLoop(false, resultingString, result)
					} else if (textToTranslate.length != 1) {
						let moreChar = morse[indexOfChar]
						let inputString = moreChar+" "
						result.push(inputString)
						let resultingString = textToTranslate.slice(1, textToTranslate.length)
						textLoop(false, resultingString, result)
					}
				}
			}
			//////////////////////////////////////////////////////////////////////////
		}
	})(morseToEnglish, textToTranslate, result)
	return result.join("")
}

console.log(run(true, "-- -.--   -. .- -- .   .. ...   ... . .- -- ..- ..."))
let reply = run(false,"hello seamus nice to meet you")
console.log("REPLY: "+reply)
console.log("TRANSLATED: "+run(true, reply))
