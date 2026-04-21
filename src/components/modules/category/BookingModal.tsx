// "use client";

// import * as React from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { CalendarDays, PawPrint } from "lucide-react";

// // --- Zod Schema ---
// const bookingSchema = z.object({
//   petId: z.string().min(1, "Please select a pet"),
//   startDate: z.string().min(1, "Start date is required"),
//   endDate: z.string().min(1, "End date is required"),
//   notes: z.string().optional(),
// });

// export type BookingFormValues = z.infer<typeof bookingSchema>;

// interface BookingModalProps {
//   pets: { id: string; name: string }[];
//   onSubmit: (data: BookingFormValues) => void;
// }

// export default function BookingModal({
//   pets,
//   onSubmit,
// }: BookingModalProps) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//   } = useForm<BookingFormValues>({
//     resolver: zodResolver(bookingSchema),
//   });

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:opacity-90">
//           🐾 Book Service
//         </Button>
//       </DialogTrigger>

//       <DialogContent className="sm:max-w-lg rounded-2xl p-6">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold text-center">
//             Book Your Service
//           </DialogTitle>
//           <p className="text-sm text-muted-foreground text-center">
//             সহজে আপনার পছন্দের সার্ভিস বুক করুন
//           </p>
//         </DialogHeader>

//         <form
//           className="space-y-5 mt-4"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           {/* Pet Select */}
//           <div className="space-y-2">
//             <Label className="flex items-center gap-2">
//               <PawPrint size={16} /> Select Pet
//             </Label>

//             <Select onValueChange={(val) => setValue("petId", val)}>
//               <SelectTrigger className="rounded-xl">
//                 <SelectValue placeholder="Choose your pet" />
//               </SelectTrigger>
//               <SelectContent>
//                 {pets.map((pet) => (
//                   <SelectItem key={pet.id} value={pet.id}>
//                     {pet.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             {errors.petId && (
//               <p className="text-red-500 text-sm">
//                 {errors.petId.message}
//               </p>
//             )}
//           </div>

//           {/* Start Date */}
//           <div className="space-y-2">
//             <Label className="flex items-center gap-2">
//               <CalendarDays size={16} /> Start Date
//             </Label>

//             <Input
//               type="datetime-local"
//               className="rounded-xl"
//               {...register("startDate")}
//             />

//             {errors.startDate && (
//               <p className="text-red-500 text-sm">
//                 {errors.startDate.message}
//               </p>
//             )}
//           </div>

//           {/* End Date */}
//           <div className="space-y-2">
//             <Label className="flex items-center gap-2">
//               <CalendarDays size={16} /> End Date
//             </Label>

//             <Input
//               type="datetime-local"
//               className="rounded-xl"
//               {...register("endDate")}
//             />

//             {errors.endDate && (
//               <p className="text-red-500 text-sm">
//                 {errors.endDate.message}
//               </p>
//             )}
//           </div>

//           {/* Notes */}
//           <div className="space-y-2">
//             <Label>Notes</Label>
//             <Textarea
//               placeholder="Special instructions..."
//               className="rounded-xl"
//               {...register("notes")}
//             />
//           </div>

//           <DialogFooter className="pt-4">
//             <Button
//               type="submit"
//               className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
//             >
//               Confirm Booking 🚀
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }



// "use client";

// import * as React from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";

// // SkillBridge এর জন্য Zod Schema
// const bookingSchema = z.object({
//   startDate: z.string().min(1, "Start date and time is required"),
//   endDate: z.string().min(1, "End date and time is required"),
//   notes: z.string().min(5, "Please provide a brief note for the tutor").optional(),
// });

// export type BookingFormValues = z.infer<typeof bookingSchema>;

// interface BookingModalProps {
//   onSubmit: (data: BookingFormValues) => void;
// }

// export default function BookingModal({ onSubmit }: BookingModalProps) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<BookingFormValues>({
//     resolver: zodResolver(bookingSchema),
//   });

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold py-6">
//           Book Session Now
//         </Button>
//       </DialogTrigger>

//       <DialogContent className="sm:max-w-lg rounded-2xl">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold">Schedule Your Lesson</DialogTitle>
//         </DialogHeader>

//         <form className="space-y-5 pt-4" onSubmit={handleSubmit(onSubmit)}>
//           {/* Start Date & Time */}
//           <div className="space-y-2">
//             <Label htmlFor="startDate" className="text-sm font-medium">
//               Start Date & Time
//             </Label>
//             <Input
//               id="startDate"
//               type="datetime-local"
//               className="rounded-lg focus:ring-primary"
//               {...register("startDate")}
//             />
//             {errors.startDate && (
//               <p className="text-destructive text-xs">{errors.startDate.message}</p>
//             )}
//           </div>

//           {/* End Date & Time */}
//           <div className="space-y-2">
//             <Label htmlFor="endDate" className="text-sm font-medium">
//               End Date & Time
//             </Label>
//             <Input
//               id="endDate"
//               type="datetime-local"
//               className="rounded-lg focus:ring-primary"
//               {...register("endDate")}
//             />
//             {errors.endDate && (
//               <p className="text-destructive text-xs">{errors.endDate.message}</p>
//             )}
//           </div>

//           {/* Notes */}
//           <div className="space-y-2">
//             <Label htmlFor="notes" className="text-sm font-medium">
//               Lesson Goals / Notes
//             </Label>
//             <Textarea
//               id="notes"
//               placeholder="What would you like to focus on in this session?"
//               className="resize-none rounded-lg min-h-[100px]"
//               {...register("notes")}
//             />
//             {errors.notes && (
//               <p className="text-destructive text-xs">{errors.notes.message}</p>
//             )}
//           </div>

