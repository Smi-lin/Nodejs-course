const userDB = {
  users: require("../models/users.json"),
  setUser: function (data) {
    this.users = data;
  },
};

const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res.status(400).json({ message: "Username and password required" });
  const foundUser = userDB.users.find((person) => person.username === user);

  if (!foundUser)
    return res.sendStatus(401).json({ message: "Username does not exist" });

  // EVALUATE PASSWORD
  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match)
    return res
      .status(200)
      .json({ message: `user ${user} has logged in successfully` });
    else return res.status(401).json({ message: "Password mismatch" });  
};

module.exports = handleLogin;
