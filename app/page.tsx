"use client"; // this is a client component
import React from "react";

import { ProgrammingContent } from "./components/programmingContent";
import { HackathonContent } from "./components/hackathonContent";
import { BasicsContent } from "./components/basicsContent";
import { BitcoinContent } from "./components/bitcoinContent";

const data = [
  {
    name: "programmingContent",
    bgColorImg: "bg-[url('/bg_bottom_gap_color.png')]",
    bgImg: "bg-[url('/bg_bottom_gap.png')]",
    content: <ProgrammingContent />,
  },
  {
    name: "hackathonContent",
    bgColorImg: "bg-[url('/bg_top_gap_color.png')]",
    bgImg: "bg-[url('/bg_top_gap.png')]",
    content: <HackathonContent />,
  },
  {
    name: "basicsContent",
    bgColorImg: "bg-[url('/bg_top_right_gap_color.png')]",
    bgImg: "bg-[url('/bg_top_right_gap.png')]",
    content: <BasicsContent />,
  },
  {
    name: "bitcoinContent",
    bgColorImg: "bg-[url('/bg_4.png')]",
    bgImg: "bg-[#111111] rounded-[36px] pt-[20px] pl-[20px]",
    content: <BitcoinContent />,
  },
];

enum ScrollPos {
  Left = "left",
  Right = "right",
}

export default function Home() {
  const [isRight, setIsRight] = React.useState(false);

  const onChangeScroll = (pos: ScrollPos) => {
    console.log(pos);
    setIsRight(pos === ScrollPos.Right);
    const autoBoxPos = document.getElementsByClassName("cards_scroll")[0];
    autoBoxPos.scrollTo({
      left: pos === ScrollPos.Right ? 2054 : 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative w-[1600px] p-[110px] font-normal">
      <div className="relative w-[1600px] border overflow-hidden">
        <div className="cards_scroll relative w-[1600px] overflow-hidden">
          <div className="flex w-[2054px] pl-[120px] pr-[70px] py-[100px]">
            {data.map((item) => {
              return (
                <div
                  className={
                    "relative w-[416px] h-[278px] bg-cover bg-no-repeat mr-[50px] " +
                    item.bgColorImg
                  }
                  key={item.name}
                >
                  <div
                    className={
                      "card_box absolute w-[416px] h-[278px] pt-[39px] pl-[39px] bg-cover bg-no-repeat " +
                      item.bgImg
                    }
                  >
                    {item.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {isRight ? (
          <div
            className="w-[192px] h-[478px] pt-[215px] pl-[110px] absolute top-0 left-0 bg-gradient-to-r from-[#030303] via-[rgba(3,3,3,0.8)] to-[#03030300]"
            onClick={() => onChangeScroll(ScrollPos.Left)}
          >
            <div className="w-[48px] h-[48px] bg-[url('/icon_left.png')] bg-cover bg-no-repeat rounded-full hover:bg-[url('/icon_left_hover.png')]" />
          </div>
        ) : null}
        {!isRight ? (
          <div
            className="w-[192px] h-[478px] pt-[215px] pr-[110px] absolute top-0 right-0 bg-gradient-to-r from-[#03030300] via-[rgba(3,3,3,0.8)] to-[#030303]"
            onClick={() => onChangeScroll(ScrollPos.Right)}
          >
            <div className="w-[48px] h-[48px] bg-[url('/icon_right.png')] bg-cover bg-no-repeat rounded-full hover:bg-[url('/icon_right_hover.png')]" />
          </div>
        ) : null}
      </div>
    </main>
  );
}
