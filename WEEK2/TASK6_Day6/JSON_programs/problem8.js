var securityQuestions = [
    {
        question: "What was your first pet’s name?",
        expectedAnswer: "FlufferNutter"
    },
    {
        question: "What was the model year of your first car?",
        expectedAnswer: "1985"
    },
    {
        question: "What city were you born in?",
        expectedAnswer: "NYC"
    }
]
function chksecurityQuestions(securityQuestions, question, answer) {
    for (a in securityQuestions) {
        if (securityQuestions[a]['question'] == question) {
            if (securityQuestions[a]['expectedAnswer'] == answer) {
                return true;
            }
            else {
                return false;
            }
        }

    }

}
var ques = "What was your first pet’s name?";
var ans = "FlufferNuttejhgjr";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // false


var ques = "What was your first pet’s name?";
var ans = "FlufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true