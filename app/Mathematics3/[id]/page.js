import Image from "next/image";
import Link from "next/link";
import KatexSpan from "@/components/KatexSpan";
import articles from "@/components/Mathematics3Articles";


export default async function Home({params}) {
    const {id} = await params;
  return (
      <div className="py-10 px-20 flex justify-center">
          <div className="flex flex-col items-center gap-7">
              <div className="font-bold md:text-5xl text-4xl">Mathematics Ⅲ</div>
              <div className="flex flex-col gap-2 bg-white shadow-2xl rounded-xl xl:w-300 md:w-180 w-100 xl:py-20 xl:px-40 md:py-15 md:px-20 py-10 px-10">
                  <div className="font-bold md:text-3xl text-2xl">{articles[id].title}</div>
                  <div className="my-1">{articles[id].date}</div>
                  <KatexSpan text={articles[id].content} className="md:text-[15px] text-[12px]"/>
              </div>
          </div>
      </div>
  );
}
export async function generateStaticParams() {
    return Array.from({ length: 5 }, (_, i) => ({
        id: String(i + 1),
    }));
}