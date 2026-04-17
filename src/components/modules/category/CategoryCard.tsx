// // import { Card, CardContent, CardHeader } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// // type Category = {
// //   categoryType: string;
// //   price: number;
// //   description: string;
// //   tutor: {
// //     bio: string;
// //     experience: number;
// //     avgRating: string;
// //     user: {
// //       name: string;
// //     };
// //   };
// // };


// // type CategoryCardProps = {
// //   category: Category;
// // };

// // export default function CategoryCard({category}: CategoryCardProps) {
// //   return (
// //     <Card className="group relative overflow-hidden rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
      
// //       {/* Top Gradient */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition duration-300" />

// //       <CardHeader className="flex flex-row items-center justify-between pb-2">
// //         <Badge variant="secondary" className="text-xs font-semibold">
// //           {category.categoryType}
// //         </Badge>

// //         <span className="text-lg font-bold text-primary">
// //           ${category.price}
// //         </span>
// //       </CardHeader>

// //       <CardContent className="space-y-4">
        
// //         {/* Description */}
// //         <p className="text-sm text-muted-foreground line-clamp-2">
// //           {category.description}
// //         </p>

// //         {/* Tutor Info */}
// //         <div className="flex items-center gap-3">
// //           <Avatar>
// //             <AvatarFallback>
// //               {category.tutor.user.name.charAt(0)}
// //             </AvatarFallback>
// //           </Avatar>

// //           <div>
// //             <p className="text-sm font-medium leading-none">
// //               {category.tutor.user.name}
// //             </p>
// //             <p className="text-xs text-muted-foreground">
// //               {category.tutor.bio}
// //             </p>
// //           </div>
// //         </div>

// //         {/* Extra Info */}
// //         <div className="flex items-center justify-between text-xs text-muted-foreground">
// //           <span>Experience: {category.tutor.experience} yrs</span>
// //           <span>⭐ {category.tutor.avgRating || "New"}</span>
// //         </div>
// //       </CardContent>
// //     </Card>
// //   );
// // }




// /* eslint-disable @typescript-eslint/no-explicit-any */
// // "use client";

// // import { Card, CardContent, CardHeader } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// // import { Button } from "@/components/ui/button";
// // import Link from "next/link";

// // interface ServiceCardProps {
// //   service: any;
// // }

// // export default function Card({ service }: ServiceCardProps) {
// //   const { categoryType, price, description, tutor } = service;

// //   return (
// //     <Card className="group relative overflow-hidden rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
      
// //       {/* 🔥 Hover Gradient Effect */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition duration-300" />

// //       {/* Header */}
// //       <CardHeader className="flex flex-row items-center justify-between pb-2">
// //         <Badge variant="secondary" className="text-xs font-semibold">
// //           {categoryType}
// //         </Badge>

// //         <span className="text-lg font-bold text-primary">
// //           ${price}
// //         </span>
// //       </CardHeader>

// //       <CardContent className="space-y-4">

// //         {/* Description */}
// //         <p className="text-sm text-muted-foreground line-clamp-2">
// //           {description}
// //         </p>

// //         {/* Tutor Info */}
// //         <div className="flex items-center gap-3">
// //           <Avatar>
// //             <AvatarFallback>
// //               {tutor?.user?.name?.charAt(0)}
// //             </AvatarFallback>
// //           </Avatar>

// //           <div>
// //             <p className="text-sm font-medium leading-none">
// //               {tutor?.user?.name}
// //             </p>
// //             <p className="text-xs text-muted-foreground">
// //               {tutor?.bio}
// //             </p>
// //           </div>
// //         </div>

// //         {/* Extra Info */}
// //         <div className="flex items-center justify-between text-xs text-muted-foreground">
// //           <span>Experience: {tutor?.experience} yrs</span>
// //           <span>⭐ {tutor?.avgRating || "New"}</span>
// //         </div>

// //         {/* CTA Buttons */}
// //         <div className="flex gap-3 pt-2">
// //           <Button className="w-full">Book Now</Button>

