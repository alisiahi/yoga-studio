"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";
import Image from "next/image";
import Link from "next/link";

const blogData = [
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 18, 2024",
    title: "Yoga: Inner Peace Unlocked",
    href: "",
  },
  {
    img: "/assets/img/blog/post2.jpg",
    date: "March 19, 2024",
    title: "Mindfulness Through Yoga Practice",
    href: "",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "March 20, 2024",
    title: "Yoga for Strength and Flexibility",
    href: "",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "March 21, 2024",
    title: "Exploring Yoga's Healing Power",
    href: "",
  },
  {
    img: "/assets/img/blog/post5.jpg",
    date: "March 22, 2024",
    title: "Yoga: Path to Wellness",
    href: "",
  },
  {
    img: "/assets/img/blog/post6.jpg",
    date: "March 23, 2024",
    title: "Finding Balance with Yoga",
    href: "",
  },
  {
    img: "/assets/img/blog/post7.jpg",
    date: "March 24, 2024",
    title: "The Joy of Yoga",
    href: "",
  },
  {
    img: "/assets/img/blog/post8.jpg",
    date: "March 25, 2024",
    title: "Yoga: Unleash Your Potential",
    href: "",
  },
];

const Blog = () => {
  return (
    <section className="bg-primary-300 text-white py-36" id="blog">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-8"
        >
          Blogs
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            className="h-[420px] md:max-w-[660px] lg:max-w-none mb-8"
          >
            {blogData.map((post, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col justify-start h-full max-w-[320px] mx-auto">
                    <Image
                      src={post.img}
                      width={320}
                      height={266}
                      alt=""
                      className="mb-6"
                    />
                    <div className="flex flex-col items-start">
                      <p className="max-w-[380px] uppercase text-[12px] tracking-[3px] mb-1">
                        {post.date}
                      </p>
                      <Link
                        href={post.href}
                        className="hover:text-accent transition-all duration-300"
                      >
                        <h5 className="h5">{post.title}</h5>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperNavButtons
              containerStyles="absolute left-0 right-0 bottom-[16rem] w-full max-w-[370px] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto z-50 flex justify-between gap-1"
              btnStyles="bg-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
              iconStyles="text-2xl"
            />
          </Swiper>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton
            containerStyles="block w-[196px] h-[62px] mx-auto"
            text="View all"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
