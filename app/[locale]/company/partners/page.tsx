import type { Metadata } from "next";

import { CompanyHeroBand, CompanyPartnersSection } from "@/components/company-page-sections";
import { getDistributorDirectory, getPageHeroConfig } from "@/lib/content";
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
  const [companyHeroConfig, distributorDirectory] = await Promise.all([
    getPageHeroConfig("company"),
    getDistributorDirectory(),
  ]);
  const partnerItems = distributorDirectory.regions.flatMap((region) =>
    region.partners
      .filter((partner) => partner.published)
      .map((partner) => ({
        name: isKo ? partner.companyKo : partner.companyEn,
        body: isKo ? partner.addressKo : partner.addressEn,
        website: partner.website,
      })),
  );

  return (
    <div className="companyPage">
      <CompanyHeroBand imageUrl={companyHeroConfig?.backgroundImageUrl} />
      <CompanyPartnersSection locale={locale} partners={partnerItems} />
    </div>
  );
}
