//function that display value 
function dis(val) {
    console.log('inside dis');
    document.getElementById("result").value += val
}

//function that evaluates the digit and return result 
function solve() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    
    return true;
}
//function that clear the display 


function createCalc() {
    var div1 = document.createElement("div");
    div1.setAttribute("id", "Calculator");

    var div2 = document.createElement("div");
    var h3=document.createElement("h3");
    
    var t = document.createTextNode("Simple Calculator");
    h3.append(t);
    div2.append(h3);

    var table = document.createElement("table");
    table.setAttribute('border', '1');

    //Row 1
    var row1 = document.createElement('tr');
    var row1col1 = document.createElement('td');
    row1col1.setAttribute('colspan', '3');

    var row1col1input = document.createElement('input');
    row1col1input.setAttribute('type', 'text');
    row1col1input.setAttribute('id', 'result');
    row1col1input.setAttribute('onkeypress','return isNumber()');

    row1col1.appendChild(row1col1input);

    var row1col2 = document.createElement('td');

    var row1col2input = document.createElement('input');
    row1col2input.setAttribute('type', 'button');
    row1col2input.setAttribute('value', 'c');
    row1col2input.onclick = function clr() {
        console.log('inside clr');
        document.getElementById("result").value = ""
    };

    row1col1.appendChild(row1col1input);
    row1col2.appendChild(row1col2input);

    row1.appendChild(row1col1);
    row1.appendChild(row1col2);
    // Row 1 -End

    //Row2
    var row2 = document.createElement('tr');

    var row2col1 = document.createElement('td');
    var row2col1input = document.createElement('input');
    row2col1input.setAttribute('type', 'button');
    row2col1input.setAttribute('value', '1');
    row2col1input.setAttribute("onclick", "dis('1')");
    row2col1.appendChild(row2col1input);

    var row2col2 = document.createElement('td');
    var row2col2input = document.createElement('input');
    row2col2input.setAttribute('type', 'button');
    row2col2input.setAttribute('value', '2');
    row2col2input.setAttribute("onclick", "dis('2')");
    row2col2.appendChild(row2col2input);

    var row2col3 = document.createElement('td');
    var row2col3input = document.createElement('input');
    row2col3input.setAttribute('type', 'button');
    row2col3input.setAttribute('value', '3');
    row2col3input.setAttribute("onclick", "dis('3')");
    row2col3.appendChild(row2col3input);

    var row2col4 = document.createElement('td');
    var row2col4input = document.createElement('input');
    row2col4input.setAttribute('type', 'button');
    row2col4input.setAttribute('value', '/');
    row2col4input.setAttribute("onclick", "dis('/')");
    row2col4.appendChild(row2col4input);

    row2.appendChild(row2col1);
    row2.appendChild(row2col2);
    row2.appendChild(row2col3);
    row2.appendChild(row2col4);
    // Row 2 -End

    //row3
    var row3 = document.createElement('tr');

    var row3col1 = document.createElement('td');
    var row3col1input = document.createElement('input');
    row3col1input.setAttribute('type', 'button');
    row3col1input.setAttribute('value', '4');
    row3col1input.setAttribute("onclick", "dis('4')");
    row3col1.appendChild(row3col1input);

    var row3col2 = document.createElement('td');
    var row3col2input = document.createElement('input');
    row3col2input.setAttribute('type', 'button');
    row3col2input.setAttribute('value', '5');
    row3col2input.setAttribute("onclick", "dis('5')");
    row3col2.appendChild(row3col2input);


    var row3col3 = document.createElement('td');
    var row3col3input = document.createElement('input');
    row3col3input.setAttribute('type', 'button');
    row3col3input.setAttribute('value', '6');
    row3col3input.setAttribute("onclick", "dis('6')");
    row3col3.appendChild(row3col3input);

    var row3col4 = document.createElement('td');
    var row3col4input = document.createElement('input');
    row3col4input.setAttribute('type', 'button');
    row3col4input.setAttribute('value', '*');
    row3col4input.setAttribute("onclick", "dis('*')");
    row3col4 .appendChild(row3col4input);

    row3.appendChild(row3col1);
    row3.appendChild(row3col2);
    row3.appendChild(row3col3);
    row3.appendChild(row3col4);
    //row3 end
    //row 4

var row4 = document.createElement('tr');

    var row4col1 = document.createElement('td');
    var row4col1input = document.createElement('input');
    row4col1input.setAttribute('type', 'button');
    row4col1input.setAttribute('value', '7');
    row4col1input.setAttribute("onclick", "dis('7')");
    row4col1.appendChild(row4col1input);

    var row4col2 = document.createElement('td');
    var row4col2input = document.createElement('input');
    row4col2input.setAttribute('type', 'button');
    row4col2input.setAttribute('value', '8');
    row4col2input.setAttribute("onclick", "dis('8')");
    row4col2.appendChild(row4col2input);


    var row4col3 = document.createElement('td');
    var row4col3input = document.createElement('input');
    row4col3input.setAttribute('type', 'button');
    row4col3input.setAttribute('value', '9');
    row4col3input.setAttribute("onclick", "dis('9')");
    row4col3.appendChild(row4col3input);

    var row4col4 = document.createElement('td');
    var row4col4input = document.createElement('input');
    row4col4input.setAttribute('type', 'button');
    row4col4input.setAttribute('value', '-');
    row4col4input.setAttribute("onclick", "dis('-')");
    row4col4 .appendChild(row4col4input);

    row4.appendChild(row4col1);
    row4.appendChild(row4col2);
    row4.appendChild(row4col3);
    row4.appendChild(row4col4);
    //row4 end
    //row5
    var row5 = document.createElement('tr');

    var row5col1 = document.createElement('td');
    var row5col1input = document.createElement('input');
    row5col1input.setAttribute('type', 'button');
    row5col1input.setAttribute('value','.')
    row5col1input.setAttribute("onclick", "dis('.')");
    row5col1.appendChild(row5col1input);

    var row5col2 = document.createElement('td');
    var row5col2input = document.createElement('input');
    row5col2input.setAttribute('type', 'button');
    row5col2input.setAttribute('value', '0');
    row5col2input.setAttribute("onclick", "dis('0')");
    row5col2.appendChild(row5col2input);


    var row5col3 = document.createElement('td');
    var row5col3input = document.createElement('input');
    row5col3input.setAttribute('type', 'button');
    row5col3input.setAttribute('value', '=');
    row5col3input.setAttribute("onclick", "solve()");
    row5col3.appendChild(row5col3input);

    var row5col4 = document.createElement('td');
    var row5col4input = document.createElement('input');
    row5col4input.setAttribute('type', 'button');
    row5col4input.setAttribute('value', '+');
    row5col4input.setAttribute("onclick", "dis('+')");
    row5col4 .appendChild(row5col4input);

    row5.appendChild(row5col1);
    row5.appendChild(row5col2);
    row5.appendChild(row5col3);
    row5.appendChild(row5col4);



    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);
    table.appendChild(row4);
    table.appendChild(row5);


    div1.append(div2);
    div1.append(table);
    document.body.appendChild(div1);
}