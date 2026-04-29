import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getUser } from './services/auth'
 
const ALLOWED_ROLE=["ADMIN","TUTOR","STUDENT",];
const PUBLIC_ROUTE=["/login","/register"];
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const {pathname,origin}=request.nextUrl
    const user= await getUser()

    if(PUBLIC_ROUTE.includes(pathname)){
        return NextResponse.next();
    }
    if(!user){
        return NextResponse.redirect(
            new URL(`login?redirect=${pathname}`,origin),
        )
    }

    if(!ALLOWED_ROLE.includes(user.role)){
        return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`,origin)
        );
    }
  return NextResponse.next()
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
// export const config = {
//   matcher: 
//   ["/dashboard/:path*", "/profile/:path*"],
// }


export const config = {
  matcher: [
    "/dashboard", 
    "/dashboard/:path*", 
    "/profile", 
    "/profile/:path*"
  ],
};

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { getUser } from './services/auth'

// // ফাংশনটির নাম অবশ্যই 'proxy' হতে হবে এবং তার আগে 'export' থাকতে হবে
// export async function proxy(request: NextRequest) {
//     const { pathname, origin } = request.nextUrl
//     const user = await getUser()

//     // আপনার বাকি লজিক...
//     const PUBLIC_ROUTE = ["/login", "/register"];
//     if (PUBLIC_ROUTE.includes(pathname)) {
//         return NextResponse.next();
//     }

//     if (!user) {
//         return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, origin))
//     }

//     return NextResponse.next()
// }

// export const config = {
//   matcher: [
//     "/dashboard/:path*", 
//     "/profile/:path*", 
//     "/booking/:path*"
//   ],
// }


// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { getUser } from "./services/auth";

// // ১. এখানে TUTOR যোগ করুন যদি আপনার ইউজার টিউটর হয়
// const ALLOWED_ROLE = ["OWNER", "ADMIN", "SITTER", "TUTOR"]; 
// const PUBLIC_ROUTE = ["/login", "/register"];

// export async function proxy(request: NextRequest) {
//   const { pathname, origin } = request.nextUrl;
//   const user = await getUser();

//   if (PUBLIC_ROUTE.includes(pathname)) {
//     return NextResponse.next();
//   }

//   if (!user) {
//     return NextResponse.redirect(
//       new URL(`/login?redirect=${pathname}`, origin)
//     );
//   }

//   // ২. ইউজার রোল চেক করুন
//   if (!ALLOWED_ROLE.includes(user.role)) {
//     // পারমিশন না থাকলে লগইন এ না পাঠিয়ে হোম পেজে পাঠানো ভালো, নয়তো লুপ হতে পারে
//     return NextResponse.redirect(new URL("/", origin));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   // ৩. এখানে প্রোফাইল পেজটিকেও অবশ্যই অন্তর্ভুক্ত করতে হবে
//   matcher: ["/dashboard/:path*", "/profile/:path*"],
// }; 