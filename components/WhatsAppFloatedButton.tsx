import { WHATS_APP_NUMBER } from "@/constants";
import { WhatsappIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function WhatsAppFloatedButton() {
  return (
    <a
      rel="noopener noreferrer"
      href={`https://wa.me/${WHATS_APP_NUMBER}`}
      target="_blank"
      className="group fixed start-4 bottom-4 z-20 rounded-full bg-[#1a9647] p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#25d365]"
    >
      <div
        style={{ animationDuration: "2000ms" }}
        className="group-hover:paused absolute inset-2.5 z-[-2] animate-ping rounded-full bg-[#094921]"
      />
      <HugeiconsIcon
        icon={WhatsappIcon}
        className="size-7 text-white transition-all duration-300 group-hover:rotate-360"
      />
      <span className="sr-only">تواصل معنا عبر تطبيق واتساب</span>
    </a>
  );
}
