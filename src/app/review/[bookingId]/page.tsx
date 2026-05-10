// export default function ReviewPage({
//   params,
// }: {
//   params: { bookingId: string };
// }) {
//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="text-center">
//         <h1>⭐ Write Review</h1>
//         <p>Booking ID: {params.bookingId}</p>
//       </div>
//     </div>
//   );
// }


"use client";

export default function ReviewPage() {
  const handleSubmit = async () => {
    console.log("BUTTON CLICKED");
    alert("Working!");
  };

  return (
    <div>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Submit Review
      </button>
    </div>
  );
}