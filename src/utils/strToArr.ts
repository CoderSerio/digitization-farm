export const strHandler = (str:string|undefined)=>{
    return str?.slice(1,str.length-1).split(',')
}