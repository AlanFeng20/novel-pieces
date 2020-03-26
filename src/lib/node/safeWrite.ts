import * as fs from "fs-extra"

export async function safeWrite(path:string,data:string) {
    const tmp=path+".tmp"
    await fs.writeFile(tmp,data,"utf8")
    await fs.unlink(path)
    await fs.rename(tmp,path)
}
