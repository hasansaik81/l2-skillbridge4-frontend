


// export default function ConfirmPage({
//   searchParams,
// }: {
//   searchParams: { bookingId?: string };
// }) {
//   const bookingId = searchParams?.bookingId;

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>🎉 Payment Successful</h1>
//       <p>Booking ID: {bookingId}</p>
//     </div>
//   );
// }



// export const dynamic = "force-dynamic";

// export default function ConfirmPage({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined };
// }) {
//   const bookingId = Array.isArray(searchParams.bookingId)
//     ? searchParams.bookingId[0]
//     : searchParams.bookingId;

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>🎉 Payment Successful</h1>
//       <p>Booking ID: {bookingId}</p>
//     </div>
//   );
// }




// export const dynamic = "force-dynamic";

// export default function ConfirmPage({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined };
// }) {
//   const bookingId = Array.isArray(searchParams.bookingId)
//     ? searchParams.bookingId[0]
//     : searchParams.bookingId;

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
//       <h1 className="text-4xl font-bold text-green-600 mb-4">
//         🎉 Booking Successful
//       </h1>

//       <p className="text-lg text-gray-700 mb-2">Your Booking ID:</p>

//       <div className="text-3xl font-bold text-black bg-white px-6 py-3 rounded-xl shadow-md border">
//         {bookingId}
//       </div>
//     </div>
//   );
// }




// import ReviewList from "@/components/review/ReviewList";

// export default async function ConfirmPage({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined };
// }) {
//   const bookingIdParam = searchParams?.bookingId;

//   const bookingId = Array.isArray(bookingIdParam)
//     ? bookingIdParam[0]
//     : bookingIdParam;

//   const res = await fetch(
//     `http://localhost:5000/api/bookings/${bookingId}`,
//     { cache: "no-store" }
//   );

//   const booking = await res.json();

//   const tutorId = booking?.tutorId; // ✅ FIXED

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
      
//       <h1 className="text-4xl font-bold text-green-600 mb-4">
//         🎉 Booking Successful
//       </h1>

//       <div className="text-3xl font-bold bg-white px-6 py-3 rounded-xl shadow mb-6">
//         {bookingId}
//       </div>

//       {/* ⭐ Write Review Button */}
//       <a
//         href={`/review/${bookingId}`}
//         className="mb-4 px-6 py-2 bg-green-600 text-white rounded-lg"
//       >
//         ⭐ Write a Review
//       </a>

//       {/* 🔥 Go to Tutor (safe) */}
//       {tutorId && (
//         <a
//           href={`/tutor/${tutorId}`}
//           className="mb-6 px-6 py-2 bg-blue-600 text-white rounded-lg"
//         >
//           Go to Tutor Page
//         </a>
//       )}

//       {/* 🔥 Reviews preview (optional) */}
//       {tutorId && (
//         <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow">
//           <h2 className="text-2xl mb-4">Tutor Reviews</h2>
//           <ReviewList tutorId={tutorId} />
//         </div>
//       )}
//     </div>
//   );
// }



// import { getSingleBooking } from "@/services/booking";
// import ReviewList from "@/components/review/ReviewList";
// import { getSingleBooking } from "@/services/booking";

// export default async function ConfirmPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined }; }) {
//   const bookingIdParam = searchParams?.bookingId;

//   const bookingId = Array.isArray(bookingIdParam)
//     ? bookingIdParam[0]
//     : bookingIdParam;

//   // 🔥 service call
//   const response = bookingId
//     ? await getSingleBooking(bookingId)
//     : null;

//   const booking = response?.data; // ⚠️ depends on your API structure
//   const tutorId = booking?.tutorId;

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
      
//       <h1 className="text-4xl font-bold text-green-600 mb-4">
//         🎉 Booking Successful
//       </h1>

//       <div className="text-3xl font-bold bg-white px-6 py-3 rounded-xl shadow mb-6">
//         {bookingId}
//       </div>

//       {tutorId && (
//         <>
//           <a
//             href={`/tutor/${tutorId}`}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg mb-6"
//           >
//             Go to Tutor Page
//           </a>

//           <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow">
//             <h2 className="text-xl font-semibold mb-4">Reviews</h2>
//             <ReviewList tutorId={tutorId} />
//           </div>
//         </>
//       )}
//     </div>
//   );
// }     



import ReviewList from "@/components/review/ReviewList";
import { getSingleBooking } from "@/services/booking";

export const dynamic = "force-dynamic";

export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: Promise<{
    bookingId?: string | string[];
  }>;
}) {
  // ✅ Next.js App Router fix (searchParams is Promise now)
  const params = await searchParams;

  const bookingIdParam = params?.bookingId;

  // 🧩 normalize bookingId
  const bookingId = Array.isArray(bookingIdParam)
    ? bookingIdParam[0]
    : bookingIdParam;

  // 🚨 guard clause
  if (!bookingId) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Invalid booking ID</p>
      </div>
    );
  }

  // 🔥 fetch booking safely
  let booking = null;

  try {
    const response = await getSingleBooking(bookingId);
    booking = response?.data;
  } catch (error) {
    console.error("Error fetching booking:", error);
    booking = null;
  }

  // 🧠 safe tutorId extraction
  const tutorId = booking?.tutorId ?? booking?.tutor?.id ?? null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">

      {/* 🎉 Title */}
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        🎉 Booking Successful
      </h1>

      {/* 🆔 Booking ID */}
      <div className="text-3xl font-bold bg-white px-6 py-3 rounded-xl shadow mb-6">
        {bookingId}
      </div>

      {/* 🔘 Buttons */}
      <div className="flex flex-col gap-3 w-full max-w-sm items-center">

        <a
          href={`/review/${bookingId}`}
          className="w-full text-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          ⭐ Write a Review
        </a>

        {tutorId ? (
          <a
            href={`/tutor/${tutorId}`}
            className="w-full text-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go to Tutor Page
          </a>
        ) : (
          <p className="text-sm text-gray-500">
            Tutor data not available
          </p>
        )}
      </div>

      {/* 📝 Reviews */}
      {tutorId && (
        <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow mt-8">
          <h2 className="text-xl font-semibold mb-4">
            Tutor Reviews
          </h2>

          <ReviewList tutorId={tutorId} />
        </div>
      )}

    </div>
  );
}