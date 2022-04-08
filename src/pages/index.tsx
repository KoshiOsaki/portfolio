import type { NextPage } from "next";
import { Meta } from "../components/templates/Meta";
import { Layout } from "../components/templates/Layout";
import { Container } from "../components/templates/Container";
import { useState } from "react";

import { SkillList } from "../components/atoms/SkillList";
import { WorkCard } from "../components/molecules/WorkCard";

const Home: NextPage = () => {
  const [openTab, setOpenTab] = useState(1);

  const overlay: any = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Layout>
      <Meta />
      <Container>
        <>
          <div className="flex flex-wrap">
            <div className="w-full">
              <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                role="tablist"
              >
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 1
                        ? "text-white bg-pink-600"
                        : "text-pink-600 bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Works
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 2
                        ? "text-white bg-pink-600"
                        : "text-pink-600 bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    About
                  </a>
                </li>
              </ul>
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="px-4 py-5 flex-auto">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      <div className="grid grid-cols-3 sm:block ">
                        <WorkCard
                          id="fsLP"
                          img="/futuresearch.png"
                          title="株式会社FUTUREWOODS サービスページ"
                          link="https://www.future-search.jp/"
                          skill="Next.js, TypeScript, React, TailwindCSS"
                        >
                          <p className="leading-relaxed  mt-2">
                            インターン生3人での共同開発。初の業務だったためコミットコメントや命名法、コンポーネント粒度など先輩のコードを見て真似した。レスポンシブ対応を特に意識して制作した。
                          </p>
                        </WorkCard>
                        <WorkCard
                          id="fsHP"
                          img="/futurewoods.png"
                          title="株式会社FUTUREWOODS リクルートページ"
                          link="https://www.futurewoods.co.jp/"
                          skill="Next.js, TypeScript, React, TailwindCSS"
                        >
                          <p className="leading-relaxed  mt-2">
                            インターン生3人での共同開発。Webデザイナーさんが用意した概形のデザインをうまくcssを用いてコード化した。動きがうるさすぎず、かつ飽きないといった程よいアニメーションとモダンなデザインが特徴。
                          </p>
                        </WorkCard>
                        <WorkCard
                          id="cocktail"
                          img="/search.png"
                          title="カクテル検索くん"
                          link="https://marceaucocktail.vercel.app/cocktailread"
                          skill="Next.js, TypeScript, React, Firebase"
                        >
                          <p className="leading-relaxed  mt-2">
                            バイト先のバーのレシピが多すぎること、オリジナルカクテルをバイトメンバーで共有したいと思ったことをきっかけに個人的に制作。材料名で検索できるようにしたのが工夫した点。これから機能を追加していく予定。
                            <br />
                            リンク先は閲覧専用ページ。
                          </p>
                        </WorkCard>
                        <WorkCard
                          id="syukkou"
                          img="/syukkou.png"
                          title="自動出校bot"
                          link="video"
                          skill="Node.js, Puppeteer"
                        >
                          <p className="leading-relaxed  mt-2">
                            研究室の出校フォーム入力が面倒なので制作。インターンでスクレイピングに使用していたPuppeteerを用いた。日付、時間を自動入力してくれる。
                          </p>
                        </WorkCard>
                        <WorkCard
                          id="nosight"
                          img="/nosight.png"
                          title="農Sightダッシュボード"
                          skill="Next.js, TypeScript, React, Firebase"
                          link="none"
                        >
                          <p className="leading-relaxed  mt-2">
                            友人との共同開発(受託)にて、農業DXのためのサービスの業務用ダッシュボードを制作。チャット機能やデータのグラフ化等を実装。ユーザーがどういった機能を求めているかを聞きながら現在も改良中。
                          </p>
                        </WorkCard>
                        {/* <WorkCard
                          img=""
                          title="商品レビューサイト"
                          href="https://review-products-teal.vercel.app/"
                          skill="Nest.js, Next.js, React, PostgresSQL"
                        >
                          <p className="leading-relaxed text-sm mt-2">
                            バックエンド(Nest.js)の練習のために作成。JWTを用いた認証機能や、Pipeを用いたバリデーション、jestでのメソッドテストなど。実用的ではないです。
                          </p>
                        </WorkCard> */}
                      </div>
                    </div>
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <div className="flex flex-wrap">
                        <div className="inline-block w-[40%]">
                          <img
                            className="w-[300px] h-auto mx-auto mt-5"
                            src="/koshi.jpg"
                            alt=""
                          />
                        </div>
                        <div className="w-[60%]">
                          <p className="text-lg font-bold p-1 m-1">Profile</p>
                          <dl className="flex flex-wrap ">
                            <dt className="w-[30%]">名前</dt>
                            <dd className="w-[70%]">大崎 向士</dd>
                            <dt className="w-[30%]">所属</dt>
                            <dd className="w-[70%]">
                              東京工業大学大学院 生命理工学コース
                            </dd>
                            <dt className="w-[30%]">研究室</dt>
                            <dd className="w-[70%]">
                              <a
                                className="underline hover:text-blue-600"
                                target="_blank"
                                rel="noreferrer"
                                href="http://www.neobio.bio.titech.ac.jp/ja/"
                              >
                                小畠・三重研究室
                              </a>
                            </dd>
                            <dt className="w-[30%]">趣味</dt>
                            <dd className="w-[70%]">
                              バイク、サッカー、音楽を聴くこと
                            </dd>
                          </dl>
                          <div>
                            <p className="text-lg font-bold p-1 m-1">Skills</p>
                            <dl className="flex flex-wrap ">
                              <SkillList
                                lang="JavaScript/TypeScript"
                                star="4"
                              />
                              <SkillList lang="React/Next.js" star="5" />
                              <SkillList lang="Node.js/Nest.js" star="4" />
                              <SkillList lang="HTML/CSS" star="5" />
                              <SkillList lang="SQL" star="3" />
                              <SkillList lang="Python" star="3" />
                              <SkillList lang="Docker, Git" star="4" />
                            </dl>
                            <br />
                            <dt className="w-[40%]">GitHub</dt>
                            <dd className="w-[60%]">
                              <a
                                href="https://github.com/KoshiOsaki"
                                target="_blank"
                                rel="noreferrer"
                                className="underline hover:text-blue-600"
                              >
                                {" "}
                                https://github.com/KoshiOsaki
                              </a>
                            </dd>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Container>
    </Layout>
  );
};

export default Home;
