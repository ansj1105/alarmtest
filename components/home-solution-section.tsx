import Link from "next/link";

import { resourceBodyToHtml } from "@/lib/resource-rich-text";
import type { Locale } from "@/lib/site";

type SolutionItem = {
  slug: string;
  titleKo: string;
  titleEn: string;
  summaryKo: string;
  summaryEn: string;
  imageUrl: string | null;
};

const makers = [
  { name: "Spark Lasers", logoUrl: "/makers/spark-lasers.png", href: "https://spark-lasers.com/" },
  { name: "Iradion", logoUrl: "/makers/iradion.png", href: "https://iradionlaser.com/" },
  { name: "MLase", logoUrl: "/makers/mlase.png", href: "https://mlase.com/" },
  { name: "Coherent", logoUrl: "/makers/coherent.png", href: "https://www.coherent.com/ko" },
  { name: "SemiNex", logoUrl: "/makers/seminex.png", href: "https://seminex.com/" },
  { name: "Monocrom", logoUrl: "/makers/monocrom.png", href: "https://monocrom.com/" },
  { name: "Optical Engines", logoUrl: "/makers/optical-engines.webp", href: "https://opticalenginesinc.com/" },
  { name: "SCANLAB", logoUrl: "/makers/scanlab.jpg", href: "https://www.scanlab.de/ko" },
  { name: "LaserPoint", logoUrl: "/makers/laserpoint.png", href: "https://www.laserpoint.eu/" },
  { name: "LUMOS", logoUrl: "/makers/lumos.png", href: "https://www.lumosity.co.kr/" },
  { name: "AdlOptica", logoUrl: "/makers/adloptica.webp", href: "https://www.adloptica.com/" },
  { name: "Cailabs", logoUrl: "/makers/cailabs.png", href: "https://www.cailabs.com/" },
  { name: "PowerPhotonic", logoUrl: "/makers/powerphotonic.png", href: "https://www.powerphotonic.com/" },
  { name: "Optoman", logoUrl: "/makers/optoman.png", href: "https://www.optoman.com/" },
  { name: "ULO Optics", logoUrl: "/makers/ulo-optics.png", href: "https://www.ulooptics.com/" },
  { name: "Zenops", logoUrl: "/makers/zenops.png", href: "https://zenops.co.kr/default/main/main.php" },
  { name: "Photonic Tools", logoUrl: "/makers/photonic-tools.png", href: "https://www.photonic-tools.de/" },
  { name: "MLOptic", logoUrl: "/makers/mloptic.png", href: "https://www.mloptic.com/" },
];

export function HomeSolutionSection({
  locale,
  title,
  lead,
  solutions,
  contactTitle,
  contactLead,
}: {
  locale: Locale;
  title?: string | null;
  lead?: string | null;
  solutions: SolutionItem[];
  contactTitle?: string | null;
  contactLead?: string | null;
}) {
  const isKo = locale === "ko";
  const leadHtml = resourceBodyToHtml(
    lead ||
      (isKo
        ? "제품 판매에 머물지 않고 광학 솔루션, 광학 설계, 기구 설계, SW 설계까지 연결하는 산업용 레이저·광학 파트너를 지향합니다."
        : "Beyond product supply, Shinhotek connects selection, engineering review, and application support for industrial laser and optical systems."),
  );
  const visualItems = solutions.slice(0, 4);
  const featuredItems = solutions.slice(0, 2);

  return (
    <>
      <section className="homeSolutionSection">
        <div className="container homeSolutionInner">
          <div className="homeSolutionVisualGrid" aria-label={isKo ? "솔루션 이미지" : "Solution images"}>
            {visualItems.map((item) => (
              <Link
                key={item.slug}
                href={`/${locale}/applications#${item.slug}`}
                className="homeSolutionVisualTile"
                aria-label={isKo ? item.titleKo : item.titleEn}
              >
                {item.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.imageUrl} alt={isKo ? item.titleKo : item.titleEn} />
                ) : (
                  <span>{isKo ? item.titleKo : item.titleEn}</span>
                )}
              </Link>
            ))}
          </div>

          <div className="homeSolutionCopyPanel">
            <div className="homeSolutionTitleBox">
              <h2>{title || (isKo ? "SH Solution" : "SH Solution")}</h2>
            </div>
            <div className="homeSolutionLead" dangerouslySetInnerHTML={{ __html: leadHtml }} />
            <div className="homeSolutionList">
              {featuredItems.map((item) => (
                <Link className="homeSolutionListItem" key={item.slug} href={`/${locale}/applications#${item.slug}`}>
                  <span className="homeSolutionListIcon" aria-hidden="true">⊕</span>
                  <span>
                    <strong>{isKo ? item.titleKo : item.titleEn}</strong>
                    <em>{isKo ? item.summaryKo : item.summaryEn}</em>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="homeContactSection">
        <div className="container">
          <div className="homeContactBand">
            <div className="homeContactCopy">
              <span className="eyebrow">APPLICATIONS</span>
              <div className="homeContactTitleBox">
                <h2>{contactTitle || (isKo ? "Contact us" : "Contact us")}</h2>
              </div>
              <p>
                {contactLead ||
                  (isKo
                    ? "레이저 및 광학 솔루션 상담이 필요하시면 신호텍에 문의해 주세요."
                    : "Contact Shinhotek for laser and optical solution consultation.")}
              </p>
              <Link href={`/${locale}/contact/quote`} className="homeContactCta">
                {isKo ? "문의하기" : "VIEW ALL APPLICATIONS"}
              </Link>
            </div>
            <div className="homeContactInfoPanel">
              <span>Tel. 02-852-0533</span>
              <span>sales@shinhotek.com</span>
              <span>service@shinhotek.com</span>
            </div>
          </div>
        </div>
      </section>

      <section className="homeMakerSection">
        <div className="container">
          <div className="makerMarquee" aria-label={isKo ? "제조사" : "Manufacturers"}>
            <button type="button" className="makerMarqueeArrow" aria-label="Previous manufacturers">
              ‹
            </button>
            <div className="makerMarqueeTrack">
              {[...makers, ...makers].map((maker, index) => (
                <a
                  key={`${maker.name}-${index}`}
                  className="makerLogoBox"
                  href={maker.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={maker.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={maker.logoUrl} alt={maker.name} />
                </a>
              ))}
            </div>
            <button type="button" className="makerMarqueeArrow" aria-label="Next manufacturers">
              ›
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
