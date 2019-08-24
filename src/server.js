const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();

app.use(fileUpload());
app.use(cors());
// upload endpoint

app.post("/upload", (req, res) => {
  console.log("a call was made");
  console.log({ req });
  if (req.files === null) {
    return res.status(400).json({ msg: "no file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/images/mp4s/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.listen(5000, () => console.log("server started..."));
