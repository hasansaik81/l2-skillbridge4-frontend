"use server";

export const getAllCategory= async()=>{
    try{
     const res= await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/categories/public`,
        {

            method:"GET",
            headers:{
                "Content-Type":"aplication/jsin",
            },
            
        }
     );
     const result =await res.json();
     return result
    }catch(error:any){
        return Error(error)
    }
};