import type { Metadata } from "next";

import { CompanyHeroBand, CompanyPartnersSection } from "@/components/company-page-sections";
import { getPageHeroConfig } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";

  return buildPageMetadata({
    locale,
    path: "/company/partners",
    title: isKo ? "파트너사 소개 | SHINHOTEK" : "Partner Network | SHINHOTEK",
    description: isKo
      ? "신호텍의 레이저, 광학, 계측, 자동화 분야 파트너 네트워크를 소개합니다."
      : "Explore Shinhotek's partner network across lasers, optics, metrology, and automation.",
    keywords: ["파트너사", "Shinhotek partners", "laser partner", "optical partner"],
    image: "/company/history-bg.png",
  });
}

export default async function CompanyPartnersPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isKo = locale === "ko";
  const companyHeroConfig = await getPageHeroConfig("company");
  const partnerItems = [
    { name: "Spark Lasers", website: "https://spark-lasers.com/", logoUrl: "/makers/spark-lasers.png" },
    { name: "Iradion", website: "https://iradionlaser.com/", logoUrl: "/makers/iradion.png" },
    { name: "MLase", website: "https://mlase.com/", logoUrl: "/makers/mlase.png" },
    { name: "Coherent", website: "https://www.coherent.com/ko", logoUrl: "/makers/coherent.png" },
    { name: "SemiNex", website: "https://seminex.com/", logoUrl: "/makers/seminex.png" },
    { name: "Monocrom", website: "https://monocrom.com/", logoUrl: "/makers/monocrom.png" },
    { name: "Optical Engines", website: "https://opticalenginesinc.com/", logoUrl: "/makers/optical-engines.webp" },
    { name: "SCANLAB", website: "https://www.scanlab.de/ko", logoUrl: "/makers/scanlab.jpg" },
    { name: "LaserPoint", website: "https://www.laserpoint.eu/", logoUrl: "/makers/laserpoint.png" },
    { name: "LUMOS", website: "https://www.lumosity.co.kr/", logoUrl: "/makers/lumos.png" },
    { name: "AdlOptica", website: "https://www.adloptica.com/", logoUrl: "/makers/adloptica.webp" },
    { name: "Cailabs", website: "https://www.cailabs.com/", logoUrl: "/makers/cailabs.png" },
    { name: "PowerPhotonic", website: "https://www.powerphotonic.com/", logoUrl: "/makers/powerphotonic.png" },
    { name: "Optoman", website: "https://www.optoman.com/", logoUrl: "/makers/optoman.png" },
    { name: "ULO Optics", website: "https://www.ulooptics.com/", logoUrl: "/makers/ulo-optics.png" },
    { name: "Zenops", website: "https://zenops.co.kr/default/main/main.php", logoUrl: "/makers/zenops.png" },
    { name: "Photonic Tools", website: "https://www.photonic-tools.de/", logoUrl: "/makers/photonic-tools.png" },
    { name: "MLOptic", website: "https://www.mloptic.com/", logoUrl: "/makers/mloptic.png" },
  ].map((partner) => ({
    ...partner,
    body: isKo ? "신호텍 제조사 파트너" : "SHINHOTEK manufacturer partner",
  }));

  return (
    <div className="companyPage">
      <CompanyHeroBand imageUrl={companyHeroConfig?.backgroundImageUrl} />
      <CompanyPartnersSection locale={locale} partners={partnerItems} />
    </div>
  );
}
