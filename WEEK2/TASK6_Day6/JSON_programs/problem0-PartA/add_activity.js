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

cat.catFriends.forEach(a => {
    
    a.activities.push("sleeping","drink milk");

});
console.log(cat.catFriends);

