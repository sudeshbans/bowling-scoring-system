const Player = require("../src/player");

describe("Blowing Scoring System", () => {
  test("Player all open frames", () => {
    const player = new Player();

    player.addScore("2", 1);
    player.addScore("3", 1);

    player.addScore("4", 2);
    player.addScore("3", 2);

    player.addScore("5", 3);
    player.addScore("1", 3);

    player.addScore("3", 4);
    player.addScore("3", 4);

    player.addScore("3", 5);
    player.addScore("4", 5);

    player.addScore("3", 6);
    player.addScore("2", 6);

    player.addScore("1", 7);
    player.addScore("1", 7);

    player.addScore("0", 8);
    player.addScore("2", 8);

    player.addScore("5", 9);
    player.addScore("2", 9);

    player.addScore("2", 10);
    player.addScore("2", 10);

    expect(player.score).toBe(51);
  });

  test("Player Scores all Strike", () => {
    const player = new Player();

    for (let i = 1; i <= 9; i++) {
      player.addScore("X", i);
    }
    expect(player.score).toBe(210);

    player.addScore("X", 10);
    player.addScore("X", 10);
    player.addScore("X", 10);
    expect(player.score).toBe(300);
  });

  test("Player has has no score because its the first frame", () => {
    const player = new Player();

    player.addScore("X", 1);
    expect(player.score).toBe("Empty");
  });

  test("Player Score Strikes and Open Frames", () => {
    const player = new Player();

    for (let i = 1; i <= 9; i++) {
      player.addScore("X", i);
    }

    player.addScore("3", 10);
    player.addScore("1", 10);

    expect(player.score).toBe(251);
  });

  test("Player Scores strike and spare", () => {
    const player = new Player();

    player.addScore("7", 1);
    player.addScore("/", 1);
    expect(player.score).toBe("Empty");

    player.addScore("X", 2);
    expect(player.score).toBe(20);
  });

  test("Player Scores strike, open-frame and spare", () => {
    const player = new Player();

    player.addScore("5", 1);
    player.addScore("4", 1);
    expect(player.score).toBe(9);

    player.addScore("3", 2);
    player.addScore("2", 2);
    expect(player.score).toBe(14);

    player.addScore("1", 3);
    player.addScore("3", 3);
    expect(player.score).toBe(18);

    player.addScore("8", 4);
    player.addScore("/", 4);
    expect(player.score).toBe(18);

    player.addScore("X", 5);
    expect(player.score).toBe(38);

    player.addScore("9", 6);
    player.addScore("/", 6);
    expect(player.score).toBe(58);

    player.addScore("4", 7);
    player.addScore("5", 7);
    expect(player.score).toBe(81);

    player.addScore("7", 8);
    player.addScore("/", 8);
    expect(player.score).toBe(81);

    player.addScore("X", 9);
    expect(player.score).toBe(101);

    player.addScore("7", 10);
    player.addScore("/", 10);
    player.addScore("4", 10);
    expect(player.score).toBe(135);
  });

  test("Player scores strike in the last roll of the last frame", () => {
    const player = new Player();

    player.addScore("1", 1);
    player.addScore("2", 1);
    expect(player.score).toBe(3);

    player.addScore("X", 2);
    expect(player.score).toBe(3);

    player.addScore("X", 3);
    expect(player.score).toBe(3);

    player.addScore("X", 4);
    expect(player.score).toBe(33);

    player.addScore("X", 5);
    expect(player.score).toBe(63);

    player.addScore("X", 6);
    expect(player.score).toBe(93);

    player.addScore("X", 7);
    expect(player.score).toBe(123);

    player.addScore("X", 8);
    expect(player.score).toBe(153);

    player.addScore("6", 9);
    player.addScore("2", 9);
    expect(player.score).toBe(205);

    player.addScore("3", 10);
    player.addScore("/", 10);
    player.addScore("X", 10);
    expect(player.score).toBe(225);
  });
});
