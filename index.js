// code your solution here
let superbowlWin = function (arrayOfObjects) {
    let winningYear = arrayOfObjects.find((game) => (
    game.result === "W"
    ))
    return winningYear ? winningYear.year : winningYear;
}