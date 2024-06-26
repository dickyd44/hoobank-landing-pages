"use client";

import { GetStarted } from "@/components/atoms";
import { discount, robot } from "@/assets";
import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "@/app/style";
import Image from "next/image";

export default function HeroSection() {
  const discountRef: any = useRef(null);
  const isInView = useInView(discountRef);

  useEffect(() => {
    const controls = animate(0, 20, {
      duration: 1.2,
      onUpdate(value) {
        discountRef.current.textContent = `${value.toFixed()}%`;
      },
    });
    return () => controls.stop();
  }, [isInView]);

  const heroContent = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { x: -100, opacity: 0 },
  };

  const labelContent = {
    visible: {
      scale: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5 },
    },
    hidden: { x: -100 },
  };

  const imageContent = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.1 },
    },
    hidden: { opacity: 0, x: 200 },
  };

  return (
    <motion.section
      variants={heroContent}
      animate="visible"
      initial="hidden"
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <motion.div
        variants={labelContent}
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-10">
          <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span ref={discountRef} className="text-white">
              0%
            </span>{" "}
            Discount For <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-semibold ss:text-[67px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={imageContent}
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <Image
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </motion.div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </motion.section>
  );
}
