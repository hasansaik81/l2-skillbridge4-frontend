// import CategoryCard from "@/components/modules/category/CategoryCard";
// import HeroCarousel from "@/components/modules/home/Hero"
// import { getAllCategory } from "@/services/category"



// export default async function Home() {
//   const {data}=await getAllCategory();
  
//   return (
//     <div>
//       <HeroCarousel/>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
//       {
//         data.map((c:any)=>(
//           <CategoryCard key={c.id} category={c}/>
//         ))}
      
//       </div>
//     </div>
//   )
// }



import CategoryCard from "@/components/modules/category/CategoryCard";
import HeroCarousel from "@/components/modules/home/Hero";
import { getAllCategory } from "@/services/category";

export default async function Home() {
  const { data } = await getAllCategory();
console.log(data)
  return (
    <div className="space-y-10">
      <HeroCarousel />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {data?.map((c: any) => (
          <CategoryCard key={c.id} category={c} />
        ))}
      </div>
    </div>
  );
}




// export default async function Home() {
//   const res = await getAllCategory();

//   console.log("CATEGORY RES:", res);

//   const data = res?.data || [];

//   return (
//     <div className="space-y-10">
//       <HeroCarousel />

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
//         {data.length > 0 ? (
//           data.map((c: any) => (
//             <CategoryCard key={c.id} category={c} />
//           ))
//         ) : (
//           <p className="text-red-500">No data found</p>
//         )}
//       </div>
//     </div>
//   );
// }