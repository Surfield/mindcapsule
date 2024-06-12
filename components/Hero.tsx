import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="relative hero-content text-center text-neutral-content p-8"></div>
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Build your <u>startup</u> or <u>product</u><br /> in <u>weeks</u>, not <s>months</s>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
        Your own <b>world-class</b> product team at a fraction of the cost.
        </p>
  
        <Link
          className="btn btn-primary btn-wide rounded-full"
          href='https://cal.com/mindcapsule/30min?date=2024-06-11&month=2024-06'
        >
          Book A Call
        </Link>
      </div>
      
    </section>
  );
};

export default Hero;
