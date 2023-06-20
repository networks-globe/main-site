export async function getBlogCategoryAPI(){
    var response = await fetch(process.env.NEXT_PUBLIC_SERVER+"/api/blog-category",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
