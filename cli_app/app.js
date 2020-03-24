const people_module = require('people_module');
const inquirer = require('inquirer');

// Have inquirer method get user input, then transfer that to index.js for mehtods
const user_input = async (characterInput) =>{

    // // DIsplaying character and giving it the value, which is character.url. 
    const displayCharacters = characterInput.map(character =>{
        return {name: `${character.name}`, value: character.url}
    })

    return inquirer
        .prompt([
            {
                type: 'list', // Creating a list of characters based on search value.
                name: 'searchInput',
                message: 'Select the name of a Star Wars character',
                choices: displayCharacters // Displaying list of characters 
            }
        ]) 
}

// Printing out details from fetched url
const printCharacters = (result) =>{
    // console.log(result)
    console.log(`Name: ${result.name} | Birth: ${result.birth_year} | Gender: ${result.gender} | Hair Color: ${result.hair_color} | Eye Color: ${result.eye_color} `)
}
// Search method
async function search(searchInput){
    const searchCharacter = await people_module.search(searchInput) // This is displaying array of characters(objects)
    const selectCharacter = await user_input(searchCharacter.results) // displaying names(objects) from the results list
    
    const fetchResults =  await people_module.fetch(selectCharacter.searchInput) // fetching the URL of character
    printCharacters(fetchResults) // Printing out the character's info
}

// Export search and fetch to be used in CLI
module.exports ={
    search
}