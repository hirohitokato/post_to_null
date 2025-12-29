const express = require("express");
const multer = require("multer");

const app = express();
const PORT = process.env.PORT || 3000;

const upload = multer({ storage: multer.memoryStorage() });

app.post("/null", upload.any(), (req, res) => {
  console.log(`[headers] ${JSON.stringify(req.headers)}`);
  if (req.files && req.files.length) {
    req.files.forEach((f) => {
      console.log(
        `[upload] field=${f.fieldname} name=${f.originalname} mime=${f.mimetype} size=${f.size}`
      );
      // if the field is "ai-ocr-result", log its content as UTF-8 string
      if (f.fieldname === "ai-ocr-result") {
        console.log(`[ai-ocr-result content] ${f.buffer.toString("utf-8")}`);
      }
    });
  } else {
    console.log(
      "[upload] no files received; content-length=" +
        (req.headers["content-length"] || "unknown")
    );
  }
  // respond 201 with simple message
  res.status(201).send("Data received and discarded");
});

app.listen(PORT, () => {
  console.log(`post_to_null listening on ${PORT}, POST /dev/null`);
});
