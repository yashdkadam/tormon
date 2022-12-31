const express = require("express");
const router = express.Router();
const http = require("axios");

// day = https://snowfl.com/MjfPiDOgkFjTIxZMVImNxSbDQmtkBartgdGxD/Q/cNf6hEJo/0/NONE/24/1?_=1672496784665
// week = https://snowfl.com/MjfPiDOgkFjTIxZMVImNxSbDQmtkBartgdGxD/Q/hKi88oDK/0/NONE/168/1?_=1672497412616
// month = https://snowfl.com/MjfPiDOgkFjTIxZMVImNxSbDQmtkBartgdGxD/Q/6AzIxfak/0/NONE/720/1?_=1672497648174
// search = https://snowfl.com/MjfPiDOgkFjTIxZMVImNxSbDQmtkBartgdGxD/Q/6AzIxfak/0/NONE/720/1?_=1672497648174

router.get("/day/", async (req, res) => {
  const response = await http.get(
    "https://snowfl.com/MjfPiDOgkFjTIxZMVImNxSbDQmtkBartgdGxD/Q/cNf6hEJo/0/NONE/24/1?_=1672496784665"
  );
  res.json(response.data);
});

router.get("/week/", async (req, res) => {
  const response = await http.get(
    "https://snowfl.com/MjfPiDOgkFjTIxZMVImNxSbDQmtkBartgdGxD/Q/hKi88oDK/0/NONE/168/1?_=1672497412616"
  );
  res.json(response.data);
});

router.get("/month/", async (req, res) => {
  const response = await http.get(
    "https://snowfl.com/MjfPiDOgkFjTIxZMVImNxSbDQmtkBartgdGxD/Q/6AzIxfak/0/NONE/720/1?_=1672497648174"
  );
  res.json(response.data);
});

router.get("/:id", async (req, res) => {
  const response = await http.get(
    "https://snowfl.com/MjfPiDOgkFjTIxZMVImNxSbDQmtkBartgdGxD/" +
      req.params.id +
      "/vpu5yBO1/0/NONE/NONE/1?_=1672494503705"
  );
  res.json(response.data);
});

module.exports = router;
