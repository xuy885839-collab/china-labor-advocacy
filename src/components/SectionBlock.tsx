import { SampleBadge } from "./SampleBadge";

type Props = {
  id?: string;
  title: string;
  sampleLabel?: string;
  children: React.ReactNode;
};

export function SectionBlock({ id, title, sampleLabel, children }: Props) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <h2 className="text-xl font-bold text-cla-navy sm:text-2xl">{title}</h2>
        {sampleLabel && <SampleBadge label={sampleLabel} />}
      </div>
      {children}
    </section>
  );
}
