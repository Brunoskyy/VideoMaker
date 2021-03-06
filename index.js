const readline = require('readline-sync')

function start() {
	const content = {}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()

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
