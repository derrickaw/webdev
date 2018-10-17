var arr = [
    {"title": "Matrix", 
     "rating": 5,
     "hasWatched": true},
     {"title": "Frozen", 
     "rating": 5,
     "hasWatched": true},
     {"title": "To Kill a Mockingbird", 
     "rating": 5,
     "hasWatched": true},
     {"title": "Halloween", 
     "rating": 4,
     "hasWatched": false}
];

arr.forEach(function(movie){
    var output = "You have ";
    if(movie["hasWatched"]){
        output += "watched ";
    }
    else {
        output += "not seen ";
    }
    output += "\"" + movie["title"] + "\" - " + movie["rating"] + " stars";
    console.log(output);
})