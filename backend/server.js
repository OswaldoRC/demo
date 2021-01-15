const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json({limit: '5mb'}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "TEST" });
});


app.post("/filings", (req, res) => {
  const Filing = db.filing;
  Filing.bulkCreate(req.body.map(i=> {
    return {
      direct_name: i.DirectName,
      indirect_name: i.IndirectName,
      pages: i.NumberOfPages,
      instrument_num: i.InstrumentNumber,
      document_type: i.DocTypeDescription,
      comments: i.Comments2,
      record_date: i.RecordDate,
      parcel: i.ParcelNumber,
      legal_desc: i.DocLegalDescription,
      consideration: i.Consideration
    }
  }), {validate: true}).catch(errors => {
    res.send(errors)
  })
  res.send({success: true})
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
