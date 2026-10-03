import { SampleBadge } from "./SampleBadge";

type Props = {
  title: string;
  summary?: string;
  meta?: string;
  sampleLabel?: string;
  badge?: string;
};

export function ItemCard({ title, summary, meta, sampleLabel, badge }: Props) {
  return (
    <article className="rounded-lg border border-cla-navy/10 bg-white p-4 shadow-sm transition hover:border-cla-red/30 hover:shadow-md">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        {sampleLabel && <SampleBadge label={sampleLabel} />}
        {badge && (
          <span className="rounded bg-cla-navy/5 px-2 py-0.5 text-xs font-medium text-cla-navy">
            {badge}
          </span>
        )}
        {meta && <time className="text-xs text-cla-slate">{meta}</time>}
      </div>
      <h3 className="text-base font-semibold text-cla-navy">{title}</h3>
      {summary && <p className="mt-2 text-sm leading-relaxed text-cla-slate">{summary}</p>}
    </article>
  );
}
