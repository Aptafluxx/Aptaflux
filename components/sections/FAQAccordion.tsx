"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Card } from "@/components/ui/Card";

type FAQAccordionProps = {
  items: readonly {
    question: string;
    answer: string;
  }[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `home-faq-button-${index}`;
        const panelId = `home-faq-panel-${index}`;

        return (
          <Card className="p-5 sm:p-6" key={item.question}>
            <h3>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-5 text-left font-body text-h3 font-bold tracking-[-0.02em]"
                id={buttonId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                type="button"
              >
                <span>{item.question}</span>
                {isOpen ? <Minus aria-hidden="true" className="shrink-0 text-ember" /> : <Plus aria-hidden="true" className="shrink-0 text-ember" />}
              </button>
            </h3>
            <div
              aria-hidden={!isOpen}
              aria-labelledby={buttonId}
              className="home-faq-panel"
              data-open={isOpen}
              id={panelId}
              role="region"
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-[65ch] pt-4 text-body leading-relaxed text-muted">
                  {item.answer}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
