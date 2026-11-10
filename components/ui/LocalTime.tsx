"use client";

import { useEffect, useState } from "react";

function getLocalTime() {
  return new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

export function LocalTime() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => setLocalTime(getLocalTime());
    updateTime();
    const intervalId = window.setInterval(updateTime, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  return <>{localTime || "—"}</>;
}
