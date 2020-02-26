import * as Store from "electron-store"
import * as fs from "fs-extra"
import app = Electron.app;
import * as path from "path";
import {defaultConfig} from "./default-config";

export function getConfig() {
    let isFirst: boolean=false
    try {
        fs.accessSync(path.join(app.getPath("userdata"), "config.json"))
    } catch (e) {
            isFirst=true
    }
    const store=new Store()
    if(isFirst){
        store.store=defaultConfig
    }


    return [isFirst,store] as const
}