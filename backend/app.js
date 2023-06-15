const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const pandenRoutes = require("./routes/panden_route");

const app = express();
app.use(cors()); 
app.use(bodyParser.json());

app.use("/panden", pandenRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is listening on port ${port}`));
