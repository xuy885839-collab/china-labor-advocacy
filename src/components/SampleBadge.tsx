type Props = { label: string };

export function SampleBadge({ label }: Props) {
  return (
    <span className="inline-flex items-center rounded border border-amber-300 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-800">
      {label}
    </span>
  );
}
