const yargs = require('yargs');
const app = require('./app.js');

yargs
    .usage('$0: Usage <cmd> [options]')

    // 'search' command
    .command({
        command: 'search',
        desc: '"Search a person from the star wars universe"',
        builder: yargs => {
            return yargs
                // command to search for a character
                .options('character', {
                    alias: 'c',
                    describe: 'Search for a character'
                })
        },
        handler: argv =>{
            //Need to change this
            app.search(argv.character);
        }

    })

    // adding a help menu
    .help('help').argv;