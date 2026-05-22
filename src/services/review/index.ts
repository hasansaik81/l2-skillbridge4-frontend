"use server";



export const submitReview = async (reviewData: {

  bookingId: string;
  rating: number;
  comment: string;
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/reviews`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // ✅ IMPORTANT (cookie auth fix)
        body: JSON.stringify(reviewData),
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Failed to submit review");
    }

    return result;
  } catch (error: any) {
    console.error("Review Error:", error.message);
    throw error;
  }
};


// src/services/review.ts

export const getTutorReviews = async (tutorId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/reviews/tutor/${tutorId}`, {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return res.json();
};









