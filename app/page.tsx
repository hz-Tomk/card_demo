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

export default function Home() {
  return (
    <main className="p-[110px] font-normal">
      {data.map((item, num) => {
        return (
          <div
            className={
              "relative w-[416px] h-[278px] bg-cover bg-no-repeat mt-[20px] " +
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
    </main>
  );
}
