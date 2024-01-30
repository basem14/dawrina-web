import * as React from "react";
// atoms
import Section from "../atoms/Section";
import SectionTitle from "../atoms/SectionTitle";
// molecules
import FeatureList from "../molecules/FeatureList";

const FEATUER_DATA = [
  "مجموعة من المحامين والمستشارين القانونيين ذو خبرة واسعة في جميع المجالات",
  " سهولة استخدام المنصة وتحديد موعد الاستشارة وفقاً لراحة العميل",
  "ضمان الحفاظ على سرية وخصوصية سجلات القضية وبيانات العميل",
  "تقديم خدمات عالية الجودة عن طريق متابعة تقييم الجلسات الاستشارية",
  "الاستجابة السريعة لشكاوى واقتراحات العملاء",
  "إمكانية الحصول على خدمات استشارية قانونية بتكلفة منافسة",
];

export default function HomeFeatureSection({
  mobileGrid,
  styles,
  titleStyles,
  sectionsTitle,
}: {
  mobileGrid?: number;
  styles?: React.CSSProperties;
  titleStyles?: React.CSSProperties;
  sectionsTitle?: Array<string>;
}) {
  return (
    <Section id="features">
      <SectionTitle className="underline-item bold" title="مميزات شورى" />

      <FeatureList
        isHome={true}
        features={FEATUER_DATA}
        mobileGrid={mobileGrid}
        styles={styles}
        sectionsTitle={sectionsTitle}
        titleStyles={titleStyles}
      />
    </Section>
  );
}
