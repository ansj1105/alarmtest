import type { Metadata } from "next";

import { CompanyCeoVisionSections, CompanyHeroBand } from "@/components/company-page-sections";
import { getCompanyContent } from "@/lib/content";
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
    path: "/company/ceo-vision",
    title: isKo ? "CEO 인사말 & 회사비전 | SHINHOTEK" : "CEO Message & Vision | SHINHOTEK",
    description: isKo
      ? "신호텍의 CEO 인사말, 회사 비전, 목표를 확인하세요."
      : "Read Shinhotek's CEO message, vision, and goal.",
    keywords: ["CEO 인사말", "회사비전", "SHINHOTEK vision", "Shinhotek"],
    image: "/company/history-bg.png",
  });
}

export default async function CompanyCeoVisionPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const companyContent = await getCompanyContent();

  return (
    <div className="companyPage">
      <CompanyHeroBand imageUrl="/company/history-bg.png" />
      <CompanyCeoVisionSections locale={locale} companyContent={companyContent} />
    </div>
  );
}
