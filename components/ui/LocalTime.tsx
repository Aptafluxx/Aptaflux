"use client";

import { useEffect, useState } from "react";

function getLocalTime() {
  const formatter = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const time = formatter.format(new Date());
  const timeZone = formatter.resolvedOptions().timeZone;

  return `${time} (${timeZone})`;
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