// //           <Link href={`/services/${service.id}`} className="w-full">
// //             <Button variant="outline" className="w-full">
// //               Details
// //             </Button>
// //           </Link>
// //         </div>

// //       </CardContent>
// //     </Card>
// //   );
// // }



// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";


// import { useRouter } from "next/navigation";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { DollarSign, Briefcase, Star } from "lucide-react";
// import Link from "next/link";

// interface CategoryCardProps {
//   category: any;
  
// }

// export default function CategoryCard({ category }: CategoryCardProps) {

//  if (!category) {
//     return <div>Loading or No Data Found</div>;
//   }

//   const {  categoryType, price, description, tutor } = category;
//   const router = useRouter();

//   return (
//     <Card className="w-full max-w-md rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border group relative overflow-hidden">

//       {/* 🔥 Hover Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition duration-300" />

//       {/* Header */}
//       <CardHeader className="flex flex-row items-center justify-between">
        
//         <div>
//           <p className="text-xs text-muted-foreground">
//             Service Category
//           </p>
//           <Badge className="px-3 py-1 text-sm font-semibold">
//             {categoryType}
//           </Badge>
//         </div>

//         <div className="flex items-center gap-1 text-lg font-bold text-primary">
//           <DollarSign size={18} />
//           {price}
//         </div>
//       </CardHeader>

//       <CardContent className="space-y-4">

//         {/* Tutor Name + Description */}
//         <div>
//           <h3 className="text-xl font-semibold">
//             {tutor?.user?.name}
//           </h3>
//           <p className="text-sm text-muted-foreground line-clamp-2">
//             {description}
//           </p>
//         </div>

//         {/* Tutor Info */}
//         <div className="flex items-center gap-3">
//           <Avatar>
//             <AvatarFallback>
//               {tutor?.user?.name?.charAt(0)}
//             </AvatarFallback>
//           </Avatar>

//           <div>
//             <p className="text-sm font-medium">
//               {tutor?.user?.name}
//             </p>
//             <p className="text-xs text-muted-foreground">
//               {tutor?.bio}
//             </p>
//           </div>
//         </div>

//         {/* Extra Info */}
//         <div className="flex items-center justify-between text-sm text-muted-foreground">
          
//           <div className="flex items-center gap-1">
//             <Briefcase size={16} />
//             {tutor?.experience} yrs
//           </div>

//           <div className="flex items-center gap-1">
//             <Star size={16} />
//             {tutor?.avgRating || "New"}
//           </div>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex gap-5 items-center">
         
//   {/* <div className="flex flex-col sm:flex-row gap-3 w-full">
//          <Button  className="w-full sm:w-1/2">Book Now</Button>

//             <Link href={`/services/${category?.id }`} className="w-full sm:w-1/2">
//           <Button variant="outline" className="w-full bg-black text-white">
//             View Details
//         </Button>
//         </Link>
//      </div> */}

//      {/* <div>
//            <Button className="">Book Bow</Button>
//            <Link href={`/services/${category.id}`}>
//            {" "} 
//            <Button className="">View Details</Button>
//            </Link>

//      </div> */}

//      {/* <div className="flex gap-3">
//        <Button>Book Now</Button>

//        <Button onClick={() => console.log("CLICKED")}>
//            Test Click
//         </Button>
//        </div> */}



//        <div className="flex gap-3">
//   <Button>Book Bow</Button>

//   <Link href={`/services/${category._id || category.id}`}>
//     <Button type="button">View Details</Button>
//   </Link>
// </div>

  



// </div>

//       </CardContent>
//     </Card>
//   );
// }


// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { DollarSign, Briefcase, Star } from "lucide-react";
// import Link from "next/link";

// interface CategoryCardProps {
//   category: any;
// }

// export default function CategoryCard({ category }: CategoryCardProps) {
//   if (!category) return null;

//   const { categoryType, price, description, tutor, id } = category;

//   return (
//     <Card className="w-full max-w-md rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border group relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition duration-300" />

