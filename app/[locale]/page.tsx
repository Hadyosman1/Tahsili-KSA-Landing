"use client";

import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Curriculum from "@/components/sections/Curriculum";
import FAQs from "@/components/sections/FAQs";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import LeadForm from "@/components/sections/LeadForm";
import ProblemsAndSolutions from "@/components/sections/ProblemsAndSolutions";
import Statistics from "@/components/sections/Statistics";
import SuccessStory from "@/components/sections/SuccessStory";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="">
      <Header />
      <main>
        <Hero
          badge={t("Hero.badge")}
          title={t("Hero.title")}
          subtitle={t("Hero.description")}
          features={t.raw("Hero.features")}
          ctaText={t("Hero.buttons.CTA")}
          secondaryCtaText={t("Hero.buttons.secondary")}
        />
        {/* <div className="container flex gap-2 py-10">
          <div className="bg-brand-dark-blue size-12" />
          <div className="bg-brand-light-blue size-12" />
          <div className="bg-brand-green size-12" />
          <div className="bg-brand-gray size-12" />
          <div className="bg-brand-white size-12 shadow" />
        </div> */}
        <Statistics />
        <ProblemsAndSolutions />
        <Curriculum />
        <Journey />
        <Features />
        <LeadForm />
        <SuccessStory />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
}
