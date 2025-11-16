import Image from "next/image";
import Link from "next/link";
import M3articles from "@/components/Mathematics3Articles";
import M4articles from "@/components/Mathematics4Articles";
import Larticles from "@/components/LinearAlgebraArticles";
import Aarticles from "@/components/AnalysisArticles";
import KatexSpan from "@/components/KatexSpan";

export default function Home() {
  let cnt = 1;
  const articles = {};
  for (let i=1; i<=Object.keys(M3articles).length; i++) {
      articles[cnt] = M3articles[i];
      articles[cnt].realid = cnt;
      cnt++;
  }
  for (let i=1; i<=Object.keys(M4articles).length; i++) {
    articles[cnt] = M4articles[i];
    articles[cnt].realid = cnt;
    cnt++;
  }
  for (let i=1; i<=Object.keys(Larticles).length; i++) {
    articles[cnt] = Larticles[i];
    articles[cnt].realid = cnt;
    cnt++;
  }
  for (let i=1; i<=Object.keys(Aarticles).length; i++) {
    articles[cnt] = Aarticles[i];
    articles[cnt].realid = cnt;
    cnt++;
  }

  return (
    <div className="bg-[#ECF4E8]">
      <div className="py-10 px-10 flex justify-center">
        <div className="flex flex-col items-center gap-7">
          <div className="font-bold md:text-5xl text-4xl">Home</div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-7">
            <div className="flex flex-col gap-7 w-full items-center">
              {Object.values(articles).map(function(article) {
                if (article.realid % 3 === 1 && article.title !== "") {
                  return <Link key={article.realid} href={`/${article.cat}/${article.id}`} className="h-min-50 md:w-100 w-90 bg-white hover:cursor-pointer rounded-xl shadow-2xl p-4">
                    <div className="font-bold text-xl">{article.title}</div>
                    <div>{article.date}</div>
                    <KatexSpan text={article.preview.replaceAll("$$", "$")} className="py-3"/>
                  </Link>
                }
              })}
            </div>
            <div className="flex flex-col gap-7 w-full items-center">
              {Object.values(articles).map(function(article) {
                if (article.realid % 3 === 2 && article.title !== "") {
                  return <Link key={article.realid} href={`/${article.cat}/${article.id}`} className="h-min-50 md:w-100 w-90 bg-white hover:cursor-pointer rounded-xl shadow-2xl p-4">
                    <div className="font-bold text-xl">{article.title}</div>
                    <div>{article.date}</div>
                    <KatexSpan text={article.preview.replaceAll("$$", "$")} className="py-3"/>
                  </Link>
                }
              })}
            </div>
            <div className="flex flex-col gap-7 w-full items-center">
              {Object.values(articles).map(function(article) {
                if (article.realid % 3 === 0 && article.title !== "") {
                  return <Link key={article.realid} href={`/${article.cat}/${article.id}`} className="h-min-50 md:w-100 w-90 bg-white hover:cursor-pointer rounded-xl shadow-2xl p-4">
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
    </div>
  );
}
