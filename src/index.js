"use strict";
const prompt = require("prompt-sync")();
const Game = require("./game");

const GAME_LENGTH = 10;
const VALID_CHARS = "0123456789X/";

const parseAndSanitizeInput = (input) => {
  if (input === "") {
    throw new Error("Empty String Invalid Input !");
  }

  let splitInput = input.split(",");

  splitInput = splitInput.map((e) => {
    return e.toUpperCase();
  });

  for (let i = 0; i < splitInput.length; i++) {
    if (!VALID_CHARS.includes(splitInput[i])) {
      throw new Error("Invalid Input !");
    }
  }

  return splitInput;
};

const startGame = () => {
  try {
    console.log("-----------------------------------------------------------");
    console.log("-------------- Bowling Score Keeper! ----------------------");
    console.log("-----------------------------------------------------------");

    const game = new Game();

    for (let i = 1; i <= GAME_LENGTH; i++) {
      const values = prompt(`Input your score for the frame ${i}:  `);

      const parsedValues = parseAndSanitizeInput(values, i);

      parsedValues.forEach((v) => game.addScore(v, i));

      console.log(
        `Your current Frame: ${i} and your current score ${game.score}`
      );
    }
  } catch (e) {
    console.log("----------------------------------------");
    console.error(e);
    console.log("----------------------------------------");
  }
};

startGame();
