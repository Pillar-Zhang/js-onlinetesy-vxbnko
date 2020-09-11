const data = [
    {id:"100000001",name:"permission",index:1,level:0,parentId:""},
]


for(let i = 0;i<100;i++){
data.push({
  id:"10000000"+i,name:"permission"+i,index:1+i,level:parseInt(Math.random()*(5-1)+1),parentId:parseInt(Math.random()*(4-1)+1)
})
}

console.log(data,"mock data")


export default data