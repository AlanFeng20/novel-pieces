import {Record} from "../../interface/project";
import {BehaviorSubject} from "rxjs";
import {IO} from "../../elec/utils/io";
import {shouldUpdate} from "./shouldUpdate";
import produce from "immer";

export const record$ = new BehaviorSubject<Record>(new Record(null,'',''))
record$.subscribe(next => {
    if(shouldUpdate){
        IO._updateRecord(next)
    }
})

function recordUpdate(callback:(r:Record)=>void) {
    const old=record$.value
    const newR=produce(old,i=>{
        callback(i)
    })
    record$.next(newR)
}

export function updateCurUUID(cur:string|null) {
    recordUpdate(r=>r.curUUID=cur)
}

export function updateLastime(time:string) {
    recordUpdate(r=>r.lastUpdateTime=time)
}



