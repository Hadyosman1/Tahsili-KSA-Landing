"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import { BlurIn } from "../motion-wrappers";

const FAQs = () => {
  const t = useTranslations("FAQ");
  const items = t.raw("items") as { q: string; a: string }[];

  return (
    <section className="bg-brand-gray/3">
      <div className="container space-y-10 py-12">
        <BlurIn delay={0.1} className="space-y-10">
          <h2 className="text-brand-dark-blue mx-auto text-center text-2xl leading-9 font-bold md:text-3xl lg:text-4xl">
            {t("title")}
          </h2>
        </BlurIn>

        <BlurIn delay={0.1}>
          <div className="mx-auto max-w-3xl">
            <Accordion className="space-y-2">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card relative overflow-hidden rounded-md border px-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="bg-brand-dark-blue absolute inset-s-0 h-full w-1" />
                  <AccordionTrigger className="[&>svg]:text-brand-dark-blue! text-brand-dark-blue py-4 text-start text-sm font-bold tracking-tight hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-gray pb-4 text-sm leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </BlurIn>
      </div>
    </section>
  );
};

export default FAQs;
