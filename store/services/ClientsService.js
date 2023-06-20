export async function getClientsAPI(){
    var response = await fetch(process.env.NEXT_PUBLIC_SERVER+"/api/clients",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
