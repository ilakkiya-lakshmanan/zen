function areBothOdd(num1, num2){
    if((num1%2!=0)&&(num2%2!=0))
    {
        return true;
    }
    else{
        return false;
    }

   }
   console.log(areBothOdd(1, 3));
   console.log(areBothOdd(1, 4));
   console.log(areBothOdd(2, 3));
   console.log(areBothOdd(0, 0));