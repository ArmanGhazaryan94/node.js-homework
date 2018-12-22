import emitter from "../emitter";
import csv from "convert-csv-to-json";
import path from "path";
import {DirWatcher} from "../dirwatcher/Dirwatcher";

export class Importer {
    constructor() {
        this.dirwatcher = new DirWatcher();
    }
    
    listen() {
        emitter.on('​dirwatcher:changed', this.import.bind(this));
    }

    importSync(directory) {
        const files = this.dirwatcher.getFilesList(directory);
        const data = this.getFiles(files);

        console.log(data);
        return data;
    }

    import(files) {
        console.log(files);
        const data = this.getFiles(files);

        console.log(data);
        return new Promise(resolve => resolve(data));
    }

    getFiles(files) {
        const data = [];

        files.forEach(file => {
            const {fileName}= file;
            const filePath = path.join(file.directory, fileName);
            const data = csv.getJsonFromCsv(filePath);

            data.push({
                fileName,
                data
            });
        });

        return data;
    }
}
