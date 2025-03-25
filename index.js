// code your solution here
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}

// Example test calls (optional, for checking functionality)
const record = [
    { year: "2018", result: "N/A" },
    { year: "2017", result: "N/A" },
    { year: "2016", result: "N/A" },
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" }
];

console.log(superbowlWin(record)); 