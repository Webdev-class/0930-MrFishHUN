const students = require('../students.json');
/* Írj függvényt ami feltölt egy objektumot (lehetőleg üres {}-ről induljon) 
a klubbok nevével és tagjainak számával. (pl. {"club1": 4, "club2": 3....}) */
function f2() {
    let a = {}

    students.forEach((x) => {
        if (!a[x.club]){
            a[x.club] = 1
        }
        else a[x.club]++
    })

    return a
}

module.exports = f2;