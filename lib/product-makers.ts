export type ProductMaker = {
  name: string;
  slug: string;
  logoUrl: string;
  website: string | null;
  groupKo: string | null;
  groupEn: string | null;
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
  groupKo: string | null,
  groupEn: string | null,
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
    groupKo,
    groupEn,
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

const laserGroups = {
  ultrafast: { ko: "Picosecond / Femtosecond", en: "Picosecond / Femtosecond" },
  co2: { ko: "CO2", en: "CO2" },
  diode: { ko: "Diode laser", en: "Diode laser" },
  excimer: { ko: "Excimer", en: "Excimer" },
  platform: { ko: "Laser", en: "Laser" },
};

export const productCategoryMakers: Record<string, ProductMaker[]> = {
  laser: [
    maker("Spark Lasers", "spark-lasers", "/makers/spark-lasers.png", "https://spark-lasers.com/", laserGroups.ultrafast.ko, laserGroups.ultrafast.en, "초단펄스 레이저", "Ultrafast lasers"),
    maker("Iradion", "iradion", "/makers/iradion.png", "https://iradionlaser.com/", laserGroups.co2.ko, laserGroups.co2.en, "세라믹 CO2 레이저", "Ceramic CO2 lasers"),
    maker("Dilas", "dilas", "/product-placeholder.svg", null, laserGroups.diode.ko, laserGroups.diode.en, "다이오드 레이저", "Diode lasers"),
    maker("SemiNex", "seminex", "/makers/seminex.png", "https://seminex.com/", laserGroups.diode.ko, laserGroups.diode.en, "고출력 다이오드 레이저", "High-power diode lasers"),
    maker("Monocrom", "monocrom", "/makers/monocrom.png", "https://monocrom.com/", laserGroups.diode.ko, laserGroups.diode.en, "다이오드 레이저 모듈", "Diode laser modules"),
    maker("Optical Engines", "optical-engines", "/makers/optical-engines.webp", "https://opticalenginesinc.com/", laserGroups.diode.ko, laserGroups.diode.en, "레이저 엔진", "Laser engines"),
    maker("MLase", "mlase", "/makers/mlase.png", "https://mlase.com/", laserGroups.excimer.ko, laserGroups.excimer.en, "산업용 엑시머 레이저", "Industrial excimer lasers"),
    maker("Coherent", "coherent", "/makers/coherent.png", "https://www.coherent.com/ko", laserGroups.platform.ko, laserGroups.platform.en, "레이저 및 광학 플랫폼", "Laser and optics platforms"),
  ],
  "laser-scanner": [
    maker("SCANLAB", "scanlab", "/makers/scanlab.jpg", "https://www.scanlab.de/ko", "Scanlab", "Scanlab", "스캔 헤드 및 제어", "Scan heads and controls"),
  ],
  "laser-metrology": [
    maker("LaserPoint", "laserpoint", "/makers/laserpoint.png", "https://www.laserpoint.eu/", "Laser Point", "Laser Point", "파워/에너지 측정", "Power and energy measurement"),
    maker("LUMOS", "lumos", "/makers/lumos.png", "https://www.lumosity.co.kr/", "LUMOS", "LUMOS", "빔 프로파일링", "Beam profiling"),
  ],
  "optical-solution": [
    maker("AdlOptica", "adloptica", "/makers/adloptica.webp", "https://www.adloptica.com/", "Beam Shaping", "Beam Shaping", "빔 쉐이핑", "Beam shaping"),
    maker("Cailabs", "cailabs", "/makers/cailabs.png", "https://www.cailabs.com/", "Optical Transformation", "Optical Transformation", "광학 변환 솔루션", "Optical transformation solutions"),
    maker("PowerPhotonic", "powerphotonic", "/makers/powerphotonic.png", "https://www.powerphotonic.com/", "Freeform Optics", "Freeform Optics", "자유형상 광학", "Freeform optics"),
    maker("MLOptic", "mloptic", "/makers/mloptic.png", "https://www.mloptic.com/", "Precision Optics", "Precision Optics", "정밀 광학 모듈", "Precision optical modules"),
  ],
  "coating-solution": [
    maker("Optoman", "optoman", "/makers/optoman.png", "https://www.optoman.com/", "Laser Optics Coating", "Laser Optics Coating", "레이저 옵틱 코팅", "Laser optics coating"),
    maker("ULO Optics", "ulo-optics", "/makers/ulo-optics.png", "https://www.ulooptics.com/", "Laser Protection Windows", "Laser Protection Windows", "광학 부품 및 코팅", "Optics and coating"),
    maker("Zenops", "zenops", "/makers/zenops.png", "https://zenops.co.kr/default/main/main.php", "Optical Coating", "Optical Coating", "광학 부품 및 코팅 대응", "Optics and coating support"),
    maker("Photonic Tools", "photonic-tools", "/makers/photonic-tools.png", "https://www.photonic-tools.de/", "Industrial Ultrafast Beam Delivery", "Industrial Ultrafast Beam Delivery", "산업용 초고속 빔 전달", "Industrial ultrafast beam delivery"),
  ],
  "beam-delivery": [
    maker("Beam Delivery parts", "beam-delivery-parts", "/makers/beam-delivery-parts.svg", null, "Beam Delivery Parts", "Beam Delivery Parts", "빔 전송 부품", "Beam delivery parts"),
  ],
};

export function getProductMaker(productSlug: string, makerSlug: string) {
  return productCategoryMakers[productSlug]?.find((makerItem) => makerItem.slug === makerSlug);
}
