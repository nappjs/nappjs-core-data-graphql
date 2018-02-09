import { NappJS, NappJSService } from "nappjs";
import NappJSGraphQLApi from "nappjs-graphql-api";
import NappJSCoreData from "nappjs-core-data";
import { GraphQLSchema } from "graphql";
import NappJSApi from "nappjs-api";

const CoreDataGraphql = require("js-core-data-graphql");
const { expressPlayground } = require("graphql-playground-middleware");
const bodyParser = require("body-parser");

const GRAPHQL_API_PATH = process.env.GRAPHQL_API_PATH || "/graphql";

export default class NappJSCoreDataGraphql extends NappJSService {
  async load(napp: NappJS) {
    const coredata = napp.getService("nappjs-core-data");
    const api = napp.getService("nappjs-api");
    const graphql = napp.getService("nappjs-graphql-api");

    let schema = CoreDataGraphql.schema.getSchemaFromModel(
      coredata.database.model
    );

    graphql.addSchema(schema);
  }
}
