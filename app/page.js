"use client";
import Image from "next/image";
import number from "@/public/image/number.svg";
import numberWhite from "@/public/image/number-white.svg";
import brand from "@/public/image/brand.svg";
import brandWhite from "@/public/image/brand-white.svg";
import close from "@/public/image/close.svg";
import nav from "@/public/image/nav.svg";
import banner from "@/public/image/banner.svg";
import title from "@/public/image/title.svg";
import MiaoLiHan from "@/public/image/Miao Li-Han.svg";
import KeepItPossible from "@/public/image/Keep-it-possible.svg";
import candidate from "@/public/image/候選人.png";
import activity from "@/public/image/最新活動.svg";
import activity1 from "@/public/image/activity1.png";
import activity2 from "@/public/image/activity2.png";
import activity3 from "@/public/image/activity3.png";
import issue from "@/public/image/issue.svg";
//  小額捐款
import donateText from "@/public/image/donate-text.svg";
import totalText from "@/public/image/total-number-text.svg";
import accumulatedProfitText from "@/public/image/Accumulated-profit-text.svg";
import NT600 from "@/public/image/NT$600-text.svg";
import NT6000 from "@/public/image/NT$6000-text.svg";
import NT60000 from "@/public/image/NT$60000-text.svg";

// 服務信箱
import emailText from "@/public/image/email-text.svg";
import cat from "@/public/image/cat.png";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

const issues = [
  {
    label: "政策一",
    title: "為毛孩子謀福利！推動寵物醫療保障方案",
    content: [
      "設立寵物醫療基金：每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用",
      "提供醫療補助：每隻寵物每年可獲得高達新台幣 20,000元的醫療補助，減輕飼主的經濟壓力",
      "合作動物醫院：目前已有和超過 200 家動物醫院進行初步的合作討論",
    ],
  },
  {
    label: "政策二",
    title: "打造休閒天堂！推廣寵物休閒與娛樂場所",
    content: [
      "建立寵物公園：每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。",
      "推廣寵物友善商家：鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫",
      "舉辦寵物活動和工作坊：與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等",
    ],
  },
  {
    label: "政策三",
    title: "推廣寵物飼養教育，讓愛更加專業",
    content: [
      "建立寵物飼養教育中心：每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。",
      "推廣寵物飼養課程：與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。",
      "製作教育資料：出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識",
    ],
  },
];
const inputs = [
  { type: "text", placeholder: "您的姓名" },
  { type: "email", placeholder: "您的Email" },
  { type: "number", placeholder: "您的手機" },
];

