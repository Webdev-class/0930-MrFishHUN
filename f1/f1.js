const students = require('../students.json');

//Írj függvényt annak kiszűrésére, hogy a tanulók melyik emeleten laknak.
function f1(floor) {
    let a = []

   students.forEach((x) => {
       if (floor === x.dormitoryFloor) a.push(x)
   })

    return a
}
module.exports = f1;