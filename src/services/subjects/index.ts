"use server"

import { cookies } from "next/headers";

export const getOwnSubjects=async()=>{
    const store = await cookies();
    const token= store.get("token")?.value;

    try{
       const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/subject`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization:token!,
        },
        next:{
            revalidate:3600,
        },
       });
       const result = await res.json();
       return result

    }catch(error:any){
     return Error(error);
    }
};



// export const getOwnSubjects = async () => {
//   const store = await cookies();
//   const token = store.get("token")?.value;

//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/category/subject`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // ✅ FIXED
//         },
//         cache: "no-store", // 🔥 important for fresh data
//       }
//     );

//     if (!res.ok) {
//       console.log("❌ API ERROR STATUS:", res.status);
//       return { success: false, data: [] };
//     }

//     const result = await res.json();

//     console.log("✅ SUBJECT API RESULT:", result); // 🔥 DEBUG

//     return result;
//   } catch (error: any) {
//     console.error("Fetch Error:", error);
//     return { success: false, data: [] };
//   }
// };
