"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Countdown = () => {
  const targetDate =
    process.env.NEXT_PUBLIC_COUNTDOWN_DATE || "2024-03-25T23:59:59";
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(targetDate).getTime() - now.getTime();

    if (difference > 0 || !isNaN(new Date(targetDate).getTime())) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, targetDate]);

  if (!targetDate) return <></>;
  return (
    <div className="source absolute z-50 top-3/4 left-1/2 -translate-x-1/2 flex flex-col gap-4 py-4">
      <div className="text-white flex flex-row lg:gap-8 gap-6">
        <Comp num={timeLeft.days} text="days" />
        <Comp num={timeLeft.hours} text="hours" />
        <Comp num={timeLeft.minutes} text="mins" />
        <Comp num={timeLeft.seconds} text="secs" />
      </div>
      <div className="text-[20px]">Coming soon...</div>
    </div>
  );
};

const Comp = (props) => {
  return (
    <div className="flex flex-col">
      <h1 className="lg:text-[36px] text-[22px] leading-none">
        {props.num < 10 && "0"}
        {props.num}
      </h1>
      <span className="lg:text-[24px] text-[22px] leading-none uppercase">
        {props.text}
      </span>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Countdown), { ssr: false });
