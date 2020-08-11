function form() {
    let div = document.createElement("div");

    let label1 = document.createElement("label");
    let label_name = document.createTextNode("FirstName");
    label1.appendChild(label_name);
    div.appendChild(label1);
    let input_name = document.createElement("input");
    input_name.setAttribute("type", "text");
    input_name.setAttribute("id", "fname");
    div.appendChild(input_name);
    let br = document.createElement("br");
    div.appendChild(br);

    let label2 = document.createElement("label");
    let label_lname = document.createTextNode("LastName     ");
    label2 = div.appendChild(label_lname);

    div.appendChild(label2);
    let input_lname = document.createElement("input");
    input_lname.setAttribute("type", "text");
    input_lname.setAttribute("id", "lname");
    div.appendChild(input_lname);
    let br1 = document.createElement("br");
    div.appendChild(br1);

    let label3 = document.createElement("label");
    let label_address = document.createTextNode("Address      ");
    label3 = div.appendChild(label_address);
    div.appendChild(label3);
    let input_address = document.createElement("input");
    input_address.setAttribute("type", "text");
    input_address.setAttribute("id", "address");
    div.appendChild(input_address);
    let br2 = document.createElement("br");
    div.appendChild(br2);


    let label5 = document.createElement("label");
    let label_pincode = document.createTextNode("Pincode    ");
    label5 = div.appendChild(label_pincode);
    div.appendChild(label5);
    let input_pincode = document.createElement("input");
    input_pincode.setAttribute("type", "text");
    input_pincode.setAttribute("id", "pincode");
    div.appendChild(input_pincode);
    let br3 = document.createElement("br");
    div.appendChild(br3);


    let label6 = document.createElement("label");
    let label_gender = document.createTextNode("Gender    ");
    label6 = div.appendChild(label_gender);
    div.appendChild(label6);
    let input_gender1 = document.createElement("input");
    input_gender1.setAttribute("type", "radio");
    input_gender1.setAttribute("name", "gender");
    input_gender1.setAttribute("value", "male");
    input_gender1.setAttribute("id", "male");

    div.appendChild(input_gender1);
    let label7 = document.createElement("label");
    let label_male = document.createTextNode(" Male ");
    label7 = div.appendChild(label_male);
    div.appendChild(label7);

    let input_gender2 = document.createElement("input");
    input_gender2.setAttribute("type", "radio");
    input_gender2.setAttribute("name", "gender");
    input_gender2.setAttribute("value", "female");
    input_gender2.setAttribute("id", "female");

    div.appendChild(input_gender2);
    let label8 = document.createElement("label");
    let label_female = document.createTextNode(" Female ");
    label8 = div.appendChild(label_female);
    div.appendChild(label8);
    let br4 = document.createElement("br");
    div.appendChild(br4);


    let label9 = document.createElement("label");
    let label_food = document.createTextNode(" Choice Of Food    ");
    label9 = div.appendChild(label_food);
    div.appendChild(label9);

    let input_food1 = document.createElement("input");
    input_food1.setAttribute("type", "checkbox");
    input_food1.setAttribute("id", "cb1");

    div.appendChild(input_food1);
    let label10 = document.createElement("label");
    label10.setAttribute("id", "lb1");
    let label_food1 = document.createTextNode(" MEAL ");
    label10 = div.appendChild(label_food1);
    div.appendChild(label10);

    let input_food2 = document.createElement("input");
    input_food2.setAttribute("type", "checkbox");
    input_food2.setAttribute("id", "cb2");

    div.appendChild(input_food2);
    let label11 = document.createElement("label");
    label11.setAttribute("id", "lb2");
    let label_food2 = document.createTextNode(" SALAD ");
    label11 = div.appendChild(label_food2);
    div.appendChild(label11);

    let input_food3 = document.createElement("input");
    input_food3.setAttribute("type", "checkbox");
    input_food3.setAttribute("id", "cb3");

    div.appendChild(input_food3);
    let label12 = document.createElement("label");
    label12.setAttribute("id", "lb3");
    let label_food3 = document.createTextNode(" JUICE ");
    label12 = div.appendChild(label_food3);
    div.appendChild(label12);

    let input_food4 = document.createElement("input");
    input_food4.setAttribute("type", "checkbox");
    input_food4.setAttribute("id", "cb4");

    div.appendChild(input_food4);
    let label13 = document.createElement("label");
    label13.setAttribute("id", "lb4");
    let label_food4 = document.createTextNode(" PIZZA ");
    label13 = div.appendChild(label_food4);
    div.appendChild(label13);


    let input_food5 = document.createElement("input");
    input_food5.setAttribute("type", "checkbox");
    input_food5.setAttribute("id", "cb5");

    div.appendChild(input_food5);
    let label14 = document.createElement("label");
    label14.setAttribute("id", "lb5");
    let label_food5 = document.createTextNode(" SOUP ");
    label14 = div.appendChild(label_food5);
    div.appendChild(label14);
    let br5 = document.createElement("br");
    div.appendChild(br5);

    let label15 = document.createElement("label");
    let label_state = document.createTextNode(" State    ");
    label15 = div.appendChild(label_state);
    div.appendChild(label15);
    let input_state = document.createElement("select");
    input_state.setAttribute("id", "state");
    let option1 = document.createElement("option");
    option1.setAttribute("value", "KA");
    let option1text = document.createTextNode("Karnataka");
    option1.appendChild(option1text);
    input_state.appendChild(option1);


    let option2 = document.createElement("option");
    option2.setAttribute("value", "TN");
    let option2text = document.createTextNode("TamilNadu");
    option2.appendChild(option2text);
    input_state.appendChild(option2);

    let option3 = document.createElement("option");
    option3.setAttribute("value", "KL");
    let option3text = document.createTextNode("Kerala");
    option3.appendChild(option3text);
    input_state.appendChild(option3);

    let option4 = document.createElement("option");
    option4.setAttribute("value", "AD");
    let option4text = document.createTextNode("AndhraPradesh");
    option4.appendChild(option4text);
    input_state.appendChild(option4);

    let option5 = document.createElement("option");
    option5.setAttribute("value", "MP");
    let option5text = document.createTextNode("MadhyaPradesh");
    option5.appendChild(option5text);
    input_state.appendChild(option5);
    div.appendChild(input_state);
    let br6 = document.createElement("br");
    div.appendChild(br6);


    let label16 = document.createElement("label");
    let label_country = document.createTextNode(" Country    ");
    label16 = div.appendChild(label_country);
    div.appendChild(label16);


    let input_country = document.createElement("select");
    input_country.setAttribute("id", "country");
    let option11 = document.createElement("option");
    option11.setAttribute("value", "IN");
    let option11text = document.createTextNode("India");
    option11.appendChild(option11text);
    input_country.appendChild(option11);


    let option12 = document.createElement("option");
    option12.setAttribute("value", "au");
    let option12text = document.createTextNode("Australia");
    option12.appendChild(option12text);
    input_country.appendChild(option12);

    let option13 = document.createElement("option");
    option13.setAttribute("value", "qa");
    let option13text = document.createTextNode("Qatar");
    option13.appendChild(option13text);
    input_country.appendChild(option13);

    let option14 = document.createElement("option");
    option14.setAttribute("value", "si");
    let option14text = document.createTextNode("Singapore");
    option14.appendChild(option14text);
    input_country.appendChild(option14);

    let option15 = document.createElement("option");
    option15.setAttribute("value", "Ma");
    let option15text = document.createTextNode("Malaysia");
    option15.appendChild(option15text);
    input_country.appendChild(option15);
    div.appendChild(input_country);
    let br7 = document.createElement("br");
    div.appendChild(br7);
    let br8 = document.createElement("br");
    div.appendChild(br8);
    //submit button
    var btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.setAttribute('value', 'Submit');
    btn.setAttribute('onclick', 'populateDataInTable()')
    div.appendChild(btn);
    document.body.appendChild(div);


    let div1 = document.createElement("div");
    let h3 = document.createElement('h3');
    let h3text = document.createTextNode(" Please Click Submit to Add Data to the Table below");
    h3.appendChild(h3text);
    div1.appendChild(h3);
    let table = document.createElement("table");
    table.setAttribute("id", "table");

    let row1 = document.createElement("tr");
    table.appendChild(row1);

    let row1col = document.createElement("th");
    let row1colvalue = document.createTextNode("FirstName");
    row1col.appendChild(row1colvalue);
    row1.appendChild(row1col);

    let row2col = document.createElement("th");
    let row2colvalue = document.createTextNode("LastName");
    row2col.appendChild(row2colvalue);
    row1.appendChild(row2col);

    let row3col = document.createElement("th");
    let row3colvalue = document.createTextNode("Address");
    row3col.appendChild(row3colvalue);
    row1.appendChild(row3col);

    let row4col = document.createElement("th");
    let row4colvalue = document.createTextNode("Pincode");
    row4col.appendChild(row4colvalue);
    row1.appendChild(row4col);

    let row5col = document.createElement("th");
    let row5colvalue = document.createTextNode("Gender");
    row5col.appendChild(row5colvalue);
    row1.appendChild(row5col);

    let row6col = document.createElement("th");
    let row6colvalue = document.createTextNode("Choice of Food");
    row6col.appendChild(row6colvalue);
    row1.appendChild(row6col);

    let row7col = document.createElement("th");
    let row7colvalue = document.createTextNode("State");
    row7col.appendChild(row7colvalue);
    row1.appendChild(row7col);

    let row8col = document.createElement("th");
    let row8colvalue = document.createTextNode("Country");
    row8col.appendChild(row8colvalue);
    row1.appendChild(row8col);


    div1.appendChild(table);
    document.body.appendChild(div1)
}

