function superbowlWin(arr) {
    let win = arr.find(record => record.result === "W")
    if (win) {
        return win.year;
    } else {
        return undefined;
    }
}
