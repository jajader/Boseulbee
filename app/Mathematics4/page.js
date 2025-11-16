import Image from "next/image";
import Link from "next/link";
import KatexSpan from "@/components/KatexSpan";
import articles from "@/components/Mathematics4Articles";


export default function Home() {
  return (
      <div className="py-10 px-10 flex justify-center">
          <div className="flex flex-col items-center gap-7">
              <div className="font-bold  md:text-5xl text-4xl">Mathematics Ⅳ</div>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-7">
                    <div className="flex flex-col gap-7  w-full items-center">
                        {Object.values(articles).map(function(article) {
                            if (article.id % 3 === 1 && article.title !== "") {
                                return <Link key={article.id} href={`/Mathematics4/${article.id}`} className="h-min-50 md:w-100 w-90 bg-white hover:cursor-pointer rounded-xl shadow-2xl p-4">
                                    <div className="font-bold text-xl">{article.title}</div>
                                    <div>{article.date}</div>
                                    <KatexSpan text={article.preview.replaceAll("$$", "$")} className="py-3"/>
                                </Link>
                            }
                        })}
                    </div>
                    <div className="flex flex-col gap-7  w-full items-center">
                        {Object.values(articles).map(function(article) {
                            if (article.id % 3 === 2 && article.title !== "") {
                                return <Link key={article.id} href={`/Mathematics4/${article.id}`} className="h-min-50 md:w-100 w-90 bg-white hover:cursor-pointer rounded-xl shadow-2xl p-4">
                                    <div className="font-bold text-xl">{article.title}</div>
                                    <div>{article.date}</div>
                                    <KatexSpan text={article.preview.replaceAll("$$", "$")} className="py-3"/>
                                </Link>                            }
                        })}
                    </div>
                    <div className="flex flex-col gap-7  w-full items-center">
                        {Object.values(articles).map(function(article) {
                            if (article.id % 3 === 0 && article.title !== "") {
                                return <Link key={article.id} href={`/Mathematics4/${article.id}`} className="h-min-50 md:w-100 w-90 bg-white hover:cursor-pointer rounded-xl shadow-2xl p-4">
                                    <div className="font-bold text-xl">{article.title}</div>
                                    <div>{article.date}</div>
                                    <KatexSpan text={article.preview.replaceAll("$$", "$")} className="py-3"/>
                                </Link>
                            }
                        })}
                    </div>
                </div>
          </div>
      </div>
  );
}
