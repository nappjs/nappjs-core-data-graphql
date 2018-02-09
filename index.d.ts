import { NappJS, NappJSService } from "nappjs";
import NappJSGraphQLApi from "nappjs-graphql-api";
import NappJSCoreData from "nappjs-core-data";
export default class NappJSGraphqlAPI extends NappJSService {
    static dependencies: string[];
    coredata: NappJSCoreData;
    api: NappJSGraphQLApi;
    constructor(coredata: NappJSCoreData, api: NappJSGraphQLApi);
    load(napp: NappJS): Promise<void>;
}
