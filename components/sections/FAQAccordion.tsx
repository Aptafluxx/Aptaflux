"use client";

import { useState } from "react";

type FAQAccordionProps = {
  items: readonly {
    question: string;
    answer: string;
  }[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `home-faq-button-${index}`;
        const panelId = `home-faq-panel-${index}`;

        return (
          <div className="border-t border-line" key={item.question}>
            <h3>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-5 py-5 text-left font-display text-h3 font-medium"
                id={buttonId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                type="button"
              >
                <span>{item.question}</span>
                <span aria-hidden="true" className="text-ember">
                  {isOpen ? "−" : "+"}
                </span>
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
                <p className="max-w-[65ch] pb-5 text-body leading-relaxed text-muted">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="border-t border-line" />
    </div>
  );
}
