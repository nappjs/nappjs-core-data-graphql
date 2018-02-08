import { NappJS, NappJSService } from "nappjs";
import NappJSGraphQLApi from "nappjs-graphql-api";
import NappJSCoreData from "nappjs-core-data";

const CoreDataGraphql = require("js-core-data-graphql");
const { expressPlayground } = require("graphql-playground-middleware");
const bodyParser = require("body-parser");

const GRAPHQL_API_PATH = process.env.GRAPHQL_API_PATH || "/graphql";

export default class NappJSGraphqlAPI extends NappJSService {
  static dependencies = ["nappjs-core-data", "nappjs-graphql-api"];

  coredata: NappJSCoreData;
  api: NappJSGraphQLApi;

  constructor(coredata: NappJSCoreData, api: NappJSGraphQLApi) {
    super();
    this.coredata = coredata;
    this.api = api;
  }

  async load(napp: NappJS) {
    let schema = CoreDataGraphql.schema.getSchemaFromModel(
      this.coredata.database.model
    );
    this.api.addSchema(schema);
  }
}
