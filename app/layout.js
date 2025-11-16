import {Geist, Geist_Mono, Noto_Sans_KR} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import 'katex/dist/katex.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Bee",
  description: "Bee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="kr" className="bg-[#ECF4E8]">
      <body className={notoSansKr.className}>
        <div className="">
            <div className="md:px-30 px-10 h-[80px] flex flex-row justify-center items-center gap-1 md:text-[15px] text-[12px] md:gap-7 text-gray-500">
                <Link href="/" className="hover:cursor-pointer hover:bg-gray-100 py-2 md:px-3 px-2 rounded-xl"><p className="text-center">Home</p></Link>
                <Link href="/Mathematics3" className="hover:cursor-pointer hover:bg-gray-100 py-2 md:px-3 px-2 rounded-xl"><p className="text-center">Mathematics Ⅲ</p></Link>
                <Link href="/Mathematics4" className="hover:cursor-pointer hover:bg-gray-100 py-2 md:px-3 px-2 rounded-xl"><p className="text-center">Mathematics Ⅳ</p></Link>
                <Link href="/Analysis" className="hover:cursor-pointer hover:bg-gray-100 py-2 md:px-3 px-2 rounded-xl"><p className="text-center">Analysis</p></Link>
                <Link href="/LinearAlgebra" className="hover:cursor-pointer hover:bg-gray-100 py-2 md:px-3 px-2 rounded-xl"><p className="text-center">Linear Algebra</p></Link>
            </div>
        </div>
      {children}
      </body>
    </html>
  );
}
