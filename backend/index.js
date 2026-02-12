import express from "express";
import viewConfig from "./src/config/viewConfig.js";
import router from "./src/router/index.js";

const app = express();

//Cấu hình view
viewConfig(app);

//Cấu hình router
router(app);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
