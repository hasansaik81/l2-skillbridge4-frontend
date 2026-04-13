// "use client"
// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X } from "lucide-react"; // Shadcn Icons
// import { Button } from "@/components/ui/button"; // Shadcn button

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navigation = [
//     { name: "Home", href: "/" },
//     { name: "Services", href: "/services" },
//     { name: "About", href: "/about-us" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <nav className="bg-white shadow-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/">
//               <span className="text-2xl font-bold text-indigo-600">MyApp</span>
//             </Link>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-6 items-center">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-700 hover:text-indigo-600 font-medium"
//               >
//                 {link.name}
//               </Link>
//             ))}
//            <Button> <Link href={"/login"}>Login</Link></Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex items-center md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <Button className="w-full mt-2">Login</Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };



"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          SkillBridge
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                pathname === link.href
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* <Button>Login</Button> */}
          <Button> <Link href={"/login"}>Login</Link></Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[250px]">
              <div className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base ${
                      pathname === link.href
                        ? "font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Button className="mt-4">Login</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}