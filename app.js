var express = require("express");
    app     = express();

app.get("/", (req, res) => {
    res.send("YOU'RE ON THE HOME PAGE!!");
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Server running...");
});