const express = require("express");
const path = require("path");
const port = 5001;
const fs = require("fs");
const csv = require("csv-parser");
const RateLimit = require("express-rate-limit");
const nodemailer = require("nodemailer");
const ejs = require("ejs");

var limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10000,
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "koaungmyatmin0@gmail.com",
    pass: "vfmrchouuygawnvj",
  },
});

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// apply rate limiter to all requests
app.use(limiter);
app.use(express.urlencoded({ extended: true }));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/imgs", express.static(__dirname + "/public/imgs"));

//routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/homepage.html"));
});

app.get("/contactus", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/contactus.html"));
});

app.get("/store", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/store.html"));
});

app.get("/items", (req, res) => {
  res.redirect("/store");
});

const csvParserConfig = {
  delimiter: "|",
  headers: ["Item_id", "Name", "Details", "Value"],
  skipLines: 1, // Skip the first line (header row)
};

app.get("/items/:id", (req, res) => {
  const id = req.params.id;
  console.log("ID:", id);
  const results = [];
  console.log("URL:", req.url);
  fs.createReadStream(__dirname + "/public/item_details.csv")
    .pipe(csv(csvParserConfig)) // Pass the parser configuration
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      const row = results.find((row) => row.Item_id.startsWith(id)); // Compare substring
      if (row == undefined) {
        res.render("error", { message: "Error reading CSV file" });
        return 0;
      }
      const rowString = JSON.stringify(row); // Convert row object to string
      const cleanedString = rowString.replace(/["{}]/g, ""); // Remove unwanted characters
      const rowList = cleanedString.split("|"); // Split the string back into a list using '|'

      console.log("Found Row:", row);
      if (row) {
        const dataToEJS = {
          name: rowList[1],
          image: id,
          price: rowList[3],
          details: rowList[2],
        };
        console.log(rowList[1]);
        res.render("items", dataToEJS);
      } else {
        console.error("Row not found");
        res.redirect(__dirname + "/views/error.html");
      }
    });
});

app.get("/delivery", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/delivery.html"));
});

app.post("/order", async (req, res) => {
  const data = req.body;
  console.log(data);
  const readEJSTemplate = (path) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, { encoding: "utf-8" }, (err, template) => {
        if (err) {
          reject(err);
        } else {
          resolve(template);
        }
      });
    });
  };

  // Function to render the EJS template with data
  const renderTemplate = (template, data) => {
    return ejs.render(template, data);
  };

  // Function to send the email
  const sendEmail = async (data) => {
    try {
      // Read the EJS template file
      const template = await readEJSTemplate(
        path.join(__dirname, "/public/ordermail.ejs")
      );

      // Render the template with data
      const html = renderTemplate(template, data);

      // Create the email options
      const mailOptions = {
        from: "koaungmyatmin0@gmail.com",
        to: "koaungmyatmin0@gmail.com",
        subject: "ORDER",
        html: html,
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
      return res.json({ status: "success" });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  sendEmail(data);
  res.redirect(req.body.referrer.toString());
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/error.html"));
});
//routes

app.listen(port);
console.log("\n===== *** WEB is running on localhost:5001 *** =====\n");

module.exports = app;
