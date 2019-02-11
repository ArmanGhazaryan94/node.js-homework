import fs from "fs";
import path from "path";
import util from "util";
import emitter from "../emitter";

export class DirWatcher {
    constructor(){
        this.files = [];
    }

    watch(directory, delay) {
        setInterval(() => this.checkFilesChanges(directory), delay);
    }

    checkFilesChanges(directory) {
        const files = this.getFilesList(directory, []);

        if (!util.isDeepStrictEqual(files, this.files)) {
            this.files = files;
            emitter.emit('​dirwatcher:changed', files);
        }
    }

    getFilesList(directory, fileList) {
        const files = fs.readdirSync(directory);

        files.forEach(file => {
            const filePath = path.join(directory, file);

            if (fs.statSync(filePath).isDirectory(filePath)) {
                fileList = this.getFilesList(filePath, fileList);
            } else {
                fileList.push({
                    directory,
                    fileName: file,
                    date: fs.statSync(filePath).mtime.getTime()
                });
            }
        });

        return fileList;
    }
}
