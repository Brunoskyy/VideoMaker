const readline = require('readline-sync')
const robots = {
	text: require('./robots/text.js')
}

async function start() {
	const content = {}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()

	await robots.text(content)

	function askAndReturnSearchTerm() {
		return readline.question('Type a wikipedia search term: ')
	}

	function askAndReturnPrefix() {
		const prefixes = ['Who is', 'What is', 'The history of']
		const selectPrefixesIndex = readline.keyInSelect(prefixes, 'Choose any option: ')
		const selectPrefixesText = prefixes[selectPrefixesIndex]

		return selectPrefixesText
	}

	console.log(content)
}

start()
