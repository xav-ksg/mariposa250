'use client';

import { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: string; // ISO 8601
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [remaining, setRemaining] = useState(() => computeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(computeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex items-baseline gap-6 rule-double">
      <p className="label-smallcaps">Counting Down</p>
      <div className="flex gap-6 font-display text-2xl md:text-3xl text-navy tabular-nums">
        <Cell value={remaining.days} label="days" />
        <Cell value={remaining.hours} label="hrs" />
        <Cell value={remaining.minutes} label="min" />
        <Cell value={remaining.seconds} label="sec" />
      </div>
    </div>
  );
}

function Cell({ value, label }: { value: number; label: string }) {
  return (
    <span>
      {String(value).padStart(2, '0')}
      <span className="ml-1 text-xs font-sans uppercase tracking-widest text-muted">
        {label}
      </span>
    </span>
  );
}

function computeRemaining(targetDate: string) {
  const diff = Math.max(0, new Date(targetDate).getTime() - Date.now());
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1_000);
  return { days, hours, minutes, seconds };
}
