import type { Metadata } from "next";

import { CompanyHeroBand, CompanyOverviewSection } from "@/components/company-page-sections";
import { getCompanyContent, getPageHeroConfig } from "@/lib/content";
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
    path: "/company",
    title: isKo ? "회사소개 | SHINHOTEK 신호텍" : "Company | About SHINHOTEK",
    description: isKo
      ? "신호텍은 정밀 제조 공정에 필요한 레이저, 광학 부품, 계측 장비, 맞춤형 광학 솔루션을 제공하는 산업 광학 솔루션 기업입니다."
      : "Shinhotek is an industrial optical solution company providing lasers, optics, metrology systems, and customized optical solutions for precision manufacturing.",
    keywords: ["회사소개", "About SHINHOTEK", "신호텍", "Shinhotek", "optical solution Korea", "industrial laser"],
    image: "/company/history-bg.png",
  });
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const [companyContent, companyHeroConfig] = await Promise.all([
    getCompanyContent(),
    getPageHeroConfig("company"),
  ]);

  return (
    <div className="companyPage">
      <CompanyHeroBand imageUrl={companyHeroConfig?.backgroundImageUrl} />
      <CompanyOverviewSection
        locale={locale}
        companyContent={companyContent}
        heroConfig={companyHeroConfig}
      />
    </div>
  );
}
