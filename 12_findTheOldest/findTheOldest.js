const findTheOldest = function(people) {
    let res;
    let oldest = 0;
    const d = new Date();
    for (let i = 0; i < people.length; i++) {
        let lifespan;
        if ('yearOfDeath' in people[i]) {
            lifespan = people[i]['yearOfDeath'] - people[i]['yearOfBirth'];
        }
        else {
            lifespan = d.getFullYear() - people[i]['yearOfBirth'];
        }
        if (lifespan > oldest || !oldest) {
            oldest = lifespan;
            res = people[i]
        }
    }

    return res;
};

// Do not edit below this line
module.exports = findTheOldest;
