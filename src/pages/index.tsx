"use client";

import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  const token = false;

  if (!router.isReady) return;

  if (!token) {
    router.push("/auth/login");
  } else {
    router.push("/dashboard");
  }
};

export default Index;
