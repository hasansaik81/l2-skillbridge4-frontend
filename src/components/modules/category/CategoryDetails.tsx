"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Briefcase, DollarSign, Calendar, Star } from "lucide-react";
import { toast } from "sonner";
import { createBooking } from "@/services/booking";
import BookingModal, { BookingFormValues } from "./BookingModal";
import { useRouter } from "next/navigation";


interface CategoryDetailsProps {
  category: any;
  user:any
}


export default function CategoryDetails({ category,user }: CategoryDetailsProps) {
  const { title, price, description, mentor } = category;

 const subject = [
    { id: "639507f2-086a-4397-ac2f-71be7c5bf330", name: "Fluffy" },
    { id: "639507f2-086a-4397-ac2f-71be7c5bf331", name: "Bella" },
  ];

  const router = useRouter(); // ✅ এখানে থাকবে

async function handleBooking(data: BookingFormValues) {


  // ১. পেলোড তৈরি (SkillBridge Schema অনুযায়ী)
  // const payload = {
  //   studentId: user?.id,          // লগইন করা ইউজারের আইডি (Student)
  //   tutorId: category?.tutorId,    // যে টিউটরের সার্ভিস বুক করা হচ্ছে
  //   categoryId: category?.id,      // নির্দিষ্ট কোর্সের বা ক্যাটাগরির আইডি
  //   startDate: new Date(data.startDate).toISOString(),
  //   endDate: new Date(data.endDate).toISOString(),
  //   notes: data.notes,
  // };
  

const payload = {
  studentId: user?.id,
  tutorId: category?.tutorId,
  categoryId: category?.id,
  startDate: new Date(data.startDate).toISOString(),
  endDate: new Date(data.endDate).toISOString(),
  notes: data.notes,
};

console.log("USER:", user);
console.log("CATEGORY:", category);
console.log("SELECTED:", category?.[0]);
  // console.log("Submitting Booking Payload:", payload);

  try {
    // ২. API কল
    const res = await createBooking(payload);
    
    if (res?.success) {
      toast.success(res.message || "Booking request sent to tutor!");
      // মডাল ক্লোজ করার লজিক এখানে দিতে পারেন 
          // ✅ এখানে route change করবে
      router.push("/booking/confirm")
    } else {
      // যদি সার্ভার থেকে এরর মেসেজ আসে
      toast.error(res?.message || "Booking failed. Please try again.");
    }
  } catch (error: any) {
    console.error("Booking Error:", error);
    toast.error(error?.message || "Internal Server Error. Try again later.");
  }
}






  return (
    <div className="min-h-screen bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        
        {/* HERO SECTION */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Badge className="bg-gradient-to-r from-primary to-purple-500 text-white px-4 py-1 text-sm">
              {title}
            </Badge>

            <span className="flex items-center gap-1 text-muted-foreground text-sm">
              <Star size={16} />
              SkillBridge Certified
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">
            Master {title} with SkillBridge
          </h1>

          <div className="flex items-center gap-2 text-2xl font-semibold text-primary">
            <DollarSign size={22} />${price}
            <span className="text-base text-muted-foreground font-normal">
              per course
            </span>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="grid md:grid-cols-3 gap-10">
          
          {/* LEFT CONTENT */}
          <div className="md:col-span-2 space-y-8">
            
            {/* ABOUT CATEGORY */}
            <Card className="rounded-2xl shadow-sm border">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-semibold">
                  About This Skill
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {description ||
                    "SkillBridge helps you gain real-world skills with structured learning paths, expert mentors, and hands-on projects. This category is designed to make you industry-ready."}
                </p>
              </CardContent>
            </Card>

            {/* MENTOR PROFILE */}
            <Card className="rounded-2xl shadow-sm border">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-semibold">
                  Meet Your Mentor
                </h2>

                <div className="flex items-center gap-5">
                  <Avatar className="h-16 w-16 text-lg">
                    <AvatarFallback>
                      {mentor?.name?.charAt(0) || "S"}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {mentor?.name || "SkillBridge Mentor"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Industry Expert
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase size={16} />
                    {mentor?.experience || 5}+ Years Experience
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    ${mentor?.hourlyRate || 50}/Hour
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {mentor?.bio ||
                    "Learn directly from experienced professionals who have worked in the industry and guided hundreds of students through SkillBridge."}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT PANEL */}
          <div>
            <Card className="sticky top-28 rounded-2xl shadow-xl border bg-background">
              <CardContent className="p-8 space-y-6">
                
                <div className="text-3xl font-bold text-primary">
                  ${price}
                </div>

                <p className="text-sm text-muted-foreground">
                  Enroll now and start building your career with SkillBridge.
                </p>

                {/* <Button className="w-full rounded-xl   onSubmit={handleBooking} ">
                  Enroll Now
                </Button> */}
                <BookingModal subjects={subject} onSubmit={handleBooking} />

                <Button variant="outline" className="w-full rounded-xl">
                  Contact Mentor
                </Button>

                <div className="text-xs text-muted-foreground text-center">
                  No upfront commitment required
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}





// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Separator } from "@/components/ui/separator";
// import { Calendar, Briefcase, DollarSign, PawPrint } from "lucide-react";
// import BookingModal, { BookingFormValues } from "./ServiceBookingModal";
// import { useEffect, useState } from "react";
// import { getOwnPets } from "@/services/pets";
// import { createBooking } from "@/services/booking";
// import { toast } from "sonner";

// interface ServiceDetailsProps {
//   service: any;
//   user: any;
// }

// export default function ServiceDetails({ service, user }: ServiceDetailsProps) {
//   const { serviceType, price, description, sitter } = service;

//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     const fetchPets = async () => {
//       const { data } = await getOwnPets();
//       setPets(data);
//     };
//     fetchPets();
//   }, []);

//   async function handleBooking(data: BookingFormValues) {
//     const payload = {
//       ownerId: user.id,
//       sitterId: service.sitterId,
//       petId: data.petId,
//       serviceId: service.id,
//       startDate: new Date(data.startDate).toISOString(),
//       endDate: new Date(data.endDate).toISOString(),
//       notes: data.notes,
//     };

//     try {
//       const res = await createBooking(payload);
//       if (res.success) {
//         toast.success(res.message);
//       } else {
//         toast.error(res.message);
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//     }
//   }

//   return (
//     <div className="min-h-screen bg-muted/40">
//       <div className="container mx-auto px-4 py-12">
//         {/* HERO SECTION */}
//         <div className="space-y-6">
//           <div className="flex items-center gap-3">
//             <Badge className="bg-gradient-to-r from-primary to-purple-500 text-white px-4 py-1 text-sm">
//               {serviceType}
//             </Badge>

//             <span className="flex items-center gap-1 text-muted-foreground text-sm">
//               <PawPrint size={16} />
//               SkillBridge Certified Course
//             </span>
//           </div>

//           <h1 className="text-4xl font-bold tracking-tight">
//             Master {serviceType} with Expert Mentorship
//           </h1>

//           <div className="flex items-center gap-2 text-2xl font-semibold text-primary">
//             <DollarSign size={22} />${price}{" "}
//             <span className="text-base text-muted-foreground font-normal">
//               one-time course fee
//             </span>
//           </div>
//         </div>

//         <Separator className="my-10" />

//         <div className="grid md:grid-cols-3 gap-10">
//           {/* LEFT CONTENT */}
//           <div className="md:col-span-2 space-y-8">
//             {/* ABOUT COURSE */}
//             <Card className="rounded-2xl shadow-sm border">
//               <CardContent className="p-8 space-y-4">
//                 <h2 className="text-2xl font-semibold">Course Overview</h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   {description ||
//                     "This course is designed to help you gain real-world skills through hands-on projects, expert guidance, and structured learning paths. Perfect for beginners and intermediate learners looking to level up."}
//                 </p>
//               </CardContent>
//             </Card>

//             {/* MENTOR PROFILE */}
//             <Card className="rounded-2xl shadow-sm border">
//               <CardContent className="p-8 space-y-6">
//                 <h2 className="text-2xl font-semibold">Meet Your Mentor</h2>

//                 <div className="flex items-center gap-5">
//                   <Avatar className="h-16 w-16 text-lg">
//                     <AvatarFallback>
//                       {sitter?.user?.name?.charAt(0)}
//                     </AvatarFallback>
//                   </Avatar>

//                   <div>
//                     <h3 className="text-xl font-semibold">
//                       {sitter?.user?.name}
//                     </h3>
//                     <p className="text-sm text-muted-foreground">
//                       Expert Instructor & Industry Professional
//                     </p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-6 text-sm">
//                   <div className="flex items-center gap-2 text-muted-foreground">
//                     <Briefcase size={16} />
//                     {sitter?.experience} Years Experience
//                   </div>

//                   <div className="flex items-center gap-2 text-muted-foreground">
//                     <Calendar size={16} />${sitter?.hourlyRate}/hr Mentorship
//                   </div>
//                 </div>

//                 <p className="text-muted-foreground text-sm leading-relaxed">
//                   {sitter?.bio ||
//                     "An experienced mentor dedicated to helping learners achieve their career goals through practical teaching methods and real-world insights."}
//                 </p>
//               </CardContent>
//             </Card>
//           </div>

//           {/* RIGHT BOOKING PANEL */}
//           <div>
//             <Card className="sticky top-28 rounded-2xl shadow-xl border bg-background">
//               <CardContent className="p-8 space-y-6">
//                 <div className="text-3xl font-bold text-primary">${price}</div>

//                 <p className="text-sm text-muted-foreground">
//                   Enroll today and start building in-demand skills with guided mentorship.
//                 </p>

//                 {/* <BookingModal pets={pets} onSubmit={handleBooking} /> */}

//                 <Button variant="outline" className="w-full rounded-xl">
//                   Contact Mentor
//                 </Button>

//                 <div className="text-xs text-muted-foreground text-center">
//                   Lifetime access • Certificate included • Real projects
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }