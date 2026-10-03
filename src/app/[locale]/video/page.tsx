import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { SectionBlock } from "@/components/SectionBlock";
import { SampleBadge } from "@/components/SampleBadge";
import { sampleVideos } from "@/lib/content/samples";

export default async function VideoPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const t = (o: { zh: string; en: string }) => o[locale];

  const groups = [
    { id: "legal", title: dict.videoSubs.legal, cat: "legal" },
    { id: "life", title: dict.videoSubs.life, cat: "life" },
    { id: "talks", title: dict.videoSubs.talks, cat: "talks" },
  ];

  return (
    <>
      <PageHero
        title={dict.nav.video}
        subtitle={
          locale === "zh"
            ? "普法短视频、打工生活与会客厅访谈。正式环境将支持自有视频存储（非外链嵌入为主）。"
            : "Legal education, worker-life clips, and talk features. Self-hosted video storage planned (not third-party embeds as primary)."
        }
      />
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10">
        <p className="text-sm text-cla-slate">{dict.common.sampleNote}</p>
        <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded px-3 py-2">
          {locale === "zh"
            ? "延期：自建视频上传/转码/CDN 与评论开关——当前为占位卡片。"
            : "Deferred: self-hosted upload/transcode/CDN and comment toggles — placeholder cards for now."}
        </p>
        {groups.map((g) => (
          <SectionBlock key={g.id} id={g.id} title={g.title} sampleLabel={dict.common.sample}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sampleVideos
                .filter((v) => v.category === g.cat)
                .map((v) => (
                  <div
                    key={v.id}
                    className="overflow-hidden rounded-lg border border-cla-navy/10 bg-white shadow-sm"
                  >
                    <div className="flex aspect-video items-center justify-center bg-cla-navy/90 text-white">
                      <div className="text-center">
                        <div className="text-3xl">▶</div>
                        <div className="mt-1 text-xs opacity-80">{dict.common.comingSoon}</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <SampleBadge label={dict.common.sample} />
                        <span className="text-xs text-cla-slate">{v.duration}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-cla-navy">{t(v.title)}</h3>
                    </div>
                  </div>
                ))}
            </div>
          </SectionBlock>
        ))}
      </div>
    </>
  );
}
