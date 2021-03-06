const fs = require("fs");
const express = require("express");
const cors = require("cors");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const app = express();

app.use(express.static(`${__dirname}/uploads`));
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  const {
    query: { type },
  } = req;

  const data = fs.readFileSync(`${__dirname}/docs/test.${type}`);

  console.log(data);
  res.json({ body: data });
});

app.post("/api", upload.single("file"), (req, res) => {
  console.log({ body: req.file });

  res.json({
    url: `https://doc-viewer-server.herokuapp.com/${req.file.originalname}`,
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Listening on port 8000");
});
