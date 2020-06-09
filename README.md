# Image Search

[![CircleCI](https://circleci.com/gh/BenSheridanEdwards/Image_Search_React.svg?style=svg)](https://circleci.com/gh/BenSheridanEdwards/Image_Search_React)
[![Maintainability](https://api.codeclimate.com/v1/badges/b9693bc778487be5ee6e/maintainability)](https://codeclimate.com/github/BenSheridanEdwards/Image_Search_React/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b9693bc778487be5ee6e/test_coverage)](https://codeclimate.com/github/BenSheridanEdwards/Image_Search_React/test_coverage)

[Description](#description) | [User Stories](#user-stories) | [Mockups](#mockups) | [App Showcase](#app-showcase) | [Features](#features) | [Improvements](#improvements) | [Installation Instructions](#installation) | [Credits](#credits)

## <a name="description">Description</a>

Search bar application that displays relevent images to searched keywords - displayed in a neat grid format.

**Tech Stack:** *JavaScript, React, Node, CSS, HTML, Jest, Enzyme, Axios, Webpack, Babel, CircleCI, Code Climate, Firebase*

You'll find the app [here](https://image-search-react.web.app/), use cmd/window + click to open in a new tab.

## <a name="user-stories">User Stories</a>

```
As a user, when I use Image Search.
I expect to see a search bar, where I can input text to search for the type of images I want to see.
```
```
As a user, when I use Image Search. 
When I have entered a search term and clicked enter to submit the search,
I expect to see a relevent images, laid out on a flexible grid. 
```

## <a name="mockups">Mockups</a>

![Search Images Mockup](https://github.com/BenSheridanEdwards/Image_Search_React/blob/master/media/ImageSearch-Mockup.png)

## <a name="app-showcase">App Showcase</a>

![Application Screenrecording](https://github.com/BenSheridanEdwards/Image_Search_React/blob/master/media/ImageSearch-AppShowcase.gif)

### <a name="features">Features</a>

- Search Bar (Using UnSplash's API)
- Image Display Grid

### <a name="improvements">Improvements</a>

- 100% Test Coverage
  - Learn how to test axios
  - Learn how to test my ImageCard component
- Add styling
- Rebuild the app from scratch using TDD

## <a name="installation">Installation Instructions</a>

Clone this repository from github then change directory into it.

```
$ git clone git@github.com:BenSheridanEdwards/Image_Search_React.git
$ cd Image_Search_React
```

### Launching the Application from the Command Line

From inside the project folder, you can run `npm start` in the terminal to launch the app in the browser.

```
$ npm start
```

Launching the app from the command line should open up a new tab in your default browser. If it doesn't, you can navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Running Tests

From inside the project folder, you can run `npm test` in the terminal to run the test suite. 

```
$ npm test
```

### Seeing Test Coverage

From inside the project folder, you can run 'npm test -- --coverage' in the terminal to see the code coverage for this project.

```
$ npm test -- --coverage
```

### <a name="credits">Credits</a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was tested with [Jest](https://jestjs.io/) & [Enzyme](https://enzymejs.github.io/enzyme/). 

This project uses continuous integration and deployment with [CircleCI](https://circleci.com/) & [Firebase](https://firebase.google.com/).

This project utilises [Code Climate](https://codeclimate.com/) to ensure high code quality.