function populateDataInTable() {

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let address = document.getElementById('address').value;
    let pincode = document.getElementById('pincode').value;
    let gender = 'Male';
    if (document.getElementById('female').checked) {
        gender = 'Female'
    }


    let country = document.getElementById("country");
    let countryname = country.options[country.selectedIndex].text;

    let state = document.getElementById("state");
    let statename = state.options[state.selectedIndex].text;

    let cb1 = document.getElementById('cb1').checked;
    let cb2 = document.getElementById('cb2').checked;
    let cb3 = document.getElementById('cb3').checked;
    let cb4 = document.getElementById('cb4').checked;
    let cb5 = document.getElementById('cb5').checked;

    let foodOptions = "";

    if (cb1) {
        foodOptions += " Meal";
    }
    if (cb2) {
        foodOptions += " Salad";
    }
    if (cb3) {
        foodOptions += " Juice";
    }
    if (cb4) {
        foodOptions += " Pizza";
    }
    if (cb5) {
        foodOptions += " Soup";
    }


    let table = document.getElementById("table");
    let row2 = document.createElement("tr");
    let rowcol1 = document.createElement("td");
    let rowcol1value = document.createTextNode(fname);
    rowcol1.appendChild(rowcol1value);
    row2.appendChild(rowcol1);

    let rowcol2 = document.createElement("td");
    let rowcol2value = document.createTextNode(lname);
    rowcol2.appendChild(rowcol2value);
    row2.appendChild(rowcol2);

    let rowcol3 = document.createElement("td");
    let rowcol3value = document.createTextNode(address);
    rowcol3.appendChild(rowcol3value);
    row2.appendChild(rowcol3);

    let rowcol4 = document.createElement("td");
    let rowcol4value = document.createTextNode(pincode);
    rowcol4.appendChild(rowcol4value);
    row2.appendChild(rowcol4);

    let rowcol5 = document.createElement("td");
    let rowcol5value = document.createTextNode(gender);
    rowcol5.appendChild(rowcol5value);
    row2.appendChild(rowcol5);

    let rowcol6 = document.createElement("td");
    let rowcol6value = document.createTextNode(foodOptions);
    rowcol6.appendChild(rowcol6value);
    row2.appendChild(rowcol6);

    let rowcol7 = document.createElement("td");
    let rowcol7value = document.createTextNode(statename);
    rowcol7.appendChild(rowcol7value);
    row2.appendChild(rowcol7);

    let rowcol8 = document.createElement("td");
    let rowcol8value = document.createTextNode(countryname);
    rowcol8.appendChild(rowcol8value);
    row2.appendChild(rowcol8);
    table.appendChild(row2);

}

