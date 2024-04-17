"use client";

import { stats } from "@/constants";
import styles from "@/app/style";
import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function StatsSection() {
  const transactionRef: any = useRef(null);
  const transactionInView = useInView(transactionRef);

  useEffect(() => {
    const transaction = animate(0, 230, {
      duration: 1.2,
      onUpdate(value) {
        transactionRef.current.textContent = `$${value.toFixed()}M+`;
      },
    });
    return () => transaction.stop();
  }, [transactionInView]);

  const contentSection = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { x: -100, opacity: 0 },
  };

  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat, index) => (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contentSection}
          key={index}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4
            ref={transactionRef}
            className="font-semibold xs:text-[41px] text-[31px] xs:leading-[53px] leading-[43px] text-white"
          >
            {stat.value}
          </h4>
          <p className="font-normal xs:text-[20.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
