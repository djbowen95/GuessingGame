# Project Objectives Q&A
## What will this project look like?
This will be a guessing game, where users try to fill the blanks and guess the title of a movie, letter-by-letter. It will have a command-line interface written in Node with Inquirer package. It will have unit tests, written in Jest, and will be developed using a test-driven development strategy.

## Why did I choose to build this project?
I have implemented unit tests into [several of my projects before](https://github.com/djbowen95/Team-Profile-Builder), but have not built something follow strict test-driven development design principles. I wanted to review what I knew about test-driven development and put it into practice on a simple project.

## Where is the source code from?
The source code is an exercise from the [University of Birmingham and Trilogy/2U Education Coding Bootcamp](). This was one of the weekly 'classroom' projects that we did: an instructor lead activity we did on the third session of each week, where we broke down and looked at a complex problem using the theory we had learned. This activity was from Week 11 of the program, where we looked at **Object-Oriented Programming** and **Test-Driven Development**. 

## What is in the source code?
The source code contains an index.js file, three javascript modules required for the game to work, an additional module exporting an array of movie titles, and two suites of unit tests written in Jest.

The two suites of unit tests are for modules that are currently empty: [Word.test.js](../test/Word.test.js) is for [Word.js](../lib/Word.js); [Letter.test.js](../test/Letter.test.js) is for [Letter.js](../lib/Letter.js). The task is to write code for these modules that meets and passes these unit tests.

For more detail, I've included [the brief for the project](./BRIEF.md) given by the bootcamp themselves.

## Is there anything else I'm hoping to learn with this project?
I've applied for a few jobs recently where I felt I was close to landing a developer role, but in the final interview I struggled with [STAR answer](https://uk.indeed.com/career-advice/interviewing/star-technique) questions. While I can easily list technologies I've used to solve a problem, I struggled to articulate the way I actually broke a technical problem down and describe the process.

I wanted to make sure that while I built this application, the process was well documented. I am going to be annotating the commits I make; following/updating a documented [project ROADMAP](./ROADMAP.md); and I am making notes as I go along that I ultimately intend to turn into a "How I Solved this Problem" gist. I'm hoping that taking time to put these ideas into writing will ultimately benefit me in the next STAR-style interview I have.

## Can I contribute?
I want to build this project on my own as a portfolio project - and so I can talk through how I solved this particular problem with test-driven principles myself. 

I do, however, have a handful of ideas of features that might be fun to add once I have a minimum viable product. I've outlined these [at the end of the ROADMAP](./ROADMAP.md/#future-development). If you're another junior developer and want to collaborate on one of these ideas over a week or so, do feel free to drop me an email at djbowen95@gmail.com.