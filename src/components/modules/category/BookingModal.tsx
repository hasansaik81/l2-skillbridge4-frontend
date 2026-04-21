





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

// // ---------------- Schema ----------------
// const bookingSchema = z.object({
//   subjectId: z.string().min(1, "Select subject"),
//   startDate: z.string().min(1),
//   endDate: z.string().min(1),
//   notes: z.string().optional(),
// });

// export type BookingFormValues = z.infer<typeof bookingSchema>;

// // ---------------- Props ----------------
// interface BookingModalProps {
//   subjects: {id:string;name:string}[]
//   onSubmit:(data:BookingFormValues)=>void;
  
// }

// // interface BookingModalProps {
// //   subjects: Subject[];
// //   onSubmit: (data: BookingFormValues) => void;
// // }

// // export default function BookingModal({subjects,onSubmit}:BookingModalProps){
// //   const {register ,handleSubmit, watch,formState:{erros},setValue}=useForm<BookingFormValues>({
// //     resolver:zodResolver(bookingSchema),
// //   });
// // }

// // ---------------- Component ----------------
// export default function BookingModal({
//   subjects,
//   onSubmit,
// }: BookingModalProps) {

//   const {
//     handleSubmit,
//     setValue,
//     register,
//     formState: { errors },
//   } = useForm<BookingFormValues>({
//     resolver: zodResolver(bookingSchema),
//   });

//   console.log("SUBJECTS:", subjects); // 🔥 DEBUG IMPORTANT

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button>Book Service</Button>
//       </DialogTrigger>

//       <DialogContent className="sm:max-w-lg">
//         <DialogHeader>
//           <DialogTitle>Book Session</DialogTitle>
//         </DialogHeader>

//         <form className="space-y-4" onSubmit={handleSubmit((data) => onSubmit(data)) } >

//           {/* 🔥 SUBJECT DROPDOWN */}
//           <div>
//             <Label>Subject</Label>

//             <Select onValueChange={(val) => setValue("subjectId", val)}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select subject" />
//               </SelectTrigger>

//               <SelectContent>
//                 {subjects && subjects.length > 0 ? (
//                   subjects.map((sub) => (
//                     <SelectItem key={sub.id} value={sub.id}>
//                       {sub.name}
//                     </SelectItem>
//                   ))
//                 ) : (
//                   <div className="p-2 text-sm text-gray-500">
//                     No subjects found
//                   </div>
//                 )}
//               </SelectContent>
//             </Select>

//             {errors.subjectId && (
//               <p className="text-red-500 text-sm">
//                 {errors.subjectId.message}
//               </p>
//             )}
//           </div>

//           {/* Start Date */}
//           <Input type="datetime-local" {...register("startDate")} />

//           {/* End Date */}
//           <Input type="datetime-local" {...register("endDate")} />

//           {/* Notes */}
//           <Textarea {...register("notes")} placeholder="Notes..." />

//           {/* Submit */}
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
interface BookingModalProps {
  subjects: { id: string; name: string }[];
  onSubmit: (data: BookingFormValues) => void;
}

// ---------------- Component ----------------
export default function BookingModal({
  subjects=[],
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

  console.log("SUBJECTS FINAL:", subjects);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={subjects.length === 0}>
          {subjects.length === 0 ? "Loading..." : "Book Service"}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Book Session</DialogTitle>
        </DialogHeader>

        <form
          className="space-y-4"
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          {/* SUBJECT DROPDOWN */}
          <div>
            <Label>Subject</Label>

            <Select onValueChange={(val) => setValue("subjectId", val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>

              <SelectContent>
                {subjects.map((sub) => (
                  <SelectItem key={sub.id} value={sub.id}>
                    {sub.name}
                  </SelectItem>
                ))}
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