const userDB = {
  users: require("../models/dlt.json"),
  setUser: function (data) {
    this.users = data;
  },
};

const fsPromise = require("fs/promises");
const path = require("path");
// const bcrypt = require("bcrypt");

const handleRegister = async (req, res) => {
  const { ftname, ltname, sfo, gd, dob, phn, email } = req.body;
  if (!ftname || !ltname || !sfo || !gd || !dob || !phn || !email) {
    return res
      .status(400)
      .json({ message: "The form must be filled correctly" });
  }

    const duplicate = userDB.users.find(
      (person) => person.firstname === ftname
    );
    if (duplicate) return res.status(409);  //Conflict error

    try {
      // const firstname = {firstname: ftname };
      const newUser = {
        firstname: ftname,
        lastname: ltname,
        origin: sfo,
        gender: gd,
        birth: dob,
        number: phn,
        emails: email,
      };
      userDB.setUser([...userDB.users, newUser]);
      // const users = [...userDB.users, newUser];

      fsPromise.writeFile(
        path.join(__dirname, "..", "models", "dlt.json"),
        JSON.stringify(userDB.users)
      );

      console.log(newUser);
      res.status(201).json({
        message: `User ${newUser.firstname} has registered successfully`,
      });
      
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  
};
module.exports = { handleRegister };
