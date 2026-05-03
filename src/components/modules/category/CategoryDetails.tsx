
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

interface CategoryDetailsProps {
  category: any;
  user: any;
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



