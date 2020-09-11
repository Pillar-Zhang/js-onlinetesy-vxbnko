import {groupBy,forEach} from 'lodash'

const data = [
]


for(let i = 0;i<20;i++){
data.push({
  id:"10000000"+i,name:"permission"+i,level:parseInt(Math.random()*(5-1)+1),parentId:parseInt(Math.random()*(4-1)+1)
})
}

const groupData = groupBy(data,(d)=>d.level)

console.log(groupData,"mock groupData")



export default data