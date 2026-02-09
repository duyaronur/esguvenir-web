"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="card">
            <button
              onClick={() => toggleItem(index)}
              className="flex w-full items-start justify-between gap-4 text-left"
              aria-expanded={isOpen}
            >
              <h3 className="text-lg font-semibold text-primary">{item.question}</h3>
              <span className="flex-shrink-0 rounded-full bg-accent/10 p-1">
                {isOpen ? (
                  <Minus className="h-5 w-5 text-accent" />
                ) : (
                  <Plus className="h-5 w-5 text-accent" />
                )}
              </span>
            </button>
            {isOpen && (
              <div className="mt-4 text-neutral">
                <p className="leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
