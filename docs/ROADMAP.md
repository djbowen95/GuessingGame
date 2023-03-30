# ROADMAP

These are the steps I want to follow to build a minimum viable product / first version of the application.

1. Set Up Repository
Tasks involved: 
 - Create repository and clone it locally
 - Copy across files from bootcamp folder
 - Set up documentation
 - - Doc explaining project goals, source code, etc
 - - Roadmap
 - - Set license
 - Do a release so I have an easy reference point / can show the source code if required

2. Write code to pass unit tests in Letter.test.js and Word.test.js
This will test my ability to write code to meet pre-written tests. To make sure I follow a test driven approach I will:
 - Work to solve one test at a time, and only one test
 - Write the minimum code required to pass the test
 - Once the test is passing, refactor to shorten/tidy
 - Will write new unit tests if required (ie. if I find a bug)
 - Write code to pass those tests

 Once I've done these tasks, I will have completed the project as prescribed in the project brief.

3. Delete and recreate Game.js
The Game.js file in [the source code](./QA.md/#where-is-the-source-code-from) does not have unit tests, and was given fully operational. Once I have written code to pass the unit tests, I want to try and delete this file, write my own unit tests, and rebuild it.

The reasons I think this would be a useful thing to do:
 - Practice writing unit tests
 - Have to structure my own unit tests
 - Will be more complete experience to write + then meet own tests
 - Will have replaced most of the source code
 - Will have high code coverage
 - Game.js uses inquirer, so I'd have an opportunity to use mocks

The roadmap for this task will be:
 - Make a list of the named functions in the Game.js file
 - Delete the file
 - Create a list of unit tests I'd need for these functions to work
 - Write code to meet these tests
 - Refactor and write new tests as required

 4. Documentation write up
 In the [project objectives Q&A](./QA.md/#is-there-anything-else-im-hoping-to-learn-with-this-project) I noted that I want to well document this project. I'm intending to create the following documents (as gists) after completing the above steps:
  - "How I Solve the Problem" article, where I walk through step-by-step how I approached meeting the unit tests in detail, using STAR-answer style storytelling
  - TDD and Object Oriented Programming cheatsheets: with vocab/definitions, common questions I could be asked, notes on articles I've read, useful links etc.
  - A good informative README file that links to these gists

2. 
Overall steps:
1. Create a command-line client that gives a hangman style output with blank spaces, and accepts user input, with a single word. (version 1)
2. Shuffle that word from a given list. (version 2)
3. Use a web-based API to select that word - possibly the pokeAPI/make the game into a pokemon guesser.
4. Create a more aesthetic interface (version 4) - possibly using ASCII art but keeping it in the command line.

If i use the ASCII art, might want to use this resource:
https://manytools.org/hacker-tools/convert-images-to-ascii-art/go/
Can't think of a way to do this other than having a database though/wouldn't be using the API.

## Future Development
I don't think there's a big market for command-line games, but I do find the premise of guessing a movie title boring. I've been considering making this into a 'Who's That Pokemon' game, which I think could add some fun to it. Some of my ideas:

1. I could use the PokeAPI for generating new 'words' to guess
 - Automates the process of getting new words
 - Could use traits provided by the API to give 'clues'
 - As using a web API, would put using mocks into more practice 

2. Use ASCII art of the pokemon when its guessed 
 - This would be a cute way to add some visuals to the interface but keep it on the command line
 - There are web based APIs that do this but they usually need paying for. There is one that has a 10 free requests/day option that I could use to automate it
 - Alternatively, could just manually store the ASCII art somewhere
 - Would want all pokemon to have a 'colour' too - this might be easier to implement.