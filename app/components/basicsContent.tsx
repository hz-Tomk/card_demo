import Image from "next/image";

export const BasicsContent = () => {
  return (
    <>
      <div className="rounded-full h-[4px] w-[46px] bg-gradient-to-r from-[#D9E313] to-[#3CBC34]" />
      <div className="text-[#EDEDED] text-[16px] font-bold mt-[32px] mb-[16px]">
        Web 3.0 Programming Basics
      </div>
      <div className="w-[54px] h-[18px] text-[10px] px-[5px] rounded-full border border-[#676767] text-white">
        Beginner
      </div>
      <div className="text-[#676767] text-[12px] mt-[16px] mb-[36px] leading-[14px]">
        Basic concepts in programming of Solidity.Topics
        include:variables,functions,flow control,error handing,data structure.
      </div>
      <div className="flex items-center text-[12px] text-[#F2F2F2]">
        <div className="flex justify-center items-center h-[14px] mr-[20px]">
          <Image
            src="/icon_clock.png"
            alt=""
            width={14}
            height={14}
            className="mr-[10px]"
          />
          36 Hour
        </div>
        <div className="flex justify-center items-center h-[14px] mr-[30px]">
          <Image
            src="/icon_book.png"
            alt=""
            width={14}
            height={14}
            className="mr-[10px]"
          />
          5 Course
        </div>
      </div>
    </>
  );
};
