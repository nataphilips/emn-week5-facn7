[![Build Status](https://travis-ci.com/nataphilips/emn-week5-facn7.svg?branch=master)](https://travis-ci.com/nataphilips/emn-week5-facn7)
[![codecov](https://codecov.io/gh/nataphilips/emn-week5-facn7/branch/master/graph/badge.svg)](https://codecov.io/gh/nataphilips/emn-week5-facn7)

# Autocomplete - Movie searcher
## A group project for Founders and Coders Nazareth, week 5
Check our new project on [Heroku](https://facn7-week5-api.herokuapp.com/)

![Hello](https://media.giphy.com/media/3o7rc0qU6m5hneMsuc/giphy.gif)

### `about the project`

* Week 5 Founders and Coders group project
* Topic: Node.js
* Search within the base of 100 movies top-rated on MovieDB! Just start typing the name of the movie, and our app will display the list of matches below. Then you can choose a movie, click on "More details" button, and the site will redirect you to the new page with more info on the movie.

### `how to install`

You can clone the repo by typing the command

```console
> git clone https://github.com/nataphilips/emn-week5-facn7.git
> cd week3-NIM-todo-list
> npm i
> google-chrome index.html
```
### `how to test`

Install tape and tap-spec

```console
> npm i tape -D
> npm i tap-spec -D
```

Run the test command

```console
> npm test
```

### `our process`
 1) Basic setup, created src and public folders, installed necessary packages
 2) Started with back-end functions
 3) Separated server, router and handler functions from the beginning
 4) Made API call, fetched the response on front-end with Axios
 5) Stored the base we fetched, used DOM manipulation
 6) Added CSS
 7) Added tests for back-end functions (no TDD :( )
 8) Hosted the project on Heroku
 9) Employed continuous integration with Travis
 10) Addded test coverage
 

### `things we struggled with`

* Had problems reading front-end js file. Turned out to be a problem with a file path name.
* Heroku!
* Travis

### `things we've learned`

![Progress](https://media.giphy.com/media/3ofT5S2jG9fFknAmNW/giphy.gif)

* PATH MATTERS! Silly mistakes cause big confusion
* How to send stuff from back-end to front-end (and how to use Axios for that)
* Heroku - how to know why your page doesn't display? (read logs)
* CI - how it looks like and why it's useful
* Codecov - succeeded in creating a report

 


