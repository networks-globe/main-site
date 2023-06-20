export async function getGalleryAPI(){
    var response = await fetch(process.env.NEXT_PUBLIC_SERVER+"/api/gallery",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
