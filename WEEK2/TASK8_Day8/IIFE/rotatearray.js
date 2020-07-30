let nums=[1,2,3,4,5];
(function(nums,k)
{
    let i=0;
    while(i<k)
    {
        nums.unshift(nums.splice(-1));
        i++;
    }
    return console.log(nums);
})(nums,3);

