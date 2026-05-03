


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



export const dynamic = "force-dynamic";

export default function ConfirmPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const bookingId = Array.isArray(searchParams.bookingId)
    ? searchParams.bookingId[0]
    : searchParams.bookingId;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎉 Payment Successful</h1>
      <p>Booking ID: {bookingId}</p>
    </div>
  );
}