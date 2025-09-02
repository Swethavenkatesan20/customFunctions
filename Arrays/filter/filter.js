let customFilter=(array,callbackFn)=>{
let result=[];
for(let i=0;i<array.length;i++){
    if(callbackFn(array[i],i,array)){
        result.push(array[i])
    }
}
return result
}

let arr=[1,2,3,4]

let filterArr=customFilter(arr,(element,index,arr)=>{
  return  element %2===0;
})
console.log(filterArr);
