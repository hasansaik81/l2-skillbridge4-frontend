
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


const bookingSchema = z.object({
  subjectId: z.string().min(1, "Please select a subject"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  note: z.string().optional(), 
}).refine((data) => {
  return new Date(data.endDate) > new Date(data.startDate);
}, {
  message: "End date must be after start date",
  path: ["endDate"],
});

export type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  subjects: { id: string; name: string }[];
  onSubmit: (data: BookingFormValues) => void;
}

export default function BookingModal({ subjects = [], onSubmit }: BookingModalProps) {
  const {
    handleSubmit,
    setValue,
    register,
    trigger, 
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-black text-white hover:bg-gray-800 py-6 roounded-xl" disabled={subjects.length === 0} variant="outline">
          {subjects.length === 0 ? "No subjects available" : "Book Service"}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Book a Session</DialogTitle>
        </DialogHeader>

        <form
          className="space-y-5"
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          {/* SUBJECT SELECT */}
          <div className="space-y-2">
            <Label>Subject</Label>
            <Select
              onValueChange={(val) => {
                setValue("subjectId", val);
                trigger("subjectId"); 
              }}
            >
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
              <p className="text-red-500 text-xs">{errors.subjectId.message}</p>
            )}
          </div>

          {/* DATE PICKERS */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date & Time</Label>
              <Input type="datetime-local" {...register("startDate")} />
              {errors.startDate && (
                <p className="text-red-500 text-xs">{errors.startDate.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label>End Date & Time</Label>
              <Input type="datetime-local" {...register("endDate")} />
              {errors.endDate && (
                <p className="text-red-500 text-xs">{errors.endDate.message}</p>
              )}
            </div>
          </div>

          {/* NOTE */}
          <div className="space-y-2">
            <Label>Additional Note (Optional)</Label>
            <Textarea 
              {...register("note")} 
              placeholder="Tell the tutor about your requirements..." 
            />
          </div>

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