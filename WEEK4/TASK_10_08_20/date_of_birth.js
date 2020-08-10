function calculateAge(){
 let dateStr = document.getElementById('dob').value;
 console.log(dateStr);
 let dob = new Date(dateStr);
 console.log(dob);

 let today = new Date();

 // To calculate the time difference of two dates 
let diffInMillis = Math.round(today.getTime() - dob.getTime()); 
let diffInSecs = Math.round(diffInMillis / (1000));
let diffInMins = Math.round(diffInMillis / (1000 * 3600));
// To calculate the no. of days between two dates 
let diffInDays = Math.round(diffInMillis / (1000 * 3600 * 24)); 
let diffInMonths = Math.round(diffInDays/12);
let diffInYears = Math.round(diffInDays/365);


let div = document.createElement("div");

let text = document.createTextNode("Your Age is "+diffInYears+" in years, "
+diffInMonths+" in months, "
+diffInDays+" in days, "
+diffInMins+" in minutes, "
+diffInSecs+" in seconds, "
+diffInMillis+" in milli seconds"
);

div.appendChild(text);

document.body.appendChild(div);



}

function date_of_birth()
{
    let div = document.createElement("div");

    let label = document.createElement('label');
    let lbltext = document.createTextNode('Please Enter your Date of Birth ');
    label.appendChild(lbltext);
    div.appendChild(label);

    let textbox=document.createElement('input');
    textbox.setAttribute('type','text');
    textbox.setAttribute('id','dob');
    textbox.setAttribute('placeholder','MM/DD/YYYY')
    div.appendChild(textbox);

    let button = document.createElement('button');
    button.setAttribute('type','button');
    let btntxt = document.createTextNode('Calculate Age');
    button.appendChild(btntxt); 
    button.setAttribute('value','yes');
    button.setAttribute('onclick','calculateAge()');

    div.appendChild(button);

    document.body.appendChild(div);
}