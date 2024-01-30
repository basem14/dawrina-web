import * as React from 'react';
import styled from '@emotion/styled'
import { Icon } from '@iconify/react';
// atoms
import Section from '../atoms/Section';
import SectionTitle from '../atoms/SectionTitle';
import Typography from '../atoms/Typography';
import Box from '../atoms/Box';
// molecules

// react-bootstrap
import {
    Container,
    Row,
    Col,
    ListGroup
} from 'react-bootstrap';



const PrincipleCard = styled(Box)`
    font-weight: bold;
    color: #cc9a28;
    font-size: 23px;
    display: flex;
    /*&:nth-of-type(-n+2) {
        border-left: 1px solid #cc9a28;
    }*/
`



const PrincipleCardTitle = styled(Typography)`
    font-weight: bold;
    color: #cc9a28;
    font-size: 23px !important;
    padding-top: 10px !important;
    padding-bottom: 20px !important;
`

const PrincipleCardBody = styled(Typography)`
    font-size: 1.5rem !important;
    color: #173039;
    line-height: 1.5
`

const VerticalDivider = styled.hr`
    width: 1px; 
    height: auto !important; 
    display: inline-block
    margin-left: 10px;
    margin-right: 20px;
`


type PrincipleCardListProps = {
    principles: {
        id: string,
        title: string,
        description: string,
    }[]
}


export default function PrincipleCardList({
    principles
}: PrincipleCardListProps) {

  return (
    <Container>
    <Row>

      {principles.map((principle, index) => (
            <Col key={index} xs={12} md={4} lg={4} xl={4} className="m-0">
               <PrincipleCard>
                    <Box 
                      style={{
                        padding: '45px 0'
                     }}
                    >
                        <PrincipleCardTitle variant="h5" >
                            <Icon icon="ci:dot-03-m" />
                            {principle.title}
                        </PrincipleCardTitle>

                        <PrincipleCardBody variant="h6" >
                            {principle.description}
                        </PrincipleCardBody>
                    </Box>


                   {index !== 2 && <div className="vr ml-1 mr-1 " style={{ background: '#bfbfbf', margin: '0px 15px' }} />}


                </PrincipleCard>
             
            </Col>
    ))}

    </Row>
   </Container>
);
}