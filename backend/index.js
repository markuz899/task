const express = require("express");
const csv = require("csv-parser");
const fs = require("fs");
const cors = require("cors");

const app = express();
const apiPort = 3030;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server API avviato...!");
});

app.get("/data", async (req, res) => {
  let data = [];

  fs.createReadStream("data.csv")
    .pipe(csv())
    .on("data", (row) => {
      data.push(row);
    })
    .on("end", () => {
      const uniqueCustomer = Array.from(
        new Set(data.map((a) => a.customer))
      ).map((customer) => {
        return customer;
      });
      res.json(uniqueCustomer);
    });
});

app.get("/data/:id", async (req, res) => {
  let data = [];

  const conversionCurrency = (value) => {
    if (value.includes("$")) {
      let conversion = Number(value.substring(1)) * 0.82;
      return `€ ${conversion.toFixed(2)}`;
    } else if (value.includes("£")) {
      let conversion = Number(value.substring(1)) * 1.11;
      return `€ ${conversion.toFixed(2)}`;
    } else if (value.includes("€")) {
      let conversion = Number(value.substring(1));
      return `€ ${conversion.toFixed(2)}`;
    }
  };

  fs.createReadStream("data.csv")
    .pipe(csv())
    .on("data", (row) => {
      data.push(row);
    })
    .on("end", () => {
      let filterCustomer = data.filter(
        (item) => item.customer === req.params.id
      );
      let conversion = filterCustomer.map((item) => ({
        customer: item.customer,
        date: item.date,
        value: conversionCurrency(item.value),
      }));
      res.json(conversion);
    });
});

app.listen(apiPort, () => console.log(`Server avviato nella porta ${apiPort}`));
