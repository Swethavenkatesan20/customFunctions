//custom map
let customMap=(arr,callbackFn)=>{
    let result=[]
    for(let i=0;i<arr.length;i++){
        result.push((callbackFn(arr[i],i,arr)))
    }
    return result
}

let arr=[1,2,3];
const newArr=customMap(arr,(element,index,array)=>{
   return element*2
})
console.log(newArr);




let newArr1=customMap(arr,(element,index,array)=>{
   return index
})
console.log(newArr1);

