export async function getBlogsAPI(){
    var response = await fetch(process.env.NEXT_PUBLIC_SERVER+"/api/blog",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
