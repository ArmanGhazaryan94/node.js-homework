import config from "./config/config";
import {
    User,
    Product,
} from './models';
import { DirWatcher } from "./dirwatcher/Dirwatcher";
import {Importer} from "./importer/Importer";
import path from "path";

const dirwatcher = new DirWatcher();
const importer = new Importer();

importer.listen();
dirwatcher.watch(path.join(__dirname, 'data'), 3000);
console.log(config.name);
new User();
new Product();