const students = require('../students.json');
/* Írj függvényt ami megvizsgálja, hogy van-e eltérés a freeDormitory
 boolean és dormitoryPrice number-ek között 
 (Ha jól van feltöltve a lista a false értékek száma és a null-ok száma megegyezik.
  Ha nem akkor írja ki az eltérést) */
const f3 = () => {
    x = 0

    students.forEach((x) => {
        if (x.dormitoryPrice === 0 && x.freeDormitory === true) x++;
    })

    return x
}
module.exports = f3;