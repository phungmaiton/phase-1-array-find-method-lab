// code your solution here
function superbowlWin(records) {
    function checkWin (record) {
        if (record.result === 'W') {
            return record.year;
        }
    }
    const results = records.find(checkWin);
    return results ? results.year : undefined;
};