const donateCollection = [
  { width: 97, title: "喵星人之友", image: NT600, content: "已有 9957 人贊助" },
  { width: 110, title: "喵星大使", image: NT6000, content: "已有 2000 人贊助" },
  {
    width: 137,
    title: "喵星傳奇",
    image: NT60000,
    content: "已有 9957 人贊助",
  },
];
// TODO 選單超連結、選單轉場效果
export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [toDonate, setToDonate] = useState(false);

  return (
    <>
      <header
        className={`fixed w-screen h-[65px] flex justify-between py-[14px] px-[20px]  ${openMenu ? "bg-brand" : "bg-white"
          } z-[1]`}
      >
        {/* logo */}
        <div className="flex gap-[12px]">
          <Image
            src={openMenu ? numberWhite : number}
            alt="3號"
            width={40}
            height={40}
          />
          <Image
            src={openMenu ? brandWhite : brand}
            alt="喵立瀚"
            width={100}
            height={30}
          />
        </div>
        {/* 列表 */}
        <nav className="absolute top-[125%] right-5 text-right">
          <ul className={`space-y-[30px]  ${openMenu ? "block" : "hidden"}`}>
            <li>
              <a className="text-2xl">候選人主張</a>
            </li>
            <li>
              <a className="text-2xl">最新活動</a>
            </li>
            <li>
              <a className="text-2xl">政策議題</a>
            </li>
            <li>
              <a className="text-2xl">服務信箱</a>
            </li>
            <li className="flex px-[20px] py-[11px] gap-[10px] w-[160px] rounded-[30px] bg-white text-brand">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M15.5 1.80103C7.7446 1.80103 1.4375 8.10813 1.4375 15.8635C1.4375 23.6189 7.7446 29.926 15.5 29.926C23.2554 29.926 29.5625 23.6189 29.5625 15.8635C29.5625 8.10813 23.2554 1.80103 15.5 1.80103ZM15.5 3.67603C22.2421 3.67603 27.6948 9.12145 27.6948 15.8635C27.6948 22.6056 22.2421 28.0583 15.5 28.0583C8.75793 28.0583 3.3125 22.6056 3.3125 15.8635C3.3125 9.12145 8.75793 3.67603 15.5 3.67603ZM15.4872 8.36902C15.2395 8.37338 15.0036 8.47558 14.831 8.6533C14.6585 8.83101 14.5632 9.0698 14.5662 9.3175V10.1067C13.0524 10.3907 11.7573 11.3654 11.7573 13.0547C11.7573 14.2266 12.2856 15.1744 12.9951 15.7262C13.7046 16.278 14.5057 16.5227 15.2089 16.7571C15.912 16.9915 16.5189 17.2155 16.8641 17.484C17.2093 17.7525 17.375 17.9784 17.375 18.6815C17.375 20.244 13.6323 20.244 13.6323 18.6815C13.6351 18.5567 13.6129 18.4325 13.567 18.3163C13.5212 18.2002 13.4525 18.0943 13.3652 18.005C13.2779 17.9158 13.1736 17.8448 13.0585 17.7964C12.9434 17.7479 12.8197 17.723 12.6948 17.723C12.5699 17.723 12.4463 17.7479 12.3312 17.7964C12.216 17.8448 12.1118 17.9158 12.0244 18.005C11.9371 18.0943 11.8685 18.2002 11.8226 18.3163C11.7768 18.4325 11.7546 18.5567 11.7573 18.6815C11.7573 20.3695 13.0536 21.3461 14.5662 21.6313V22.4169C14.5634 22.5417 14.5856 22.6659 14.6315 22.7821C14.6773 22.8982 14.7459 23.0041 14.8333 23.0933C14.9206 23.1826 15.0249 23.2536 15.14 23.302C15.2551 23.3504 15.3788 23.3754 15.5037 23.3754C15.6286 23.3754 15.7522 23.3504 15.8673 23.302C15.9824 23.2536 16.0867 23.1826 16.174 23.0933C16.2614 23.0041 16.33 22.8982 16.3759 22.7821C16.4217 22.6659 16.4439 22.5417 16.4412 22.4169V21.6313C17.954 21.3462 19.2518 20.3697 19.2518 18.6815C19.2518 17.5096 18.7217 16.5618 18.0122 16.01C17.3027 15.4582 16.5016 15.2117 15.7985 14.9773C15.0953 14.7429 14.4884 14.5207 14.1432 14.2522C13.798 13.9837 13.6323 13.7578 13.6323 13.0547C13.6323 11.4922 17.375 11.4922 17.375 13.0547C17.375 13.3036 17.4739 13.5423 17.6499 13.7182C17.8258 13.8942 18.0645 13.9931 18.3134 13.9931C18.5623 13.9931 18.801 13.8942 18.977 13.7182C19.153 13.5423 19.2518 13.3036 19.2518 13.0547C19.2518 11.3679 17.9536 10.3942 16.4412 10.1085V9.3175C16.4426 9.19207 16.4189 9.06762 16.3714 8.95152C16.324 8.83541 16.2536 8.73002 16.1647 8.64158C16.0757 8.55313 15.9699 8.48344 15.8536 8.43662C15.7372 8.38981 15.6126 8.36682 15.4872 8.36902Z"
                  fill="currentColor"
                />
              </svg>
              <a className="text-2xl text-brand">小額捐款</a>
            </li>
          </ul>
        </nav>
        {/* 漢堡icon */}
        <Image
          src={openMenu ? close : nav}
          alt="選單"
          onClick={() => setOpenMenu(!openMenu)}
        />
      </header>
      <div className="w-screen absolute top-[65px]">
        {/* 候選人主張 */}
        <section className=" bg-gray-default pt-[30px] overflow-hidden">
          <div className="px-5 mb-[200px]">
            <div className=" ">
              <div className=" h-[30px] ml-5 mr-7 flex justify-center">
                <Image
                  src={title}
                  alt="2023 THE F2E 立委競選"
                  height={25}
                  width={295}
                />
              </div>
              <div className="h-[120px] mt-[10px]">
                <Image
                  src={banner}
                  alt="從喵的眼中看見台灣"
                  width={387}
                  height={121}
                />
              </div>
            </div>
            <div className="relative  mt-[25px]">
              <div className=" w-full flex">
                <Image
                  src={KeepItPossible}
                  alt="KeepItPossible"
                  width={30}
                  height={335}
                />
                <div className="relative w-[290px] h-[210px]">
                  <Image src={MiaoLiHan} alt="喵立翰文字" fill={true} />
                </div>
              </div>
              <Image
                src={candidate}
                alt="候選人"
                width={242}
                height={315}
                className="absolute left-[136px] top-[-66px]"
              />
              <div className="absolute top-[220px] ml-9 border-[3px] border-solid border-brand px-[15px] pt-[10px] pb-[18px] rounded-tl-[80px] rounded-br-[80px] bg-white">
                <h5 className="text-center">
                  護航台灣幸福經濟
                  <br />
                  從照顧每一隻貓咪開始
                </h5>
                <p className="text-base">
                  我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
                  GDP 經濟帶來巨大效益。
                  <br />
                  <br />
                  因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 最新活動 */}
        <section className="bg-gray-default pb-[30px]">
          <div className="flex justify-center mb-5">
            <Image src={activity} alt="最新活動" width={140} height={56} />
          </div>
          <Carousel />
        </section>
        {/* 政策議題 */}
        <section className="bg-brand pt-5 pb-[50px] px-[30px]">
          <div className="container">
            <div>
              <Image
                src={issue}
                alt="議題"
                className="mx-auto"
                width={139}
                height={33}
              />
            </div>
            <div className="mt-[30px] grid gap-5 md:grid-flow-col">
              {issues.map(({ label, title, content }) => (
                <div
                  className="bg-[#fafafa] rounded-[8px] p-[15px]"
                  key={label}
                >
                  <span className="text-xl bg-green-Secondary text-[#FAFAFA] rounded-tl-[8px] rounded-br-[8px] px-[10px] py-[5px] ">
                    {label}
                  </span>
                  <h5 className="my-[10px]">{title}</h5>
                  <ol className="text-base list-decimal list-inside">
                    <li>{content[0]}</li>
                    <li>{content[1]}</li>
                    <li>{content[2]}</li>
                  </ol>
                </div>
              ))}
              {/*  */}
            </div>
          </div>
        </section>
        {/* 小額捐款 */}
        <section className="bg-donate bg-cover bg-center px-5 py-[45px] h-[500px]">
          <div className="container bg-[#fafafa] h-full px-[30px] py-[60px]  rounded-[80px]">
            <div
              className={`flex-col items-center ${toDonate ? "hidden" : "flex"
                }`}
            >
              <Image
                src={donateText}
                alt="小額捐款"
                width={140}
                height={35}
                className="mb-5"
              />
              <h5 className="mb-[15px] px-[60px]">
                您的小筆捐款，是每隻毛孩未來的大大動力！
              </h5>
              <Image
                src={accumulatedProfitText}
                alt="累計金額"
                width={125}
                height={24}
              />
              <Image
                src={totalText}
                alt="金額數字"
                width={307}
                height={30}
                className="mt-[15px] mb-5"
              />
              <button
                className="flex px-[20px] py-[15px] gap-[10px] w-[180px] rounded-[100px] bg-brand text-[#fafafa]"
                onClick={() => setToDonate(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M15.5 1.80103C7.7446 1.80103 1.4375 8.10813 1.4375 15.8635C1.4375 23.6189 7.7446 29.926 15.5 29.926C23.2554 29.926 29.5625 23.6189 29.5625 15.8635C29.5625 8.10813 23.2554 1.80103 15.5 1.80103ZM15.5 3.67603C22.2421 3.67603 27.6948 9.12145 27.6948 15.8635C27.6948 22.6056 22.2421 28.0583 15.5 28.0583C8.75793 28.0583 3.3125 22.6056 3.3125 15.8635C3.3125 9.12145 8.75793 3.67603 15.5 3.67603ZM15.4872 8.36902C15.2395 8.37338 15.0036 8.47558 14.831 8.6533C14.6585 8.83101 14.5632 9.0698 14.5662 9.3175V10.1067C13.0524 10.3907 11.7573 11.3654 11.7573 13.0547C11.7573 14.2266 12.2856 15.1744 12.9951 15.7262C13.7046 16.278 14.5057 16.5227 15.2089 16.7571C15.912 16.9915 16.5189 17.2155 16.8641 17.484C17.2093 17.7525 17.375 17.9784 17.375 18.6815C17.375 20.244 13.6323 20.244 13.6323 18.6815C13.6351 18.5567 13.6129 18.4325 13.567 18.3163C13.5212 18.2002 13.4525 18.0943 13.3652 18.005C13.2779 17.9158 13.1736 17.8448 13.0585 17.7964C12.9434 17.7479 12.8197 17.723 12.6948 17.723C12.5699 17.723 12.4463 17.7479 12.3312 17.7964C12.216 17.8448 12.1118 17.9158 12.0244 18.005C11.9371 18.0943 11.8685 18.2002 11.8226 18.3163C11.7768 18.4325 11.7546 18.5567 11.7573 18.6815C11.7573 20.3695 13.0536 21.3461 14.5662 21.6313V22.4169C14.5634 22.5417 14.5856 22.6659 14.6315 22.7821C14.6773 22.8982 14.7459 23.0041 14.8333 23.0933C14.9206 23.1826 15.0249 23.2536 15.14 23.302C15.2551 23.3504 15.3788 23.3754 15.5037 23.3754C15.6286 23.3754 15.7522 23.3504 15.8673 23.302C15.9824 23.2536 16.0867 23.1826 16.174 23.0933C16.2614 23.0041 16.33 22.8982 16.3759 22.7821C16.4217 22.6659 16.4439 22.5417 16.4412 22.4169V21.6313C17.954 21.3462 19.2518 20.3697 19.2518 18.6815C19.2518 17.5096 18.7217 16.5618 18.0122 16.01C17.3027 15.4582 16.5016 15.2117 15.7985 14.9773C15.0953 14.7429 14.4884 14.5207 14.1432 14.2522C13.798 13.9837 13.6323 13.7578 13.6323 13.0547C13.6323 11.4922 17.375 11.4922 17.375 13.0547C17.375 13.3036 17.4739 13.5423 17.6499 13.7182C17.8258 13.8942 18.0645 13.9931 18.3134 13.9931C18.5623 13.9931 18.801 13.8942 18.977 13.7182C19.153 13.5423 19.2518 13.3036 19.2518 13.0547C19.2518 11.3679 17.9536 10.3942 16.4412 10.1085V9.3175C16.4426 9.19207 16.4189 9.06762 16.3714 8.95152C16.324 8.83541 16.2536 8.73002 16.1647 8.64158C16.0757 8.55313 15.9699 8.48344 15.8536 8.43662C15.7372 8.38981 15.6126 8.36682 15.4872 8.36902Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-2xl text-[#fafafa]">小額捐款</span>
              </button>
            </div>
            <form
              className={`flex-col items-center ${toDonate ? "flex" : "hidden"
                }`}
            >
              <h5>選擇捐款方案</h5>
              <div className="grid gap-[10px] grid-cols-2">
                {donateCollection.map(({ title, image, content, width }) => (
                  <>
                    <input
                      type="radio"
                      id="600"
                      name="donation"
                      value={600}
                      className="hidden"
                    />
                    <label
                      htmlFor="600"
                      className="flex flex-col rounded-[8px] border-[2px] border-[#a9a9a9] outline-none border-solid gap-[5px] p-[10px] items-center"
                    >
                      <h6>{title}</h6>
                      <Image
                        src={image}
                        alt="NT$600"
                        width={width}
                        height={84}
                      />
                      <span className="text-[#999999] text-sm">{content}</span>
                    </label>
                  </>
                ))}
                <div className="rounded-[8px] border-[2px] border-[#a9a9a9] outline-none border-solid  p-[10px] flex flex-col ">
                  <h6>自訂捐款金額</h6>
                  <input type="number" placeholder="請輸入捐款金額" />
                </div>
              </div>
              <div>
                <button>返回</button>
                <button>我要捐款</button>
              </div>
            </form>
          </div>
        </section>
        {/* 服務信箱 */}
        <section className="bg-gray-default px-5 pt-5">
          <div className="container">
            <div className="flex flex-col items-center">
              <Image src={emailText} alt="民眾服務信箱" />
              <h5 className="mt-5 mb-[10px]">您的聲音，我們的行動！</h5>
              <p className="text-base">
                親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！
              </p>
            </div>
            <form className="px-[10px] mt-[15px] flex flex-col gap-[10px] items-center">
              {inputs.map(({ type, placeholder }) => (
                <input
                  placeholder={placeholder}
                  type={type}
                  className="w-full px-3 py-[10px] rounded-[8px] border border-solid border-[#B9B9B9] focus:border-[#FF3B3B] outline-none placeholder:text-[#B9B9B9]"
                  key={placeholder}
                />
              ))}
              <textarea
                placeholder="您的建言"
                className="w-full h-[100px] border border-solid border-[#B9B9B9] focus:border-[#FF3B3B] outline-none resize-y px-3 py-[10px] placeholder:text-[#B9B9B9] rounded-[8px]"
              ></textarea>
              <button className="w-[140px] h-[60px] rounded-[100px] bg-brand text-[#fafafa] text-2xl px-[30px] py-[15px]">
                送出意見
              </button>
            </form>
            <div className="relative h-[180px] bottom-[-60px]">
              <Image src={cat} alt="貓" fill={true} />
            </div>
          </div>
        </section>
        <footer className="bg-brand">
          <div className="container pt-[30px] pb-[15px] px-[30px]">
            <div className="hidden"></div>
            <div className="flex flex-wrap justify-center mb-[60px]">
              <h6 className="w-full text-center mb-[10px] text-yellow-Secondary text-sm">
                Menu
              </h6>
              <ul className="text-center mr-[25px] text-base text-[#fafafa]">
                <ol>
                  <a>首頁</a>
                </ol>
                <ol>
                  <a>最新活動</a>
                </ol>
                <ol>
                  <a>民眾服務信箱</a>
                </ol>
              </ul>
              <ul className="text-center ml-[25px] text-base text-[#fafafa]">
                <ol>
                  <a>候選人主張</a>
                </ol>
                <ol>
                  <a>政策議題</a>
                </ol>
                <ol>
                  <a>小額捐款</a>
                </ol>
              </ul>
            </div>
            <div>
              <h6 className="w-full text-center mb-[10px] text-yellow-Secondary text-sm">
                Office information
              </h6>
              <ul className="mr-[25px] text-base text-[#fafafa]">
                <ol>地址：台北市喵星區毛茸茸大道88號喵喵大樓3樓</ol>
                <ol>電話：(02) 888-5678 </ol>
                <ol>郵件：meowoffice@linmeow.tw</ol>
              </ul>
            </div>
            <div className="text-sm text-gray-500 mt-5 mb-[15px] text-center">
              版權聲明：© 2023 喵立翰（Miao Li-Han） 版權所有。
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

const pagination = {
  clickable: true,
};

export const Carousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      freeMode={true}
      pagination={pagination}
      modules={[FreeMode, Pagination]}
      className=""
    >
      <SwiperSlide>
        <div className="flex w-[300px] flex-col items-center">
          <div className="w-full h-[200px] relative">
            <Image src={activity1} fill={true} alt="活動" />
          </div>
          <div className="bg-white h-[168px] px-[10px] py-[15px]">
            <h5>參與台北寵物論壇 爭取貓咪友善環境</h5>
            <p className="text-base text-ellipsis line-clamp-3">
              炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
              VIP 休憩空間。
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex w-[300px] flex-col items-center">
          <div className="w-full h-[200px] relative">
            <Image src={activity2} fill={true} alt="活動" />
          </div>
          <div className="bg-white h-[168px] px-[10px] py-[15px]">
            <h5>收容所模特兒大比拼！</h5>
            <p className="text-base overflow-hidden text-ellipsis line-clamp-3">
              今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex w-[300px] flex-col items-center">
          <div className="w-full h-[200px] relative">
            <Image src={activity3} fill={true} alt="活動" />
          </div>
          <div className="bg-white h-[168px] px-[10px] py-[15px]">
            <h5>掃街模式開啟！帶著你的貓耳，來和我一起走！</h5>
            <p className="text-base line-clamp-3 overflow-hidden text-ellipsis">
              街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
