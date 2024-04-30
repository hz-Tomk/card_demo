import Image from "next/image";

export const BitcoinContent = () => {
  return (
    <div className="bg-[url('/mask_pic.png')] bg-cover bg-no-repeat w-[380px] h-[238px] pt-[10px] pl-[20px]">
      <div className="rounded-full h-[4px] w-[46px] bg-gradient-to-r from-[#E0AD38] to-[#EB3E1C]" />
      <div className="text-[#EDEDED] text-[16px] font-bold mt-[148px] mb-[16px]">
        What is Bitcoin
      </div>
      <div className="flex justify-end items-center text-[12px] text-[#F2F2F2] h-[14px] mr-[66px] mt-[42px]">
        <Image
          src="/icon_clock.png"
          alt=""
          width={14}
          height={14}
          className="mr-[10px]"
        />
        36 Hour
      </div>
    </div>
  );
};
