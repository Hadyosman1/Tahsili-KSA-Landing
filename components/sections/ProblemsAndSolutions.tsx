"use client";

import { cn } from "@/lib/utils";
import {
  ChatQuestion01Icon,
  LibraryIcon,
  StudyDeskIcon,
  Tick02Icon,
  WorryIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslations } from "next-intl";
import { BlurIn, StaggerItem, StaggerList } from "../motion-wrappers";
import { Card, CardContent, CardTitle } from "../ui/card";

const iconsMap = [LibraryIcon, StudyDeskIcon, ChatQuestion01Icon, WorryIcon];

const ProblemsAndSolutions = () => {
  const t = useTranslations("ProblemsAndSolutions");
  const problems = t.raw("Problems.items");
  const Solutions = t.raw("Solutions.items");

  return (
    <section className="bg-brand-gray/1">
      <div className="container space-y-6 py-10">
        <div className="space-y-3">
          <BlurIn delay={0.1}>
            <h2 className="text-brand-dark-blue mx-auto mb-3 text-2xl leading-9 font-bold md:text-3xl lg:text-4xl">
              {t("Problems.Title")}
            </h2>

            <p className="text-brand-gray text-lg leading-8">
              {t("Problems.subTitle")}
            </p>

            <p className="text-brand-gray text-lg leading-8">
              {t("Problems.beforeProblems")}
            </p>
          </BlurIn>
        </div>

        <StaggerList
          staggerDelay={0.2}
          initialDelay={0.1}
          className="grid grid-cols-1 gap-3 md:grid-cols-2"
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
                      icon={iconsMap[index]}
                      size={36}
                      className={cn(
                        "transition-all duration-400 group-hover:rotate-[1turn]",
                        "text-brand-light-blue",
                      )}
                    />
                    {problem}
                  </CardTitle>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerList>

        <hr />

        <div className="space-y-3">
          <BlurIn delay={0.1}>
            <h2 className="text-brand-dark-blue mx-auto mb-3 text-2xl leading-9 font-bold md:text-3xl lg:text-4xl">
              {t("Solutions.Title")}
            </h2>

            <p className="text-brand-gray text-lg leading-8">
              {t("Solutions.subTitle")}
            </p>

            <p className="text-brand-gray text-lg leading-8">
              {t("Solutions.beforeSolutions")}
            </p>
          </BlurIn>
        </div>

        <StaggerList
          staggerDelay={0.2}
          initialDelay={0.1}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
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
                      size={36}
                      className={"text-brand-green"}
                    />
                    {solution}
                  </CardTitle>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
};

export default ProblemsAndSolutions;
