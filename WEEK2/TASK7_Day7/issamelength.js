function isSameLength(word1, word2)
{
    // your code here
    var first=word1.length;
    var second=word2.length;
    if(first==second)
    {
        return true;
    }
    else
    {
        return false;
    }
   }
   var result=isSameLength("guvi","geek");
   console.log(result);