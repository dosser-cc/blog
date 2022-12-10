import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import SwiperCore, { Autoplay } from "swiper";

export default function Popular() {
  return (
    <section className="container mx-auto md:px-20">
      <h1 className="font-bold text-4xl py-4 text-center">Most Popular</h1>

      {/** swiper */}
      <Swiper
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
      </Swiper>
    </section>
  );
}

function Post() {
  return (
    <div className="grid p-1">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/images/flowr.jpg"}
            width={680}
            height={400}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link
            className="text-orange-600 text-sm hover:text-orange-400"
            href={"/"}
          >
            Business Travel
          </Link>
          <Link
            className="text-gray-500 text-sm hover:text-orange-400"
            href={"/"}
          >
            - July 3, 2022
          </Link>
        </div>
        <div className="title">
          <Link
            className="text-lg text-gray-800 hover:text-gray-600"
            href={"/"}
          >
            How to Make Blog Website with Next.js
          </Link>
        </div>
        <p className="text-sm text-gray-500 overflow-hidden py-3">
          How to Make Blog Website with Next.js & Tailwind CSS - For Beginners
          In this course
        </p>
        
      </div>
    </div>
  );
}