"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import slider1 from "@/assets/images/slider1.png";
import slider2 from "@/assets/images/slider2.png";
import slider3 from "@/assets/images/slider3.png";
import slider4 from "@/assets/images/slider4.png";
import slider5 from "@/assets/images/slider5.png";

export default function DetailSwiper() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Swiper
        spaceBetween={8}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        autoplay={false}
        style={{
          width: "100%",
          height: "104px",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          cursor: "grab",
        }}
        loop={false}
      >
        <SwiperSlide
          style={{ width: "156px", height: "104px", borderRadius: "8px" }}
        >
          <Image src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide
          style={{ width: "156px", height: "104px", borderRadius: "8px" }}
        >
          <Image src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide
          style={{ width: "156px", height: "104px", borderRadius: "8px" }}
        >
          <Image src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide
          style={{ width: "156px", height: "104px", borderRadius: "8px" }}
        >
          <Image src={slider4} alt="" />
        </SwiperSlide>
        <SwiperSlide
          style={{ width: "156px", height: "104px", borderRadius: "8px" }}
        >
          <Image src={slider5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
