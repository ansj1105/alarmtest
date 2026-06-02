import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { SubpageHero } from "@/components/subpage-hero";
import { buildPageMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/site";

const projectModules = [
  {
    titleKo: "Diffractive Optical Elements (DOEs)",
    titleEn: "Diffractive Optical Elements (DOEs)",
    image: "/makers/cailabs.png",
    bodyKo: "빔 분할, 빔 쉐이핑, 패턴 생성 등 정밀 광학 모듈 적용을 검토합니다.",
    bodyEn: "Review beam splitting, beam shaping, and pattern generation modules for precision optical systems.",
  },
  {
    titleKo: "Refractive Optical Elements (ROEs)",
    titleEn: "Refractive Optical Elements (ROEs)",
    image: "/makers/powerphotonic.png",
    bodyKo: "자유형상 렌즈와 굴절 광학계를 활용해 공정 목적에 맞는 빔 품질을 구성합니다.",
    bodyEn: "Configure beam quality with freeform lenses and refractive optical systems for process requirements.",
  },
  {
    titleKo: "Laser Scanner & Metrology",
    titleEn: "Laser Scanner & Metrology",
    image: "/makers/scanlab.png",
    bodyKo: "스캐너, 계측기, 센서를 연계해 프로젝트 조건에 맞는 평가 구성을 제안합니다.",
    bodyEn: "Connect scanners, metrology tools, and sensors to propose evaluation setups for project conditions.",
  },
  {
    titleKo: "Laser Distance Sensors",
    titleEn: "Laser Distance Sensors",
    image: "/subpage-products-laser-bg.png",
    bodyKo: "자동화 장비와 공정 라인에 필요한 거리 측정 및 위치 검출 구성을 검토합니다.",
    bodyEn: "Review distance measurement and position detection configurations for automation equipment and process lines.",
  },
];

const projectBenefits = {
  ko: ["광학 모듈 선정", "공정 조건 검토", "제조사 기술 협의", "테스트 및 데모 구성"],
  en: ["Optical module selection", "Process requirement review", "Manufacturer technical coordination", "Test and demo setup"],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";

  return buildPageMetadata({
    locale,
    path: "/projects",
    title: isKo ? "프로젝트 | SHINHOTEK" : "Project | SHINHOTEK",
    description: isKo
      ? "신호텍 프로젝트 페이지에서 LiDAR, 광학 모듈, 레이저 스캐너 및 계측 연계 프로젝트 구성을 확인하세요."
      : "Explore Shinhotek project configurations for LiDAR, optical modules, laser scanners, and metrology integration.",
    keywords: ["Project", "LiDAR", "optical modules", "DOE", "ROE", "laser project", "신호텍 프로젝트"],
    image: "/subpage-products-laser-bg.png",
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isKo = locale === "ko";
  const benefits = projectBenefits[locale];

  return (
    <div className="projectsPage">
      <SubpageHero
        eyebrow="PROJECT"
        title={isKo ? "프로젝트" : "Project"}
        description={
          isKo
            ? "신호텍은 레이저·광학 제품군을 프로젝트 요구사항에 맞춰 연결하고 적용 가능성을 검토합니다."
            : "SHINHOTEK connects laser and optical product groups to project requirements and reviews applicability."
        }
        tone="products"
        backgroundImageUrl="/subpage-products-laser-bg.png"
        backgroundOpacity={0.86}
      />

      <main className="projectsBody">
        <section className="container projectIntroPanel">
          <div className="projectIntroCopy">
            <span>PROJECT CASE</span>
            <h2>
              {isKo
                ? "LiDAR 및 정밀 광학 프로젝트를 위한 제품 연계"
                : "Product integration for LiDAR and precision optical projects"}
            </h2>
            <p>
              {isKo
                ? "자동화, 모빌리티, 검사 장비와 같이 높은 신뢰성이 필요한 프로젝트에서 광학 모듈, 레이저, 스캐너, 계측 장비를 하나의 적용 흐름으로 검토합니다."
                : "For automation, mobility, inspection, and other high-reliability projects, we review optical modules, lasers, scanners, and metrology tools as one application flow."}
            </p>
          </div>
          <div className="projectIntroVisual">
            <Image
              src="/applications/automotive-lidar.png"
              alt={isKo ? "LiDAR 프로젝트 이미지" : "LiDAR project image"}
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
        </section>

        <section className="container projectFeatureGrid" aria-label={isKo ? "프로젝트 주요 검토 항목" : "Project benefits"}>
          {benefits.map((item, index) => (
            <div key={item} className="projectFeatureItem">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </section>

        <section className="container projectModuleSection">
          <div className="projectSectionHead">
            <span>{isKo ? "구성 모듈" : "Modules"}</span>
            <h2>{isKo ? "프로젝트 적용 가능 제품군" : "Applicable product groups"}</h2>
          </div>
          <div className="projectModuleGrid">
            {projectModules.map((module) => (
              <article key={module.titleEn} className="projectModuleCard">
                <div className="projectModuleMedia">
                  <Image
                    src={module.image}
                    alt={isKo ? module.titleKo : module.titleEn}
                    fill
                    sizes="(max-width: 760px) 100vw, 260px"
                  />
                </div>
                <div className="projectModuleCopy">
                  <h3>{isKo ? module.titleKo : module.titleEn}</h3>
                  <p>{isKo ? module.bodyKo : module.bodyEn}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container projectContactBand">
          <div>
            <span>{isKo ? "프로젝트 문의" : "Project inquiry"}</span>
            <h2>{isKo ? "프로젝트 요구사항을 공유해 주세요." : "Share your project requirements."}</h2>
          </div>
          <Link href={`/${locale}/contact/quote`}>{isKo ? "문의하기" : "Contact us"}</Link>
        </section>
      </main>
    </div>
  );
}
