var rotate=function(nums,k)
{
    let i=0;
    while(i<k)
    {
        nums.unshift(nums.splice(-1));
        i++;
    }
    return console.log(nums);
};
var nums=[1,2,3,4,5];
rotate(nums,3);