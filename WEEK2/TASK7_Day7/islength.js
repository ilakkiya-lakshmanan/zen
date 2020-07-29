function getLengthOfWord(word1) {
   // your code here
   if (word1) {

      var result = (word1 + "").length;
      return result;
   } else {
      return -1;

   }
}
console.log(getLengthOfWord("GUVI"));
console.log(getLengthOfWord(""));
console.log(getLengthOfWord());
console.log(getLengthOfWord(9));

