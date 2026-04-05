"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { BlurIn, StaggerItem, StaggerList } from "../motion-wrappers";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Curriculum = () => {
  const t = useTranslations("Curriculum");
  const items = t.raw("items") as {
    emoji: string;
    title: string;
    description: string;
  }[];

  return (
    <section id="curriculum">
      <div className="container space-y-10 py-10">
        <BlurIn delay={0.1} className="space-y-5">
          <h2 className="text-brand-dark-blue mx-auto text-center text-2xl leading-9 font-bold md:text-3xl lg:text-4xl">
            {t("title")}
          </h2>
          <p className="text-brand-gray mx-auto max-w-2xl text-center text-lg font-semibold md:text-lg lg:text-xl">
            {t("description")}
          </p>
        </BlurIn>

        <StaggerList
          staggerDelay={0.2}
          initialDelay={0.1}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          {items.map((item, idx) => (
            <StaggerItem key={idx} variant="fadeUp" className="grid">
              <Card className="group relative shadow-2xl transition-all duration-200 hover:-translate-1">
                <div className="from-brand-light-blue to-brand-light-blue absolute bottom-0 left-0 h-1 w-full bg-linear-to-r via-green-600" />
                <CardContent>
                  <CardHeader className="mb-3">
                    <div
                      className={cn(
                        "bg-brand-light-blue/5 mx-auto mb-2 grid w-fit place-items-center rounded-2xl p-2 text-4xl",
                      )}
                    >
                      {item.emoji}
                    </div>
                    <CardTitle className="text-brand-dark-blue text-center font-bold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className="text-brand-gray text-center leading-7 font-semibold md:text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
};

export default Curriculum;
