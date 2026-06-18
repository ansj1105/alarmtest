export type ProductMaker = {
  name: string;
  slug: string;
  logoUrl: string;
  website: string | null;
  summaryKo: string;
  summaryEn: string;
  descriptionKo: string;
  descriptionEn: string;
};

function maker(
  name: string,
  slug: string,
  logoUrl: string,
  website: string | null,
  summaryKo: string,
  summaryEn: string,
  descriptionKo?: string,
  descriptionEn?: string,
): ProductMaker {
  return {
    name,
    slug,
    logoUrl,
    website,
    summaryKo,
    summaryEn,
    descriptionKo:
      descriptionKo ||
      `${name} 제조사 제품은 신호텍이 공정 조건과 장비 구성에 맞춰 사양 검토, 적용 가능성 확인, 기술 상담을 지원합니다.`,
    descriptionEn:
      descriptionEn ||
      `${name} products are reviewed by SHINHOTEK according to process requirements and equipment configuration, including specification checks, applicability review, and technical consultation.`,
  };
}

export const productCategoryMakers: Record<string, ProductMaker[]> = {
  laser: [
    maker("Spark Lasers", "spark-lasers", "/makers/spark-lasers.png", "https://spark-lasers.com/", "초단펄스 레이저", "Ultrafast lasers"),
    maker("Iradion", "iradion", "/makers/iradion.png", "https://iradionlaser.com/", "세라믹 CO2 레이저", "Ceramic CO2 lasers"),
    maker("MLase", "mlase", "/makers/mlase.png", "https://mlase.com/", "산업용 레이저 소스", "Industrial laser sources"),
    maker("Coherent", "coherent", "/makers/coherent.png", "https://www.coherent.com/ko", "레이저 및 광학 플랫폼", "Laser and optics platforms"),
    maker("SemiNex", "seminex", "/makers/seminex.png", "https://seminex.com/", "고출력 다이오드 레이저", "High-power diode lasers"),
    maker("Monocrom", "monocrom", "/makers/monocrom.png", "https://monocrom.com/", "다이오드 레이저 모듈", "Diode laser modules"),
    maker("Optical Engines", "optical-engines", "/makers/optical-engines.webp", "https://opticalenginesinc.com/", "레이저 엔진", "Laser engines"),
  ],
  "laser-scanner": [
    maker("SCANLAB", "scanlab", "/makers/scanlab.jpg", "https://www.scanlab.de/ko", "스캔 헤드 및 제어", "Scan heads and controls"),
  ],
  "laser-metrology": [
    maker("LaserPoint", "laserpoint", "/makers/laserpoint.png", "https://www.laserpoint.eu/", "파워/에너지 측정", "Power and energy measurement"),
    maker("LUMOS", "lumos", "/makers/lumos.png", "https://www.lumosity.co.kr/", "빔 프로파일링", "Beam profiling"),
  ],
  "optical-solution": [
    maker("AdlOptica", "adloptica", "/makers/adloptica.webp", "https://www.adloptica.com/", "빔 쉐이핑", "Beam shaping"),
    maker("Cailabs", "cailabs", "/makers/cailabs.png", "https://www.cailabs.com/", "광학 변환 솔루션", "Optical transformation solutions"),
    maker("PowerPhotonic", "powerphotonic", "/makers/powerphotonic.png", "https://www.powerphotonic.com/", "자유형상 광학", "Freeform optics"),
    maker("MLOptic", "mloptic", "/makers/mloptic.png", "https://www.mloptic.com/", "정밀 광학 모듈", "Precision optical modules"),
  ],
  "coating-solution": [
    maker("Optoman", "optoman", "/makers/optoman.png", "https://www.optoman.com/", "레이저 옵틱 코팅", "Laser optics coating"),
    maker("ULO Optics", "ulo-optics", "/makers/ulo-optics.png", "https://www.ulooptics.com/", "광학 부품 및 코팅", "Optics and coating"),
    maker("Zenops", "zenops", "/makers/zenops.png", "https://zenops.co.kr/default/main/main.php", "광학 부품 및 코팅 대응", "Optics and coating support"),
  ],
  "beam-delivery": [
    maker("PowerPhotonic", "powerphotonic", "/makers/powerphotonic.png", "https://www.powerphotonic.com/", "빔 딜리버리 광학", "Beam delivery optics"),
    maker("Beam Delivery parts", "beam-delivery-parts", "/makers/beam-delivery-parts.svg", null, "빔 전송 부품", "Beam delivery parts"),
  ],
};

export function getProductMaker(productSlug: string, makerSlug: string) {
  return productCategoryMakers[productSlug]?.find((makerItem) => makerItem.slug === makerSlug);
}
