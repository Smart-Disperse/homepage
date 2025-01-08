import React from "react";

import iconlogo from "../assets/herosection svg/iconlogo.svg";
import icon1 from "../assets/herosection svg/icon1.svg";
import icon2 from "../assets/herosection svg/icon2.svg";
import icon3 from "../assets/herosection svg/icon3.svg";
import icon4 from "../assets/herosection svg/icon4.svg";
import icon5 from "../assets/herosection svg/icon5.svg";
import icon6 from "../assets/herosection svg/icon6.svg";
import Image from "next/image";

const ConnectorImage = () => {
  return (
    <div className="relative bg-transparent w-[90%] xs:w-[90%] sm:w-[80%] md:w-[74%] lg:w-[70%] h-[600px] my-2 sm:my-4 md:my-6 bw:my-9 lg:my-10 mx-auto">
      {/* line to connect icons */}
      <div className="absolute left-[calc(27%+45px)] top-[calc(10%+90px)] h-[calc(75%-90px)] w-[3px] bg-[#49494ACC]"></div>
      <div className="absolute left-[calc(67%+45px)] top-[calc(15%+90px)] h-[calc(75%-90px)] w-[3px] bg-[#49494ACC]"></div>
      <div className="absolute left-[calc(7%+90px)] top-[calc(47%+45px)] w-[calc(40%-90px)] h-[3px] bg-[#49494ACC]"></div>
      <div className="absolute left-[calc(47%+90px)] top-[calc(47%+45px)] w-[calc(40%-90px)] h-[3px] bg-[#49494ACC]"></div>


      {/* holder-left */}
      <div className="absolute top-[calc(47%+18px)] 2xs:top-[calc(47%+20px)] sm:top-[calc(47%+24px)] md:top-[calc(47%+29px)] bw:top-[calc(47%+33px)] lg:top-[calc(47%+35px)] left-[calc(47%-6px)] sm:left-[calc(47%-7px)] md:left-[calc(47%-8px)] lg:left-[calc(47%-10px)] w-[6px] h-[12px] sm:w-[7px] sm:h-[14px] md:w-[8px] md:h-[16px] lg:w-[10px] lg:h-[20px] overflow-hidden z-30">
        <div className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px] lg:w-[20px] lg:h-[20px] rounded-full bg-gradient-to-br from-[#000000] via-[#4A4A4A] to-[#000000]"></div>
      </div>
      {/* holder-right */}
      <div className="absolute top-[calc(47%+18px)] 2xs:top-[calc(47%+20px)] sm:top-[calc(47%+24px)] md:top-[calc(47%+29px)] bw:top-[calc(47%+33px)] lg:top-[calc(47%+35px)] left-[calc(47%+45px)] 2xs:left-[calc(47%+50px)] sm:left-[calc(47%+60px)] md:left-[calc(47%+70px)] bw:left-[calc(47%+80px)] lg:left-[calc(47%+90px)] w-[5.8px] h-[12px] sm:-[7px] sm:h-[14px] md:w-[8px] md:h-[16px] lg:w-[10px] lg:h-[20px] overflow-hidden z-30 rotate-180">
        <div className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px] lg:w-[20px] lg:h-[20px] rounded-full bg-gradient-to-br from-[#000000] via-[#4A4A4A] to-[#000000]"></div>
      </div>

      {/* icon1 to logo */}
      {/* <div className="flow-line1 absolute"></div> */}
      {/* icon2 to logo */}
      {/* <div className="flow-line2 absolute"></div> */}
      {/* icon3 to logo */}
      {/* <div className="flow-line3 absolute"></div> */}
      {/* icon4 to logo */}
      {/* <div className="flow-line4 absolute"></div> */}
      {/* icon5 to logo */}
      {/* <div className="flow-line5 absolute"></div> */}
      {/* icon6 to logo */}
      {/* <div className="flow-line6 absolute"></div> */}

      {/* icons */}
      <div className="absolute top-[25%] xs:top-[20%] sm:top-[18%] md:top-[15%] bw:top-[12%] lg:top-[10%] left-[27%] w-[45px] 2xs:w-[50px] sm:w-[60px] md:w-[70px] bw:w-[80px] lg:w-[90px] h-auto">
        <Image src={icon1} alt=""></Image>
      </div>
      <div className="absolute top-[29%] xs:top-[25%] sm:top-[23%] md:top-[20%] bw:top-[17%] lg:top-[15%] left-[67%] w-[45px] 2xs:w-[50px] sm:w-[60px] md:w-[70px] bw:w-[80px] lg:w-[90px] h-auto">
        <Image src={icon2} alt=""></Image>
      </div>
      <div className="absolute top-[47%] left-[2%] 2xs:left-[7%] w-[45px] 2xs:w-[50px] sm:w-[60px] md:w-[70px] bw:w-[80px] lg:w-[90px] h-auto">
        <Image src={icon3} alt=""></Image>
      </div>

      <div className="absolute top-[47%] left-[47%] w-[45px] 2xs:w-[50px] sm:w-[60px] md:w-[70px] bw:w-[80px] lg:w-[90px] h-auto">
        <Image src={iconlogo} alt=""></Image>
      </div>

      <div className="absolute top-[47%] left-[87%] w-[45px] 2xs:w-[50px] sm:w-[60px] md:w-[70px] bw:w-[80px] lg:w-[90px] h-auto">
        <Image src={icon4} alt=""></Image>
      </div>
      <div className="absolute top-[68%] xs:top-[73%] sm:top-[77%] md:top-[80%] bw:top-[83%] lg:top-[85%] left-[27%] w-[45px] 2xs:w-[50px] sm:w-[60px] md:w-[70px] bw:w-[80px] lg:w-[90px] h-auto">
        <Image src={icon5} alt=""></Image>
      </div>
      <div className="absolute top-[74%] xs:top-[78%] sm:top-[82%] md:top-[85%] bw:top-[88%] lg:top-[90%] left-[67%] w-[45px] 2xs:w-[50px] sm:w-[60px] md:w-[70px] bw:w-[80px] lg:w-[90px] h-auto">
        <Image src={icon6} alt=""></Image>
      </div>
    </div>
  );
};

export default ConnectorImage;
