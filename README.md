# learnjs

## Installation

### Preliminary

First, install [Homebrew](https://brew.sh/).
Next run the following:  
`brew install git`  
`brew install yarn`  

### Cloning the Repo

Clone the repo into the current directory by running the following:  
`git clone https://github.com/Kilenaitor/learnjs.git`

Then go into the repo with  
`cd learnjs`

### Install Dependencies
Once inside the repo, install dependencies with  
`yarn install`

## Structure

The repo is split into lessons. Each lesson is numbered.
The lessons gradually get more difficult the more you do.
For now they're easy; I will add more later.

Each lesson will have two files (as of writing this, that's the plan).

1. `<lesson>.js`
2. `<lesson>.test.js`

The `<lesson>.js` file is what you, the author, will be implementing.
You do **not** need to modify the `*.test.js` files. Those are written by me.

## Completing the Lesson

Open the corresponding `.js` file for your lesson and you will be presented with one or more places for you to add code.
The places are designated with `// Implement` for you. You do not need to modify the pre-existing code to make your solution work.

When you are satisfied with your solution, save the file.

## Testing your solution

After writing your code, run the command `yarn test` which will kick off the test suite for all the lessons.

If you only want to run a single lesson, just run `yarn test <lesson>/`.
Otherwise _all_ of them will be run by default.

If you see zero (0) failures, hooray! You successfully implemented the correct solution.
If you see any failures, it means you have bugs in your solution.
