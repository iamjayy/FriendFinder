const friends = require("../data/friends");
const path = require("path");


//api get request
module.exports = function(app){
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    //api post request
    app.post("/api/friends", function(req, res){
       // var totalDifference = 0;
       // var bestMatch = {
         //   name: "",
           // photo: "",
           // friendsDifference: 1000
      //  };
        
        //result of the user and parse and then convert into a number instead of string
        var user = req.body;
        //var userName = user.name;
        var userScores = user.scores;
        var bestMatch = friends[0];
        var matchScore = 100;
        var computerScore = 0;
        //var b = userScores.map(function(item){
        //    return parseInt(item, 10);
       // });
        //user = {
         //   name: req.body.name,
          //  photo: req.body.photo,
           // scores: b
       // };

        //console log the results
        console.log("Name: " + userName);
        console.log("User Score " + userScores);

       // var sum = b.reduce((a, b) => a+b, 0);
      //  console.log("Sum of users score " + sum);
      //  console.log("Best Match Friend Difference " + bestMatch.friendsDifference);
      //  console.log("=====================================================");

        //create for loop to loop all possibilities in the database
       // for(var i = 0; i<friends.length;i++){
         //   console.log(friends[i].name);
           // totalDifference = 0;
       //     console.log("total difference: " + totalDifference);
        //    console.log("best match friend difference: " + bestMatch.friendsDifference);

          //  var bfriendScore = friends[i].scores.reduce((a,b) => a + b, 0);
        //    console.log("total friend score: " + bfriendScore);
           // totalDifference += Math.abs(sum - bfriendScore);
         //   console.log("----------------------> " + totalDifference);

            //create if states to determine best match
           // if(totalDifference <= bestMatch.friendsDifference){
            //    bestMatch.name = friends[i].name;
            //    bestMatch.photo = friends[i].photo;
            //    bestMatch.friendsDifference = friends[i].totalDifference;
           // }
           // console.log(totalDifference + " total difference");

        for(var i = 0; i<friends.length; i++){
            computerScore += Math.abs(parseInt(friends[i].scores[i]) - parseInt(userScores[i]))
            console.log("score: " + computerScore);
        } if(
            (matchScore > computerScore) && (user.name != friends[i].name)
            )
            {
                bestMatch = friends[i];
                matchScore = computerScore;
            }
            computerScore = 0;

            console.log(bestMatch);
            friends.push(user);
            console.log("new match added");
            console.log(user);
            res.json(bestMatch);
        })
    }


        //save the users data to the database and return to json with the best match
    