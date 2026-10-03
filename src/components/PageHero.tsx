type Props = {
  title: string;
  subtitle?: string;
};

export function PageHero({ title, subtitle }: Props) {
  return (
    <div className="border-b border-cla-navy/10 bg-gradient-to-br from-cla-navy to-cla-navy-light text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-3xl text-base text-white/85 sm:text-lg">{subtitle}</p>}
      </div>
    </div>
  );
}
