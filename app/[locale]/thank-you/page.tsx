"use client";

import { BlurIn, FadeUp } from "@/components/motion-wrappers";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const ThankYouPage = () => {
  const t = useTranslations("SuccessPage");
  const locale = useLocale();
  const router = useRouter();

  const handleGoHome = () => {
    router.push(`/${locale}`);
  };

  return (
    <section
      id="thank-you-page"
      className="from-brand-dark-blue via-brand-dark-blue to-brand-green min-h-screen bg-linear-to-br"
    >
      <div className="container flex min-h-[70vh] flex-col items-center justify-center space-y-8 py-14">
        <BlurIn delay={0.1} className="space-y-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <HugeiconsIcon
              icon={Tick02Icon}
              className="h-10 w-10 stroke-3 text-green-600"
            />
          </div>

          <h1 className="text-background text-3xl font-bold md:text-4xl lg:text-5xl">
            {t("title")}
          </h1>

          <p className="text-background mx-auto max-w-2xl text-lg font-medium md:text-lg lg:text-xl">
            {t("description")}
          </p>
        </BlurIn>

        <FadeUp delay={0.2}>
          <Card className="w-full max-w-md bg-white/10">
            <CardContent className="p-6 text-center">
              <Button onClick={handleGoHome} size="lg" className="w-full">
                {t("button")}
              </Button>
            </CardContent>
          </Card>
        </FadeUp>
      </div>
    </section>
  );
};

export default ThankYouPage;
