
function getOpposite(num) {

    if (Number.isInteger(num)) {
        if (num == 0) {
            return num;
        }
        else
     {
            return (-num);
        }
    }
    else {
        return -1;
    }
}
console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite("-5a"));
console.log(getOpposite(5.5))
