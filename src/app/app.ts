import express from "express";
import { DataSource } from "typeorm";
import Database from "../config/database";
import router from "../routes/routes";
import { WhatsAppProvider } from "./providers/whatsapp/whatsapp.provider";

class App {
  /**
   * App data source of app
   * @type { DataSource }
   */
  static appDataSource: DataSource;

  /**
   * Mains app
   */
  static async main() {
    const app = express();
    const database = new Database();

    App.appDataSource = await database.init();

    app.use(express.json())
    app.use("/", router);
    app.listen(3000, () => console.log("server is running..."));
    // await WhatsAppProvider.connect('session_test')
  }
}

export default App
