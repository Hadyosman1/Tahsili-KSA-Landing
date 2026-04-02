"use client";

import { cn } from "@/lib/utils";
import { Cancel01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslations } from "next-intl";
import { BlurIn, StaggerItem, StaggerList } from "../motion-wrappers";
import { Card, CardContent, CardTitle } from "../ui/card";

const ProblemsAndSolutions = () => {
  const t = useTranslations("ProblemsAndSolutions");
  const problems = t.raw("Problems.items");
  const Solutions = t.raw("Solutions.items");

  return (
    <section className="bg-brand-gray/1">
      <div className="container grid gap-6 py-10 lg:grid-cols-2 lg:gap-8">
        <div className="grid">
          <div className="space-y-3">
            <BlurIn delay={0.1}>
              <h2 className="text-brand-dark-blue mx-auto mb-3 text-2xl leading-9 font-bold md:text-3xl">
                {t("Problems.Title")}
              </h2>

              <p className="text-brand-gray min-h-lh text-lg leading-8">
                {t("Problems.subTitle")}
              </p>
            </BlurIn>
          </div>

          <StaggerList
            staggerDelay={0.2}
            initialDelay={0.1}
            className="mt-4 space-y-3 self-end"
          >
            {problems.map((problem: string, index: number) => (
              <StaggerItem key={index} variant="fadeUp">
                <Card
                  className={cn(
                    "group border-brand-light-blue border shadow-xl transition-all duration-200 hover:-translate-1",
                  )}
                >
                  <CardContent>
                    <CardTitle
                      className={cn(
                        "text-brand-gray flex items-center gap-2 font-bold",
                      )}
                    >
                      <HugeiconsIcon
                        icon={Cancel01Icon}
                        size={24}
                        className={cn(
                          "shrink-0 transition-all duration-400 group-hover:rotate-[1turn]",
                          "text-red-600",
                        )}
                      />
                      {problem}
                    </CardTitle>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>

        <div className="grid">
          <div className="space-y-3">
            <BlurIn delay={0.1}>
              <h2 className="text-brand-dark-blue mx-auto mb-3 text-2xl leading-9 font-bold md:text-3xl">
                {t("Solutions.Title")}
              </h2>

              <p className="text-brand-gray text-lg leading-8">
                {t("Solutions.subTitle")}
              </p>
            </BlurIn>
          </div>

          <StaggerList
            staggerDelay={0.2}
            initialDelay={0.1}
            className="mt-4 space-y-3 self-end"
          >
            {Solutions.map((solution: string, index: number) => (
              <StaggerItem key={index} variant="fadeUp">
                <Card
                  className={cn(
                    "group border-brand-green border shadow-xl transition-all duration-200 hover:-translate-1",
                  )}
                >
                  <CardContent>
                    <CardTitle
                      className={cn(
                        "text-brand-gray flex items-center gap-2 font-bold",
                      )}
                    >
                      <HugeiconsIcon
                        icon={Tick02Icon}
                        size={24}
                        className={"text-brand-green shrink-0"}
                      />
                      {solution}
                    </CardTitle>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </div>
    </section>
  );
};

export default ProblemsAndSolutions;
