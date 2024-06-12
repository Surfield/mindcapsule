"use client";

import { useState, useRef } from "react";
import type { JSX } from "react";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  type?: "video" | "image";
  path?: string;
  format?: string;
  alt?: string;
  svg?: JSX.Element;
}

// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - type: The type of media (video or image)
// - path: The path to the media (for better SEO, try to use a local path)
// - format: The format of the media (if type is 'video')
// - alt: The alt text of the image (if type is 'image')
const features = [
  {
    title: "Emails",
    description:
      "Send transactional emails, setup your DNS to avoid spam folder (DKIM, DMARC, SPF in subdomain), and listen to webhook to receive & forward emails",
    type: "video",
    path: "https://d3m8mk7e1mf7xn.cloudfront.net/app/newsletter.webm",
    format: "video/webm",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
        />
      </svg>
    ),
  },
  {
    title: "Payments",
    description:
      "Create checkout sessions, handle webhooks to update user's account (subscriptions, one-time payments...) and tips to setup your account & reduce chargebacks",
    type: "image",
    path: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    alt: "A computer",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    ),
  },
  {
    title: "Authentication",
    description:
      "Magic links setup, login with Google walkthrough, save user in MongoDB/Supabase, private/protected pages & API calls",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Style",
    description:
      "Components, animations & sections (like this features section), 20+ themes with daisyUI, automatic dark mode",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
] as Feature[];

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({
  feature,
  isOpen,
  setFeatureSelected,
}: {
  index: number;
  feature: Feature;
  isOpen: boolean;
  setFeatureSelected: () => void;
}) => {
  const accordion = useRef(null);
  const { title, description, svg } = feature;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        <span className={`duration-100 ${isOpen ? "text-primary" : ""}`}>
          {svg}
        </span>
        <span
          className={`flex-1 text-base-content ${
            isOpen ? "text-primary font-semibold" : ""
          }`}
        >
          <h3 className="inline">{title}</h3>
        </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{description}</div>
      </div>
    </li>
  );
};

// A component to display the media (video or image) of the feature. If the type is not specified, it will display an empty div.
// Video are set to autoplay for best UX.
const Media = ({ feature }: { feature: Feature }) => {
  const { type, path, format, alt } = feature;
  const style = "rounded-2xl aspect-square w-full sm:w-[26rem]";
  const size = {
    width: 500,
    height: 500,
  };

  if (type === "video") {
    return (
      <video
        className={style}
        autoPlay
        muted
        loop
        playsInline
        controls
        width={size.width}
        height={size.height}
      >
        <source src={path} type={format} />
      </video>
    );
  } else if (type === "image") {
    return (
      <Image
        src={path}
        alt={alt}
        className={`${style} object-cover object-center`}
        width={size.width}
        height={size.height}
      />
    );
  } else {
    return <div className={`${style} !border-none`}></div>;
  }
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState<number>(0);

  return (
    <section
      className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 "
      id="features"
    >
      <div className="px-8">
        <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-12 md:mb-24">
          Everything you need to ship features fast
          <span className="bg-neutral text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
            and get your idea to market
          </span>
        </h2>
        <p className="text-lg opacity-80 leading-relaxed">
        Trusted by some of the biggest and brightest: 
        </p>
        <div className=" flex flex-col md:flex-row gap-12 md:gap-24 py-5">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-3 lg:gap-20">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <path fill="#1ED760" d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="168px" viewBox="0 0 168 168" width="168px">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg">
            <path d="M59.4128 32.731c3.6398 0 4.4448 3.9827 4.6231 6.6088h-9.8548c.4017-3.7507 2.1163-6.6088 5.2317-6.6088zm9.5679 8.4176c.8468 0 1.5346-.681 1.535-1.4663.0004-3.521-5.099-8.5092-11.4226-8.5092-6.5961 0-11.943 5.2095-11.943 11.6364 0 6.4273 5.3469 11.6368 11.943 11.6368 5.2909 0 9.7747-3.3525 11.344-7.9958h-1.4477c-1.1108 2.0685-3.0385 4.2349-6.2446 4.2349-5.5718 0-8.686-3.7965-8.6595-9.536l.0004-.0004zm-22.0784-9.5864h-6.52v1.0638h.26c2.8728 0 4.8233 2.9209 3.722 5.5746l-3.0385 7.3187-4.7762-11.2237c-.337-.7912.2438-1.6696 1.104-1.6696h.019v-1.0638H25.905v1.0638h.1575c.968 0 1.842.5781 2.2212 1.4684l1.6936 3.98-3.0893 7.4449-4.7763-11.2237c-.337-.7912.244-1.6695 1.1037-1.6695h.0193v-1.0639H11.4674v1.0639h.1575c.968 0 1.842.578 2.2212 1.4683l7.9824 18.757a2.127 2.127 0 001.9612 1.2938 2.1261 2.1261 0 001.9607-1.3112l5.1886-12.5002 5.3276 12.5175a2.126 2.126 0 001.9607 1.294 2.1257 2.1257 0 001.9608-1.3113l8.0191-19.3173c.386-.9301-.298-1.9545-1.305-1.9545zm22.2023 37.5424c-7.2402 7.2397-16.8657 11.2272-27.1048 11.2272-10.2383 0-19.8642-3.9875-27.1044-11.2272-7.2397-7.2402-11.2272-16.866-11.2272-27.1044 0-10.2391 3.9875-19.865 11.2272-27.1048 7.2402-7.2397 16.866-11.2272 27.1044-11.2272 10.2391 0 19.8646 3.9875 27.1048 11.2272 7.2401 7.2398 11.2268 16.8657 11.2268 27.1048 0 10.2383-3.9867 19.8642-11.2268 27.1044zM80.6988 25.651c-2.1159-5.0016-5.1437-9.493-9.0005-13.3498-3.8564-3.8564-8.3478-6.8846-13.3494-9C53.1698 1.1107 47.6694 0 41.9998 0 36.331 0 30.8302 1.1108 25.6511 3.3012c-5.0012 2.1155-9.493 5.1437-13.3498 9.0001-3.8564 3.8568-6.8846 8.3482-9 13.3498C1.1107 30.8302 0 36.331 0 42.0002c0 5.6688 1.1108 11.1696 3.3012 16.3487 2.1155 5.0016 5.1437 9.493 9.0001 13.3494 3.8568 3.8568 8.3486 6.885 13.3498 9.0005C30.8302 82.8892 36.331 84 41.9998 84c5.6696 0 11.17-1.1108 16.3491-3.3012 5.0016-2.1155 9.493-5.1437 13.3494-9.0005 3.8568-3.8564 6.8846-8.3478 9.0005-13.3494C82.8892 53.1698 84 47.669 84 42.0002c0-5.6692-1.1108-11.17-3.3012-16.3491z" fill="#f7f9ec" fill-rule="evenodd"/>
          </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
