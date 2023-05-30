const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const { logger } = require("./middleware/logEvent");
const errorHandler = require("./middleware/errorHandler");
const corsOptions = require("./config/corsOptions");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 3500;

app.use(logger);

app.use(express.urlencoded({ extended: false }));

// buit-in middleware for json data
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// serve static files
app.use("/", express.static(path.join(__dirname, "./public")));


// routes
app.use("/", require("./routes/root"));
app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require ("./routes/logout"))
app.use("/students", require("./routes/api/students"));
app.use(verifyJWT)


// catch all route to get error 404 page
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.join({ Error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});


app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));


