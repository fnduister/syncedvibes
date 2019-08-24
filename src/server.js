const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();

app.use(fileUpload());

// upload endpoint

app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "no file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/src/images/mp4s/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.listen(5000, () => console.log("server started..."));