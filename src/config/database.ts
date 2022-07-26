import "reflect-metadata";
import { DataSource } from "typeorm";
import { ResidentModel } from "../app/model/resident.model";
import { root } from "../utils/path";

class Database {
  /**
   * App data source of database
   * @type {DataSource}
   */
  private appDataSource: DataSource;

  /**
   * Instance  of database
   * @type {DataSource}
   */
  private static _instance: DataSource;

  constructor() {
    this.appDataSource = new DataSource({
      type: "sqlite",
      database: `${root}/data/line.sqlite`,
      entities: [ResidentModel],
      synchronize: true,
      logging: false,
    });
  }

  /**
   * Init Database
   */
  async init() {
    if (!Database._instance) {
      await this.appDataSource.initialize();
      Database._instance = this.appDataSource;
    }
    console.log('Database Ok')
    return Database._instance;
  }
}

export default Database;
