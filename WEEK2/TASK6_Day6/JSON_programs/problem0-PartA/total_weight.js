var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
        {
            name: 'bar',
            activities: ['be grumpy', 'eat bread omblet'],
            weight: 8,
            furcolor: 'white'
        },
        {
            name: 'foo',
            activities: ['sleep', 'pre-sleep naps'],
            weight: 3
        }
    ]
}

cat["height"] = "3";
cat["weight"] = "15kg";
cat.name = "fluffyy";
let totalweight=0;
cat.catFriends.forEach(a => {
    
    totalweight=totalweight+a.weight;

});
console.log(totalweight);

