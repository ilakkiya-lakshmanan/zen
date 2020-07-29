function CountAnimals(tur,horse,pigs) {
    var turkey=2;
    var hor=4;
    var pig=4;
    let count=(turkey*tur)+(hor*horse)+(pig*pigs);
    return count;
}
var legs = CountAnimals(2,3,5);
console.log(legs);