# Project Overview

## Project Links

- [https://github.com/seananigans89/sean-story-porfolio-project-2-seir927]()
- [add your deployment link]()

## Project Description

This will be a simple "Match 2" style  memory game where the user clicks two cards from a grid of 16. If the cards have matching images when flipped they wills stay flipped. Once all cards have been matched the user wins and can reset the game. 

## API

I am using the Pokemon API as the game will be pokemon themed. The api will pull 8 random pokemon from the original 151, which will then be duplicated to make a grid of 16. Two API calls will be necessary, one to return 8 Pokemon names+urls, and the second to return the sprites of those individual Pokemon.


```
{"sprites": {
"back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
"back_female": null,
"back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
"back_shiny_female": null,
"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
"front_female": null,
"front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
"front_shiny_female": null,} }
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [https://res.cloudinary.com/deobofqnx/image/upload/v1635796139/PokeMatch.001_lqyo2d.png]()
- [https://res.cloudinary.com/deobofqnx/image/upload/v1635800304/PokeMatch_React_Architecture.001_tmhfug.png]()


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Game is playable by user
- Reset game functionality 

#### PostMVP EXAMPLE

- Adjustable grid sizes
- Pokemon generation selection
- Sound: Music + SFX for events
- Turn counter, win counter

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the footer and include contact info/credits | 
| Images | Component for formatting the playing cards
| Fetch | Component for multiple API fetches to generate data for grid
| Grid | Component to house the playing grid and change sizes


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| API Fetches| H | 8hrs|  |  |
| Grid| H | 4hrs|  | |
| Images| H | 4hrs 
| CSS/Styling | H | 8hrs
| Total | H | 24hrs| 

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```