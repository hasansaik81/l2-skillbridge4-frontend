



"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { submitReview } from "@/services/review";
import StarRating from "./StarRating";

export default function ReviewForm({ bookingId }: { bookingId: string }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // validation
    if (!comment.trim()) {
      toast.error("Comment is required");
      return;
    }

    if (rating < 1) {
      toast.error("Please give a rating");
      return;
    }

    setLoading(true);

    try {
      const res = await submitReview({
        bookingId,
        rating,
        comment,
      });

      if (res?.success) {
        toast.success("Review submitted successfully 🎉");

        setComment("");
        setRating(5);

        router.refresh();
      } else {
        toast.error(res?.message || "Failed to submit review");
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md border max-w-lg space-y-5"
    >
      <h3 className="text-lg font-bold text-gray-800">
        Give Your Review
      </h3>

      {/* ⭐ STAR RATING (MAIN PART) */}
      <div>
        <label className="block text-sm mb-2 text-gray-600">
          Rating
        </label>

        <StarRating value={rating} onChange={setRating} />

        <p className="text-sm text-gray-500 mt-1">
          Selected: {rating} / 5
        </p>
      </div>

      {/* 💬 COMMENT */}
      <div>
        <label className="block text-sm mb-2 text-gray-600">
          Comment
        </label>

        <textarea
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your experience..."
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 🚀 SUBMIT */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded text-white font-semibold transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
} 