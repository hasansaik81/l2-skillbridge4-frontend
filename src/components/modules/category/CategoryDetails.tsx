
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
import { useEffect, useState } from "react";
import { getOwnSubjects } from "@/services/subjects";

//  mentor or tutor type
interface Mentor {
  id: string;
  name: string;
  experience?: number;
  hourlyRate?: number;
  bio?: string;
  image?: string;
}

// category or service type
interface Category {
  id: string;
  _id?: string; // for backend using mongodb
  title: string;
  price: number;
  description: string;
  tutorId: string;
  mentor?: Mentor;
}

// logged in user type
interface User {
  id: string;
  email: string;
  name?: string;
  role?: string;
}

// final props interface
interface CategoryDetailsProps {
  category: Category; 
  user: User | null;  
}

export default function CategoryDetails({ category, user }: CategoryDetailsProps) {
  const { title, price, description, mentor } = category;
  const router = useRouter();
  const [subject, setSubject] = useState([]);

//  subject data fectch 
  useEffect(() => {
    const fetchSubjects = async () => {
      const res = await getOwnSubjects();
      if (res.success) {
        setSubject(res.data);
      } else {
        console.error("Subject Fetch Error:", res.message);
      }
    };
    fetchSubjects();
  }, []);

  // booking handler
  async function handleBooking(data: BookingFormValues) {
    const payload = {
      studentId: user?.id, 
      tutorId: category?.tutorId, 
      categoryId: category?.id,
      subjectId: data?.subjectId,
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
      note: data.note,
    };

    try {
      const res = await createBooking(payload);

      if (res?.success) {
        toast.success(res.message || "Booking request sent successfully!");
         const bookingId = res?.data?.id; 
      

         router.push(`/booking/confirm?bookingId=${bookingId}`)
        // router.push("/booking/confirm"); 
       
      } else {
        
        toast.error(res?.message || "Booking failed.");
      }
    } catch (error: any) {
      console.error("Booking Error:", error);
      toast.error(error?.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="container mx-auto px-4 py-12">
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
            <span className="text-base text-muted-foreground font-normal">per course</span>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="grid md:grid-cols-3 gap-10">
         
          <div className="md:col-span-2 space-y-8">
            <Card className="rounded-2xl shadow-sm border">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-semibold">About This Skill</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {description || "SkillBridge helps you gain real-world skills with expert mentors."}
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm border">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-semibold">Meet Your Mentor</h2>
                <div className="flex items-center gap-5">
                  <Avatar className="h-16 w-16 text-lg">
                    <AvatarFallback>{mentor?.name?.charAt(0) || "M"}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">{mentor?.name || "SkillBridge Mentor"}</h3>
                    <p className="text-sm text-muted-foreground">Industry Expert</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase size={16} /> {mentor?.experience || 5}+ Years Experience
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} /> ${mentor?.hourlyRate || 50}/Hour
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* right side booking panel */}
          <div>
            <Card className="sticky top-28 rounded-2xl shadow-xl border bg-background">
              <CardContent className="p-8 space-y-6">
                <div className="text-3xl font-bold text-primary">${price}</div>
                <p className="text-sm text-muted-foreground">
                  Enroll now and start building your career with SkillBridge.
                </p>

                {/* booking modal */}
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



// ১. মেন্টর বা টিউটর এর জন্য টাইপ
// interface Mentor {
//   id: string;
//   name: string;
//   experience?: number;
//   hourlyRate?: number;
//   bio?: string;
//   image?: string;
// }

// // ২. ক্যাটাগরি বা সার্ভিসের জন্য টাইপ
// interface Category {
//   id: string;
//   _id?: string; // ব্যাকএন্ড যদি মঙ্গোডিবি হয়
//   title: string;
//   price: number;
//   description: string;
//   tutorId: string;
//   mentor?: Mentor;
// }

// // ৩. লগইন করা ইউজারের জন্য টাইপ
// interface User {
//   id: string;
//   email: string;
//   name?: string;
//   role?: string;
// }

// // ৪. ফাইনাল প্রপস ইন্টারফেস
// interface CategoryDetailsProps {
//   category: Category; // 'any' এর বদলে নির্দিষ্ট টাইপ
//   user: User | null;  // ইউজার লগআউট থাকলে null হতে পারে
// }





// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Separator } from "@/components/ui/separator";
// import { Briefcase, DollarSign, Calendar, Star } from "lucide-react";

// import { createBooking } from "@/services/booking";
// import { getOwnSubjects } from "@/services/subjects";
// import BookingModal, { BookingFormValues } from "./BookingModal";


// //  mentor or tutor type
// interface Mentor {
//   id: string;
//   name: string;
//   experience?: number;
//   hourlyRate?: number;
//   bio?: string;
//   image?: string;
// }

// // category or service type
// interface Category {
//   id: string;
//   _id?: string; // for backend using mongodb
//   title: string;
//   price: number;
//   description: string;
//   tutorId: string;
//   mentor?: Mentor;
// }

// // logged in user type
// interface User {
//   id: string;
//   email: string;
//   name?: string;
//   role?: string;
// }

// // final props interface
// interface CategoryDetailsProps {
//   category: Category; 
//   user: User | null;  
// }


// export default function CategoryDetails({ category, user }: CategoryDetailsProps) {
//   const router = useRouter();
//   const [subject, setSubject] = useState([]);
//   const [loadingSubjects, setLoadingSubjects] = useState(true);

//   // ১. সাবজেক্ট ফেচ করার হুক
//   useEffect(() => {
//     const fetchSubjects = async () => {
//       try {
//         const res = await getOwnSubjects();
//         if (res?.success && Array.isArray(res.data)) {
//           setSubject(res.data);
//         }
//       } catch (err) {
//         console.error("Subject Fetch Error:", err);
//       } finally {
//         setLoadingSubjects(false);
//       }
//     };
//     fetchSubjects();
//   }, []);

//   // ২. সেফটি চেক (হুকগুলোর পরে)
//   if (!category) {
//     return (
//       <div className="flex h-screen items-center justify-center">
//         <p className="text-lg animate-pulse font-semibold">Loading category data...</p>
//       </div>
//     );
//   }

//   const { title, price, description, mentor, tutorId, id: categoryId } = category;

//   // ৩. বুকিং এবং পেমেন্ট রিডাইরেক্ট হ্যান্ডলার
//   async function handleBooking(data: BookingFormValues) {
//     const payload = {
//       studentId: user?.id,
//       tutorId: tutorId,
//       categoryId: categoryId,
//       subjectId: data?.subjectId,
//       startDate: new Date(data.startDate).toISOString(),
//       endDate: new Date(data.endDate).toISOString(),
//       note: data.note || "",
//     };

//     try {
//       const res = await createBooking(payload);
//       if (res?.success) {
//         toast.success("Booking successful! Redirecting to payment...");
//        console.log("RES:", res);


      

//                  const bookingId = res?.data?.id || res?.data?._id;

//                    const price =
//                    res?.data?.price ||
//                    res?.data?.amount ||
//                    res?.data?.totalPrice ||
//                   res?.data?.booking?.price;


//         // নিশ্চিত করুন আপনার কাছে title এর ভ্যালু আছে
//     const title = res.data.courseTitle || "SkillBridge Course";
        
//         // পেমেন্ট পেজে রিডাইরেক্ট
//         // router.push(`/checkout?bookingId=${bookingId}&amount=${price}&title=${encodeURIComponent(title)}`);
//         router.push(
//       `/checkout?bookingId=${bookingId}&amount=${price}&title=${encodeURIComponent(title)}`
//     );
//       } else {
//         toast.error(res?.message || "Booking failed.");
//       }
//     } catch (error: any) {
//       toast.error("Internal Server Error. Try again.");
//     }
//   }

//   return (
//     <div className="min-h-screen bg-muted/40">
//       <div className="container mx-auto px-4 py-12">
//         {/* হেডার সেকশন */}
//         <div className="space-y-6">
//           <div className="flex items-center gap-3">
//             <Badge className="bg-gradient-to-r from-primary to-purple-500 text-white px-4 py-1 text-sm">
//               {title}
//             </Badge>
//             <span className="flex items-center gap-1 text-muted-foreground text-sm">
//               <Star size={16} /> SkillBridge Certified
//             </span>
//           </div>
//           <h1 className="text-4xl font-bold tracking-tight">Master {title} with SkillBridge</h1>
//           <div className="flex items-center gap-2 text-2xl font-semibold text-primary">
//             <DollarSign size={22} />{price}
//             <span className="text-base text-muted-foreground font-normal"> per course</span>
//           </div>
//         </div>

//         <Separator className="my-10" />

//         <div className="grid md:grid-cols-3 gap-10">
//           {/* বাম পাশের কন্টেন্ট - এখানে ২টা কার্ড আছে */}
//           <div className="md:col-span-2 space-y-8">
            
//             {/* সেকশন ১: About This Skill */}
//             <Card className="rounded-2xl shadow-sm border">
//               <CardContent className="p-8 space-y-4">
//                 <h2 className="text-2xl font-semibold text-gray-800">About This Skill</h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   {description || "Enhance your career with our expert-led mentorship program."}
//                 </p>
//               </CardContent>
//             </Card>

//             {/* সেকশন ২: Meet Your Mentor */}
//             <Card className="rounded-2xl shadow-sm border">
//               <CardContent className="p-8 space-y-6">
//                 <h2 className="text-2xl font-semibold text-gray-800">Meet Your Mentor</h2>
//                 <div className="flex items-center gap-5">
//                   <Avatar className="h-20 w-20 border-2 border-primary/10">
//                     <AvatarFallback className="bg-primary/5 text-primary text-xl font-bold">
//                       {mentor?.name?.charAt(0) || "M"}
//                     </AvatarFallback>
//                   </Avatar>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">{mentor?.name || "Expert Mentor"}</h3>
//                     <p className="text-sm text-blue-600 font-medium">Verified Industry Expert</p>
//                   </div>
//                 </div>
                
//                 <Separator />

//                 <div className="grid grid-cols-2 gap-6 pt-2">
//                   <div className="flex items-center gap-3 text-gray-600">
//                     <div className="p-2 bg-muted rounded-lg"><Briefcase size={18} /></div>
//                     <div>
//                       <p className="text-xs text-muted-foreground uppercase">Experience</p>
//                       <p className="font-semibold">{mentor?.experience || 5}+ Years</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3 text-gray-600">
//                     <div className="p-2 bg-muted rounded-lg"><DollarSign size={18} /></div>
//                     <div>
//                       <p className="text-xs text-muted-foreground uppercase">Hourly Rate</p>
//                       <p className="font-semibold">${mentor?.hourlyRate || 40}/hr</p>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* ডান পাশের স্টিকি বুকিং কার্ড */}
//           <div className="relative">
//             <Card className="sticky top-28 rounded-2xl shadow-xl border bg-background overflow-hidden">
//               <div className="h-2 bg-primary" />
//               <CardContent className="p-8 space-y-6">
//                 <div>
//                   <div className="text-sm text-muted-foreground mb-1">Total Course Fee</div>
//                   <div className="text-4xl font-extrabold text-primary">${price}</div>
//                 </div>
                
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   Enroll today to get full access to the course and 1-on-1 mentorship.
//                 </p>

//                 {/* বুকিং মডাল বাটন */}
//                 <BookingModal subjects={subject} onSubmit={handleBooking} price={price} />

//                 <Button variant="outline" className="w-full py-6 rounded-xl font-semibold">
//                   Contact Mentor
//                 </Button>

//                 <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest pt-4">
//                    <div className="h-px w-8 bg-border" />
//                    Secure Checkout
//                    <div className="h-px w-8 bg-border" />
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







