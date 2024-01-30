import * as React from 'react';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import styled from 'styled-components';
// atoms
import Section from '../atoms/Section';
import SectionTitle from '../atoms/SectionTitle';
import Box from '../atoms/Box';
// molecules
import FormComplaints from '../molecules/FormComplaints';
import FormSuggestions from '../molecules/FormSuggestions';
import Typography from '../atoms/Typography';
import useMediaQuery from '../../hooks/useMediaQuery';


const TapRoot = styled.div`
  margin: 0 auto;
  max-width: 600px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem 0;
    width: 100%;
    max-width: 100%;
    padding: 20px;
  }
`;



const TabList = styled(Stack)`
  justify-content: center;
  list-style-type: none;
  margin-top: 2rem;
  margin-bottom: 5rem;
  width: 100%;
`;



const TabItem = styled.div`

  text-align: center;

  @media (max-width: 768px) {
    width: 50%;
  }
`;



const TabButton = styled.a`
  padding: 1rem 8rem;
  font-weight: bold;
  color: black !important;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  user-select: none;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    color: #cc9a28;
  }

  & .active {
    color: #cc9a28;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
  }


`;

const BusinessAboutHeader = styled(Typography)`
    color: #DDB669;
    opacity:1;
    text-align:center;
    //margin-bottom: 2rem;
    font-size: 55px !important;
    /*font-weight: bold !important;*/

    //md
    @media (max-width: 1212px) {
        font-size: 45px !important;
    }

    @media (max-width: 991px) {
        font-size: 40px !important;
    }

    //sm
    @media (max-width: 575px) {
        font-size: 4.5rem !important;
    }

`;



export default function ComplaintsAndSuggestionSection() {


  const [currentForm, setCurrentForm] = React.useState('complaints');
  const { isMobile } = useMediaQuery();


  const handleFormChange = (form: string) => {
    setCurrentForm(form);
  }


  const TAB_DATA = [
    {
      title: 'الشكاوى',
      value: 'complaints',
      component: <FormComplaints />,
    },
    {
      title: 'المقترحات',
      value: 'suggestions',
      component: <FormSuggestions />,
    }
  ];


  return (
    <Section
      style={{
        background: '#07242E',
      }}
      id="about-business "
    >

      <Container fluid className='BF-Card-2 mx-auto' >

        <Row>
          <Col xs={12} md={12}>
            <BusinessAboutHeader
              component="h1"
              variant="h1"
              className="mt-5 "
            >

              تواصل معنا

            </BusinessAboutHeader>

          </Col>
        </Row>

        <Row >

          {/** title */}
          <div style={{ background: "radial-gradient(at 70% ,#0F242D1A 0%,#FBFBFB00 80%)" }}>
            <div style={{ width:`${isMobile?"95%":"70%"}`, margin: '1rem 0' }} className=" mx-auto">
              <Container fluid >
                <Row >
                  <Col sm={12} md={12} lg={12}  >
                    <div style={{ width: '100%', minHeight: '65%' }}
                      className=' d-flex flex-column align-middle justify-content-between mt-5 gap-4 mx-auto'
                    >
                      {TAB_DATA.map((tab) => {
                        const isMatched = tab.value === currentForm;
                        return isMatched && <Box key={tab.value}> {tab.component} </Box>;
                      })}
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

        </Row>



      </Container>
    </Section>
  );
}