//           <DialogFooter className="pt-2">
//             <Button 
//               type="submit" 
//               className="w-full py-6 rounded-xl font-bold transition-all"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Processing..." : "Confirm Booking"}
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }





// "use client";

// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// // ✅ Schema
// const bookingSchema = z.object({
//   startDate: z.string().min(1, "Start date is required"),
//   endDate: z.string().min(1, "End date is required"),
//   notes: z.string().optional(),
// });

// // ✅ Type
// export type BookingFormValues = z.infer<typeof bookingSchema>;

// // ✅ Props
// interface BookingModalProps {
//   onSubmit: (data: BookingFormValues) => void;
// }

// // ✅ Component (default export)
// export default function BookingModal({ onSubmit }: BookingModalProps) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<BookingFormValues>({
//     resolver: zodResolver(bookingSchema),
//   });

//   return (
//     <div className="p-4 border rounded-xl">
//       <h2 className="text-lg font-semibold mb-4">Book This Service</h2>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
//         {/* Start Date */}
//         <div>
//           <input
//             type="date"
//             {...register("startDate")}
//             className="w-full border p-2 rounded"
//           />
//           {errors.startDate && (
//             <p className="text-red-500 text-sm">
//               {errors.startDate.message}
//             </p>
//           )}
//         </div>

//         {/* End Date */}
//         <div>
//           <input
//             type="date"
//             {...register("endDate")}
//             className="w-full border p-2 rounded"
//           />
//           {errors.endDate && (
//             <p className="text-red-500 text-sm">
//               {errors.endDate.message}
//             </p>
//           )}
//         </div>

//         {/* Notes */}
//         <div>
//           <textarea
//             placeholder="Additional notes (optional)"
//             {...register("notes")}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full bg-black text-white py-2 rounded-xl"
//         >
//           {isSubmitting ? "Booking..." : "Confirm Booking"}
//         </button>
//       </form>
//     </div>
//   );
// }




// Three option 

// "use client";

// import * as React from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";

// // ---------------- Schema ----------------
// const bookingSchema = z.object({
//   startDate: z.string().min(1, "Start date is required"),
//   endDate: z.string().min(1, "End date is required"),
//   notes: z.string().optional(),
// });

// export type BookingFormValues = z.infer<typeof bookingSchema>;

// // ---------------- Props ----------------
// interface BookingModalProps {
//   onSubmit: (data: BookingFormValues) => void;
// }

// // ---------------- Component ----------------
// export default function BookingModal({ onSubmit }: BookingModalProps) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<BookingFormValues>({
//     resolver: zodResolver(bookingSchema),
//   });

//   return (
//     <Dialog>
//       {/* Trigger Button */}
//       <DialogTrigger asChild>
//         <Button>Book Service</Button>
//       </DialogTrigger>

//       {/* Modal Content */}
//       <DialogContent className="sm:max-w-lg">
//         <DialogHeader>
//           <DialogTitle>Book Your Session</DialogTitle>
//         </DialogHeader>

//         <form
//           className="space-y-4"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           {/* Start Date */}
//           <div className="space-y-1">
//             <Label>Start Date</Label>
//             <Input type="datetime-local" {...register("startDate")} />
//             {errors.startDate && (
//               <p className="text-red-500 text-sm">
//                 {errors.startDate.message}
//               </p>
//             )}
//           </div>

//           {/* End Date */}
//           <div className="space-y-1">
//             <Label>End Date</Label>
//             <Input type="datetime-local" {...register("endDate")} />
//             {errors.endDate && (
//               <p className="text-red-500 text-sm">
//                 {errors.endDate.message}
//               </p>
//             )}
//           </div>

//           {/* Notes */}
//           <div className="space-y-1">
//             <Label>Notes</Label>
//             <Textarea
//               placeholder="Write any instructions..."
//               {...register("notes")}
//             />
//           </div>

//           {/* Footer */}
//           <DialogFooter>
//             <Button type="submit" className="w-full">
//               Confirm Booking
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }





"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ---------------- Schema ----------------
const bookingSchema = z.object({
  subjectId: z.string().min(1, "Select subject"),
  startDate: z.string().min(1),
  endDate: z.string().min(1),
  notes: z.string().optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;

// ---------------- Props ----------------
interface Subject {
  id: string;
  name: string;
}

interface BookingModalProps {
  subjects: Subject[];
  onSubmit: (data: BookingFormValues) => void;
}

// ---------------- Component ----------------
export default function BookingModal({
  subjects,
  onSubmit,
}: BookingModalProps) {

  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  console.log("SUBJECTS:", subjects); // 🔥 DEBUG IMPORTANT

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Book Service</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Book Session</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* 🔥 SUBJECT DROPDOWN */}
          <div>
            <Label>Subject</Label>

            <Select onValueChange={(val) => setValue("subjectId", val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>

              <SelectContent>
                {subjects && subjects.length > 0 ? (
                  subjects.map((sub) => (
                    <SelectItem key={sub.id} value={sub.id}>
                      {sub.name}
                    </SelectItem>
                  ))
                ) : (
                  <div className="p-2 text-sm text-gray-500">
                    No subjects found
                  </div>
                )}
              </SelectContent>
            </Select>

            {errors.subjectId && (
              <p className="text-red-500 text-sm">
                {errors.subjectId.message}
              </p>
            )}
          </div>

          {/* Start Date */}
          <Input type="datetime-local" {...register("startDate")} />

          {/* End Date */}
          <Input type="datetime-local" {...register("endDate")} />

          {/* Notes */}
          <Textarea {...register("notes")} placeholder="Notes..." />

          {/* Submit */}
          <DialogFooter>
            <Button type="submit" className="w-full">
              Confirm Booking
            </Button>
          </DialogFooter>

        </form>
      </DialogContent>
    </Dialog>
  );
}