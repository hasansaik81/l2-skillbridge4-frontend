"use server"

import { cookies } from "next/headers";



export const createBooking = async (bookingData: any) => {
  try {
    const store = await cookies();
    const token = store.get("token")?.value;

    if (!token) {
      return {
        success: false,
        message: "Not Logged In"
      };
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/bookings/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify(bookingData),
      }
    );

    const result = await res.json();
    return result;

  } catch (error) {
    console.error(error);
  }
};


export const getSingleBooking = async (bookingId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/bookings/${bookingId}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch booking");
  }

  return res.json();
};