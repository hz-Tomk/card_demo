import Image from "next/image";

const tags = ["All Tracks", "Solidity", "ZK"];
const data = [
  {
    name: "Signup",
    content: "4/15 - 6/15",
  },
  {
    name: "Event",
    content: "6/15 - 7/15",
  },
  {
    name: "Grant size",
    content: "200k",
  },
];

export const HackathonContent = () => {
  return (
    <>
      <div className="text-[#EDEDED] text-[16px] font-bold mb-[16px]">
        Moonshot 2023 Summer Hackathon
      </div>
      <div className="flex">
        {tags.map((tag) => {
          return (
            <div
              className="text-[10px] px-[6px] py-[2px] rounded-full border border-[#676767] text-white mr-[14px]"
              key={tag}
            >
              {tag}
            </div>
          );
        })}
      </div>

      <div className="pr-[39px] mt-[60px]">
        {data.map((item) => {
          return (
            <div
              className="flex justify-between items-center mt-[8px] text-[12px] text-[#676767] border-b border-[#676767]"
              key={item.name}
            >
              <div>{item.name}</div>
              <div className="text-[#EDEDED]">{item.content}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
