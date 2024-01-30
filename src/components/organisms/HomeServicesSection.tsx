import * as React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from "framer-motion"
// molecules
import ServiceTabList from '../molecules/ServiceTabList';
import TabPane from '../atoms/TabPane';

export default function HomeServicesSection({ showTabPane = true, headerClassName = '',tabStyles }:{showTabPane?:boolean; headerClassName?: string;tabStyles?: React.CSSProperties}) {

const data = useStaticQuery(graphql`
  query IndexCarImagesQuery {
    consulting: file(relativePath: { eq: "services/personal.png" }) {
          publicURL
    }
    contract: file(relativePath: { eq: "services/contract.png" }) {
         publicURL
    }
    finantial: file(relativePath: { eq: "services/financial.png" }) {
         publicURL
    }
    cases: file(relativePath: { eq: "services/cases.png" }) {
         publicURL
      }
      nots: file(relativePath: { eq: "services/note.png" }) {
          publicURL
      }
  }
`)

  const TAB_TITLES = [
    {
      value: 'consulting',
      label: 'الاستشارات القانونية',
      icon: data.consulting.publicURL,
      description: "نحن نعمل على تقديم أفضل الاستشارات القانونية من ذوي الخبرة والتخصص، وخاصة فيما يتعلق بالمواقف الملحة التي تتطلب إعطاء الحلول السديدة والموثوقة، حيث تقدم منصتنا مجموعة متميزة من الاستشارات القانونية الالكترونية في العديد من الجوانب الحياتية التي نساعد من خلالها عملائنا من جميع الفئات على تحديد نوع مشكلاتهم و طرح الحلول الملائمة لها بسرعة ودقة، ومن ثم تلبية احتياجاتهم سواء كانوا أفراد.",
      subDescription: "او شركات ومؤسسات و تشمل تخصصاتنا كل من: الأحوال الشخصية، الخلافات العمالية، القضاء التجاري، الجرائم المعلوماتية، القضايا العقارية، قسمة التركات، الزكاة والضريبة، القضايا الجنائية، الأخطاء الطبية، القضايا التمويلية، القضايا التأمينية، القضايا الإدارية، والعديد من المسائل القانونية الأخرى."
    },
    {
      value: 'contract',
      label: 'خدمات العقود',
      icon: data.contract.publicURL,
      description: "يعد العقد شريعة المتعاقدين، وهو حجر الأساس لضمان الحقوق والواجبات المشروعة بين العديد من الجهات وكذلك بين أفراد المجتمع، ولذلك فإن الاهتمام بصياغة العقود بالشكل القانوني الصحيح يُجنب جميع الأطراف اللجوء للنزاعات القضائية بمختلف أنواعها، وهنا يجب الرجوع لخبراء صياغة العقود المتمرسين الذين هم على دراية كاملة بالقواعد القانونية،",
      subDescription: "و المتعلقة بكافة أنواع العقود، سواء كانت عقود ملكية أو بيع أو إيجار أو شراكة غيرها من أنواع العقو و نحن في شورى نعمل على تلبية احتياجات عملائنا القانونية بشكل مبتكر وعلى أيدي مجموعة من المحامين المتخصصين في كافة فروع القانون، وذلك لتقديم خدمات إعداد وصياغة العقود القانونية بجميع أنواعها."
    },
    {
      value: 'finantial',
      label: 'المطالبات المالية',
      icon: data.finantial.publicURL,
      description: "لا شك أن المطالبة بالقضايا المالية والحقوقية ذات أهمية كبرى لدى العديد من الأفراد والشركات، وهي الحالات التي لا يستجيب فيها المدين لمطالب الدائن بالدفع أو تسليم الدائن لمستحقاته، ولذلك فإن شورى يجمع نخبة من المحامين الذين قاموا بتقديم أبرز،",
      subDescription: "خدمات المطالبات المالية للدفاع عن موكليهم وحماية حقوقه و من ضمنها: التعويض عن أضرار التقاضي، إثبات رهن أو بيع مرهون، أتعاب المحامين أو الوكلاء، محاسبة وكيل، رد مسروق، أجرة عقار، الهبات، شراكة، الأرث، ديات، وغيرهم الكثير."
    },
    {
      value: 'cases',
      label: 'القضايا',
      icon: data.cases.publicURL,
      description: "أياً كانت أنواع القضايا (جنائية، مالية ، عمالية ، تجارية، أحوال شخصية ) وغيرها من القضايا، ففريق شورى المتكون من العديد من المحامين القانونيين المرخصين من وزارة العدل السعودية سوف يُبادر بتلقي جميع استفساراتكم القضائية والرد على أسئلتكم بمنتهى الجدية والسرية التامة دون كلل أو تعب، فنحن مميزون في التعامل مع القضايا الشائكة،",
      subDescription: "والتي تحتاج إلى خبراء مخضرمين من ذوي الحنكة في التعامل مع الثغرات القانونية وحل النزاعات المعقد فالآن في قسم خدمات القضايا يمكنك الاستعلام عن كل ما تختص به القضايا مثل بيانات الدعوى، حدوث استئناف، المطالبات، وكل أبعاد القضايا بوجه عام."
    },
    {
      value: 'nots',
      label: 'المذكرات القانونية',
      icon: data.nots.publicURL,
      description: "إذا كنت فرد أو شركة وترغب في صياغة مذكرة قانونية في دعوى مدنية أو تجارية وفقاً للتشريعات في المملكة العربية السعودية، فقد يقوم الخبراء القانونيين لمنصة شورى بتوفير نموذج فريد من صياغة المذكرات القانونية وذلك عن طريق القدرة العالية على التحليل والقياس للمواقف من خلال دراسة القوانين والأحكام الصادرة من المحاكم، والجودة في استخلاص النتائج وقياسها، وتناول الموضوع بكافة جوانبه ومراعاة الدقة،",
      subDescription: "والواقعية في توثيق الأدلة والمستندات للوصول إلى تسلسل منطقي للنتيجة النهائي و من هنا فإنه يتعين على المحامي دراسة كافة وقائع القضية، وإجراء المناقشات الضرورية مع ذوي الشأن، ومن ثم اللجوء إلى النصوص القانونية الحديثة، في شورى نقدم الضمان الحقيقي لصياغة مذكرات قانونية على أعلى درجات الاحترافية."
    }
  ];

  const [currentTab, setTabs] = React.useState('consulting');
  const onTabChange = (tabId: string) => {
    setTabs(tabId);
  };

    return (
     <section id="services" className="services-section">
        <h2 className={`underline-hover col-md-2 text-center mt-8 mb-5 ${headerClassName}`}>خدماتنا</h2>
        {/* Nav tabs */}
        <ServiceTabList 
          tabs={TAB_TITLES}
          currentTab={currentTab}
          onTabChange={onTabChange}
          tabStyles={tabStyles}
        />
        {/* Tab panes */}
        {showTabPane &&
          <div className="tab-content">
              <TabPane 
                currentTab={TAB_TITLES.find(tab => tab.value === currentTab) || TAB_TITLES[0]}
              />
          </div>
         }

      </section>
    );
}