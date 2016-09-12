var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
  console.log(firstName);
  console.log(contacts.find(function(e){
  	return e.firstName == firstName; 
  }))
  var elm = contacts.find(function(e){
  	return e.firstName == firstName; 
  });
  console.log( elm[prop]);
//  return elm[prop];
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Bob", "likes");