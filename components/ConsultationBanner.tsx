import { CalendarDays } from "lucide-react";

export default function ConsultationBanner() {
  return (
    <section
      id="consultation"
      className="bg-navy py-10 sm:py-12 md:py-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 text-center sm:px-6 sm:gap-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10">
            <CalendarDays size={28} className="text-leaf" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
              Let&apos;s build your financial plan today!
            </h2>
            <p className="mt-1 text-sm text-gray-300">
              Reach out for a free consultation with our expert advisors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
