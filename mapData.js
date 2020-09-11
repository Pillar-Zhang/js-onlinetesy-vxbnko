import {uuid} from  "./util.js"
import {markers1,markers2} from "./data/lldata.js"


// get uuids
const uuids =[]
const array =[]
for(let i= 0; i<33;i+=1){
  const id = uuid(16,10);
  uuids.push(id)
}

const terminals =[]

uuids.forEach(uid=>{
  terminals.push({
    sn:uid
  })
})

const groups = []
let count = 0
for(let j=0;j<11;j++){
groups.push(terminals.slice(count,count+3))
count =count +3
}
// console.log(group,"group")
const group1 = groups.slice(0,5)
const group2 = groups.slice(5,11)

console.log(groups,"groups")

group1.forEach((group,index)=>{
  group[0].position=markers1[index].position
  group[1].position=markers1[index].position
  group[2].position=markers1[index].position
  array.push(...group)
})

group2.forEach((group,index)=>{
  group[0].position=markers2[index].position
  group[1].position=markers2[index].position
  group[2].position=markers2[index].position
   array.push(...group)
})

const str = JSON.stringify(array)
console.log(str,"str")