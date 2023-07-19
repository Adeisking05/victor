const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
// Configure CORS options
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST"], // Specify allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization", "Authorization"], // Specify allowed headers
};

// Enable CORS with options
app.use(cors(corsOptions));

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"),
//     res.header(
//       "Access-Control-Origin-Allow-Headers",
//       "Origin,X-Requested-Width,Content-Type,Accept,Authorization"
//     );

//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,PATCH,DELETE");
//     return res.status(200).json({});
//   }
//   next();
// });

app.get("/homecategorydata", (req, res) => {
  console.log("route hitted");
  //these the route for the home categories like ministry,pastor etc
  const data = [
    {
      name: "Envagelist",
      photoUrl: "assets/ministry/evangelists.png",
    },
    {
      name: "Envagelist",
      photoUrl: "assets/ministry/evangelists.png",
    },
    {
      name: "Envagelist",
      photoUrl: "assets/ministry/evangelists.png",
    },
    {
      name: "Envagelist",
      photoUrl: "assets/ministry/evangelists.png",
    },
    {
      name: "Envagelist",
      photoUrl: "assets/ministry/evangelists.png",
    },
    {
      name: "Envagelist",
      photoUrl: "assets/ministry/evangelists.png",
    },
    {
      name: "Envagelist",
      photoUrl: "assets/ministry/evangelists.png",
    },

    {
      name: "Envagelist",
      photoUrl: "assets/ministry/evangelists.png",
    },
    {
      name: "Envagelist",
      photoUrl: "assets/ministry/evangelists.png",
    },
    {
      name: "Envagelist",
      photoUrl: "assets/ministry/evangelists.png",
    },
    {
      name: "Envagelist",
      photoUrl: "assets/ministry/evangelists.png",
    },
    {
      name: "Envagelist",
      photoUrl: "assets/ministry/evangelists.png",
    },

    // Add more photos as needed
  ];

  res.json(data);
});
app.listen(8000, () => {
  console.log("Backend server running on port 8000");
});
