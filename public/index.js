const filter = ((str,arr)=>{
   const filtered=[];
    arr.map((e)=>{
        if(e.title.includes(str)===true){
            filtered.add(e);
        }
    })
return filtered;
})

module.exports=filter;