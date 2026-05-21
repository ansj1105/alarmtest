import type { Metadata } from "next";

import { CompanyDirectionsSection, CompanyHeroBand } from "@/components/company-page-sections";
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
    path: "/company/directions",
    title: isKo ? "찾아오는길 | SHINHOTEK" : "Directions | SHINHOTEK",
    description: isKo
      ? "서울 금천구 가산디지털단지에 위치한 신호텍 본사 위치와 연락처를 안내합니다."
      : "Find Shinhotek headquarter location and contact information in Geumcheon-gu, Seoul.",
    keywords: ["찾아오는길", "SHINHOTEK address", "신호텍 주소", "Gasan digital"],
    image: "/contact/directions-building.png",
  });
}

export default async function CompanyDirectionsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const companyHeroConfig = await getPageHeroConfig("company");

  return (
    <div className="companyPage">
      <CompanyHeroBand imageUrl={companyHeroConfig?.backgroundImageUrl} />
      <CompanyDirectionsSection locale={locale} />
    </div>
  );
}
