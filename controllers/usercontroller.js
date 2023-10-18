const express = require("express");



// Import User Model
const User = require("../models/userModel");


// Register user 

router.post("/register", async (req, res) => {
    try {
      // Check if the user exists
      const userExist = await User.findOne({email: req.body.email});
      if(userExist) {
        res.status(400).send("User already exist!")
      }



      // create a new user
      const newLogin = new User({
        userName: req.params.userName,
        email: req.params.email,
        password: req.params.password
      });

      // Save the user to the database
      const saveUserInfo = await newLogin.save()

      // success response
      res.status(201).json({message: 'successful registration', user: saveUserInfo})

    } catch(error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
})
//