//       <CardHeader className="flex flex-row items-center justify-between relative z-10">
//         <div>
//           <p className="text-xs text-muted-foreground uppercase tracking-wider">Service Category</p>
//           <Badge className="px-3 py-1 mt-1 text-sm font-semibold">{categoryType}</Badge>
//         </div>
//         <div className="flex items-center gap-1 text-lg font-bold text-primary">
//           <DollarSign size={18} /> {price}
//         </div>
//       </CardHeader>

//       <CardContent className="space-y-4 relative z-10">
//         <div>
//           <h3 className="text-xl font-semibold text-slate-800">{tutor?.user?.name}</h3>
//           <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
//         </div>

//         <div className="flex items-center gap-3">
//           <Avatar className="border border-slate-200">
//             <AvatarFallback className="bg-slate-100 text-slate-700 font-bold">
//               {tutor?.user?.name?.charAt(0)}
//             </AvatarFallback>
//           </Avatar>
//           <div>
//             <p className="text-sm font-medium">{tutor?.user?.name}</p>
//             <p className="text-xs text-muted-foreground italic truncate max-w-[200px]">{tutor?.bio}</p>
//           </div>
//         </div>

//         <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
//           <div className="flex items-center gap-1"><Briefcase size={16} />{tutor?.experience} yrs</div>
//           <div className="flex items-center gap-1"><Star size={16} className="text-yellow-500 fill-yellow-500" />{tutor?.avgRating || "New"}</div>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
//           <Button className="w-full sm:w-1/2 rounded-xl">Book Now</Button>

//           {/* এখানে asChild এবং সঠিক Path ব্যবহার করা হয়েছে */}
//           {/* <Link href={`/services/${id}`} >
//             <Button variant="outline" className="w-full sm:w-1/2 bg-black text-white hover:bg-slate-800 rounded-xl transition-colors">
//               View Details
//             </Button>
//           </Link> */}

         
//           <Link href={`/services/${id}`}>
//             {" "}
//             <Button className="">View Details</Button>
//           </Link>

//         </div>
//       </CardContent>
//     </Card>
//   );
// }




/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DollarSign, Briefcase, Star } from "lucide-react";
import Link from "next/link";

interface CategoryCardProps {
  category: any;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  if (!category) return null;

  const { categoryType, price, description, tutor, id } = category;

  return (
    <Card className="w-full max-w-md rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border group relative overflow-hidden">
      
      {/* hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* header */}
      <CardHeader className="flex flex-row items-center justify-between relative z-10">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            Service Category
          </p>
          <Badge className="px-3 py-1 mt-1 text-sm font-semibold">
            {categoryType}
          </Badge>
        </div>

        <div className="flex items-center gap-1 text-lg font-bold text-primary">
          <DollarSign size={18} /> {price}
        </div>
      </CardHeader>

      {/* body */}
      <CardContent className="space-y-4 relative z-10">

        <div>
          <h3 className="text-xl font-semibold text-slate-800">
            {tutor?.user?.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        {/* tutor info */}
        <div className="flex items-center gap-3">
          <Avatar className="border border-slate-200">
            <AvatarFallback className="bg-slate-100 text-slate-700 font-bold">
              {tutor?.user?.name?.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="text-sm font-medium">
              {tutor?.user?.name}
            </p>
            <p className="text-xs text-muted-foreground italic truncate max-w-[200px]">
              {tutor?.bio}
            </p>
          </div>
        </div>

        {/* stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
          <div className="flex items-center gap-1">
            <Briefcase size={16} />
            {tutor?.experience} yrs
          </div>

          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            {tutor?.avgRating || "New"}
          </div>
        </div>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">

          <Button className="w-full sm:w-1/2 rounded-xl">
            Book Now
          </Button>

          {/* FIXED VIEW DETAILS BUTTON  */}
          {/* <Link
            href={`/services/${id}`}
            className="w-full sm:w-1/2"
          >
            <Button
              type="button"
              variant="outline"
              className="w-full rounded-xl bg-black text-white hover:bg-slate-800 transition-all duration-200"
            >
              View Details
            </Button>
          </Link> */}
             <Link href={`/services/${id}`}>
            {" "}
            <Button className="">View Details</Button>
          </Link>


        </div>

      </CardContent>
    </Card>
  );
}