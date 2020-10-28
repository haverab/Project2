// Requiring our models and passport as we've configured it

const passport = require("../config/passport");
const user = require("../models");


var db = require("../models");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    
    db.User.create(req.body)
      
   
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
    });

   
  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    console.log("===>", req.user)
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      const userWithBlankPass = {...req.user, password:""}
      console.log(req.user, userWithBlankPass)
      res.json(userWithBlankPass);
    }
  });



//  Route to return available candidates on the browser
  app.get("/api/available",(req, res)=>{
   db.User.findAll({attributes:["email","firstName", "lastName","phone","message","userType","imgUrl"]}).then(results=>{
      res.json(results)
    })
  });

  app.get("/api/gig",(req, res)=>{
    db.Gigs.findAll({attributes:["jobTitle","city", "state","jobUrl"]}).then(results=>{
       res.json(results)
     })
   });
  // update gig using sequelize
  app.post("/api/gig", function(req, res) {
    if(req.user && req.user.userType === "recruiter"){
      req.body.recruiterId = req.user.id
      req.body.UserId = req.user.id
      db.Gigs.create(req.body)
      res.sendStatus(200)
    }
    else{
      res.sendStatus(401)
    }
  });
  app.get("/api/recruitergigs", function(req, res) {
    if(req.user && req.user.userType === "recruiter"){
     
      console.log(req.user)
      db.Gigs.findAll({where:{UserId:req.user.id}})
      .then(results=> res.json(results))
     
    }
    else{
      res.sendStatus(401)
    }
  });
  // app.get("/api/gigs/:id", function(req, res) {
  //   // Here we add an "include" property to our options in our findOne query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Post
  //   db.User.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Gigs]
  //   }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });
 

  




}
