"use client";

import { useEffect, useState } from "react";

export default function useLowPower() {
  const [isLowPower, setIsLowPower] = useState(true); // default light, upgrade if capable

  useEffect(() => {
    const isMobileWidth = window.innerWidth < 768;
    const isLowMemory = navigator.deviceMemory ? navigator.deviceMemory < 4 : false;
    setIsLowPower(isMobileWidth || isLowMemory);
  }, []);

  return isLowPower;
}