import { memo } from "react";
import { faqItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/layout/Section";
import { SectionBackground } from "@/components/layout/SectionBackground";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = memo(function Faq() {
  return (
    <section
      aria-labelledby="faq-heading"
      id="faq"
      className="relative overflow-hidden w-full py-6"
    >
      <SectionBackground variant="faq" />
      <div className="relative z-10">
        <SectionHeading id="faq-heading">Frequently Asked Questions</SectionHeading>

        <div className="px-4 py-4 sm:px-6">
          <Accordion type="single" collapsible defaultValue="faq-0" className="w-full space-y-1">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="group rounded-xl border border-transparent bg-[#08080c] transition-all duration-200 hover:border-white/25 hover:bg-[#0c0c10] my-2.5 overflow-hidden"
              >
                <AccordionTrigger
                  hideChevron
                  className="hover:no-underline px-4 py-4 sm:px-5 text-left text-sm sm:text-base font-semibold text-[#fcfdff]"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 pt-1 sm:px-5 text-xs sm:text-sm leading-relaxed text-[#rgba(252,253,255,0.86)] border-t border-transparent group-hover:border-white/06 transition-colors mt-1">
                  <p className="pt-2">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
});
