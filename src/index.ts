import express from "express";

const app = express();
app.set("port", process.env.PORT || 8000);

app.get("/", (req, res) => {
  res.send(req.query.greeting || "hello");
});

app.listen(app.get("port"), () => 
  console.log(`running on port ${app.get("port")}`)
);
