require('dotenv').config()

const express = require("express");
const path = require("path");
const blogRoutes = require("./routes/blogs");

// express app
const app = express();

// Enable CORS for client origin only
const cors = require('cors')
const corsOptions = {
   origin : ['https://testprojxon.onrender.com', 'https://gokillboss.github.io/Projxon', 'https://localhost:3000'],
}
app.use(cors(corsOptions))

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Render React as View
app.use(express.static(path.join(__dirname, "..", "client", "build")));

// Setup Routes For Which The Server Is Listening
app.use('/api/blogs', blogRoutes)


// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// error handler
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error", stack } = err;
  console.log(stack);
  res.status(status).json({ message });
});


// Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});

