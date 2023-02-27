# Bowling Scoring System #

This program takes the input from the user for a bowling game and calculates running score.
The score is calculated after each roll and the current score is dispalyed to the user.

In the case of the Spare and Strike, we wait for the rolls before the score can be calculated. 

# Functional Requirements #
- There are 10 Frames to a game
- Each Frame could have maximum of 2 rolls depending on 
  what the user scores
- Strikes and Spares and Open Frames are all Scored differently
- The last frame may get an additional roll depending on if they 
  scored a spare or a strike 

## Time Boxed ##

I gave myself ~5 hours to finish this along with the readme and tests. 

## Installation And Usage ##

`npm install`

`npm start`

`npm test`

# Docker build and run

`docker build -t "bowling:game" . `

`docker run -it  bowling:game`

# Improvements #

- Sanitize the input so wrong input are caught and fixed, or is reported back to the user
- Create and track seperate players so multiple players can play the same game
- Track Frames Automatically 
- Could seperate Games and Frames as different Classes

