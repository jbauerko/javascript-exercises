const leapYears = function(year) {
    let divBy4 = false;
    let divBy100 = false;
    let divBy400 = false;

    if (!(year % 4)) {divBy4 = true};
    if (!(year % 100)) {divBy100 = true};
    if (!(year % 400)) {divBy400 = true};

    if (!divBy4) {
        return false;
    }
    else if (divBy100 && !divBy400) {
        return false;
    }
    return true;
};

// Do not edit below this line
module.exports = leapYears;
