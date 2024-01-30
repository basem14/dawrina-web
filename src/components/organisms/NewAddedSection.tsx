import * as React from 'react';
// atoms
import Section from '../atoms/Section';
import SectionTitle from '../atoms/SectionTitle';
import Typography from '../atoms/Typography';
import Box from '../atoms/Box';

// molecules
import PrincipleCardList from '../molecules/PrincipleCardList';

// react-bootstrap
import {
    Container,
    Row,
    Col,
    ListGroup
} from 'react-bootstrap';


const PRINCIPLES_DATA = [
    {
        id: '1',
        title: 'الجودة',
        description: 'من المؤكد أن مصلحة عملائنا هي أولى أولوياتنا دائما، لأننا نطمح لبناء علاقات قوية طويلة الأمد ومثمرة مع العديد من فئات العملاء، لذلك نعمل على فهم احتياجاتهم وتقديم حلول عملية وسريعة من خلال خدماتنا عالية الجودة يقودها عدد كبير من المحامين والقانونيين المرخصين في المملكة العربية السعودية، حيث يعمل فريقنا مع كل عميل بطرق مبتكرة تعكس رؤيتهم وتحقق رغباتهم لضمان وصولهم إلى أهدافهم وتوفير حلول مستدامة لمشاكلهم وتساؤلاتهم.'
    },
    {
        id: '2',
        title: 'الثقة',
        description: 'لا شك أن الثقة في مجال المحاماة والإستشارات القانونية هي أهم عوامل النجاح، بل هي الأساس لبناء العلاقات القوية والمستمرة مع العملاء، لذلك فإن منصة شورى الرقمية تعمل على انتقاء أفضل المحامين القانونيين الذين يتمتعون بالشفافية والمصداقية والجودة العالية في مجال أعمالهم واحترام مبادئ مهنتهم، حتى يكونوا جديرين بالثقة التي يبحث عنها العملاء أولا عند اختيار المحامي القانوني الذي سيتولى قضاياهم.'
    },
    {
        id: '3',
        title: 'الخصوصية',
        description: 'إن مجرد احتمالية إساءة استخدام المعلومات الشخصية الحساسة قد يؤدي إلى اتخاذ إجراءات تشريعية وتنظيمية في المملكة العربية السعودية بشكل صارم، وذلك نتيجة لما تسببه هذه الإساءات من مخاطر عالية ولاأخلاقية، لذلك فقد حرصنا في منصتنا على تطبيق خصوصية البيانات والأمن السيبراني (الإلكتروني)، للمساعدة في تبني ممارسات الخصوصية والأمن السليمة، وضمان الامتثال التنظيمي والقانوني والحفاظ على مميزات المنصة التنافسية.'
    },
]



export default function NewAddedSection() {
    return (
    <Section
      id="features"
      className='p-0'
    >

        <Container
         fluid
        >
            <Row>
               
                <Col xs={12} md={6} lg={6} xl={6} >
                  <Box
                    style={{
                        padding: 40,
                    }}
                  >
                    <Container>

                    <SectionTitle
                        title="الرؤية"
                    />

                        <Typography
                            variant="h5"
                            gutterBottom
                            style={{
                                fontSize: '1.5rem',
                                lineHeight: '1.5',
                                textAlign: 'right',
                                padding: '0rem 1rem',
                            }}
                        >

                            تسهيل الوصول لكافة الخدمات القانونية عالية الجودة في مكان واحد لتوفير الوقت والجهد وبأسعار منافسة.
                        </Typography>

                     </Container>
                  </Box>
                </Col>



                <Col xs={12} md={6} lg={6} xl={6} >
                  <Box
                    style={{
                        padding: 40,
                        backgroundColor: 'whitesmoke',
                    }}
                  >
                    <Container>

                    <SectionTitle
                        title="الرسالة"
                    />

                        <Typography
                            variant="h5"
                            gutterBottom
                            style={{
                                fontSize: '1.5rem',
                                lineHeight: '1.5',
                                textAlign: 'right',
                                padding: '0rem 1rem',
                            }}
                        >
                            تقديم خدمات قانونية عالية الجودة من خلال حلول إبداعية وفعالة مع التركيز على الخصوصية وسهولة الاتصال والاستجابة والاهتمام بالتفاصيل.
                        </Typography>

                     </Container>
                  </Box>
                </Col>


                <Col xs={12} md={12} lg={12} xl={12} className="m-0">
                 <Box
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '1rem 0rem',
                        background: 'whitesmoke'
                    }}
                    className="mt-2"
                 >
                    <SectionTitle
                        title="القيم"
                    />
                 </Box>
                </Col>



               


                <Col xs={12} md={12} lg={12} xl={12} className="m-0">

                   <PrincipleCardList
                     principles={PRINCIPLES_DATA}
                    />
                    <hr  className="m-0" style={{ background: '#bdbdbd' }}/>
                </Col>







            </Row>
        </Container>
    </Section>
    );
}
