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
            next:{
                revalidate:3600
            }
            
        }
     );
     const result =await res.json();
     return result
    }catch(error:any){
        return Error(error)
    }
};


