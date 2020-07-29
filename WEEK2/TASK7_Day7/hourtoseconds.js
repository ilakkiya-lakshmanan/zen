var arr = [1, 2, 3];
let array=[];
function hourToSeconds(arr) {
    for(let i=0;i<arr.length;i++)
    {
        let sec=arr[i]*60*60;
        array.push(sec);
    }
    return array;
}
var data = hourToSeconds(arr);
console.log(data.join(" "));