/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import config from "@/config";

// A simple button to sign in with our providers (Google & Magic Links).
// It automatically redirects user to callbackUrl (config.auth.callbackUrl) after login, which is normally a private page for users to manage their accounts.
// If the user is already logged in, it will show their profile picture & redirect them to callbackUrl immediately.
const ButtonBookACall = ({
  text = "Book A Call",
  extraStyle,
}: {
  text?: string;
  extraStyle?: string;
}) => {
  return (
    <Link
      className={`btn ${extraStyle ? extraStyle : ""} rounded-full`}
      href='https://cal.com/mindcapsule/30min?date=2024-06-11&month=2024-06'
    >
      {text}
    </Link>
  );
};

export default ButtonBookACall;
