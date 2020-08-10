let numberGenerator = function (arr) {
    if (arr.length >= 8) {
        console.log(arr.join(""));
        return arr.join("");
    } else {
        let newNumber = Math.floor(Math.random() * 8 + 1);
        console.log(arr);
        if (arr.indexOf(newNumber) < 0) {
            arr.push(newNumber);
        }
        numberGenerator(arr);
    }


    
}

function generate_random_number() {
    let div = document.createElement("div");
    let arr = [];
    let num = numberGenerator(arr);
    let text = document.createTextNode(numberGenerator(arr));
    div.appendChild(text);
    document.body.appendChild(div);
}