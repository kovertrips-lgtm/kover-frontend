"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { RouteTimelineProps } from "@/types/tour";

const RouteTimeline = ({ heading, days }: RouteTimelineProps) => {
  const [openDay, setOpenDay] = useState<number | null>(0);

  return (
    <section className="py-8 w-full max-w-4xl mx-auto">
      <h2 className="font-display text-2xl font-bold mb-6 text-foreground">{heading}</h2>
      <div className="space-y-3">
        {days.map((day, i) => (
          <article
            key={day.day}
            className="rounded-xl border border-border overflow-hidden bg-card"
          >
            <button
              onClick={() => setOpenDay(openDay === i ? null : i)}
              className="w-full flex items-center gap-4 p-4 text-left hover:bg-muted/40 transition-colors"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm">
                {day.day}
              </span>
              <span className="flex-1 font-semibold text-foreground">
                День {day.day}. {day.title}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform ${openDay === i ? "rotate-180" : ""
                  }`}
              />
            </button>

            {openDay === i && (
              <div className="px-4 pb-4 flex flex-col md:flex-row gap-4">
                <img
                  src={day.image}
                  alt={day.title}
                  loading="lazy"
                  className="w-full md:w-48 h-36 object-cover rounded-lg flex-shrink-0"
                />
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {day.description}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default RouteTimeline;
