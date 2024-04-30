import Image from "next/image";

export const ProgrammingContent = () => {
  return (
    <>
      <div className="rounded-full h-[4px] w-[46px] bg-gradient-to-r from-[#38C1A5] to-[#0891D5]" />
      <div className="text-[#EDEDED] text-[16px] font-bold mt-[32px] mb-[16px]">
        Introduction to programming
      </div>
      <div className="w-[54px] h-[18px] text-[10px] px-[5px] rounded-full border border-[#676767] text-white">
        Beginner
      </div>
      <div className="text-[#676767] text-[12px] mt-[16px] mb-[50px] leading-[14px]">
        This Course covers the most basic concepts in programming using Solidity
        as an example.
      </div>
      <div className="flex items-center text-[12px] text-[#F2F2F2]">
        <div className="flex justify-center items-center h-[14px] mr-[30px]">
          <Image
            src="/icon_clock.png"
            alt=""
            width={14}
            height={14}
            className="mr-[10px]"
          />
          36 Hour
        </div>
        <div className="flex justify-center items-center h-[14px] mr-[40px]">
          <Image
            src="/icon_book.png"
            alt=""
            width={14}
            height={14}
            className="mr-[10px]"
          />
          5 Course
        </div>
        <div className="flex justify-center items-center h-[36px] w-[140px] text-[10px] text-[#9EFA13] bg-[#2A2A2A] rounded-full">
          <Image
            src="/icon_star.png"
            alt=""
            width={20}
            height={20}
            className="mr-[10px]"
          />
          45% COMPLETED
        </div>
      </div>
    </>
  );
};
