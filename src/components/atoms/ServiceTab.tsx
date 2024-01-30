import React from 'react';
import Tab from '../atoms/Tab';
import Typography from '../atoms/Typography';
import { 
  Card,
  Figure
} from 'react-bootstrap';
import styled from 'styled-components';

const ServiceCard = styled(Card)`
  border: none;
  padding: 40px 0px;
  margin-bottom: 1rem!important;
  border: none;
  &:active {
    background-color: #f5f5f5;
  }

  .active-service {
    background-color: #cc9a28;
  }

  &.active-service figure {
    filter: invert(1);  
  }
`;

const TabIcon = styled(Figure)`
  display: block;
  align-self: center;
  height: 70px
  width: 60px
  text-align: 'center'
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const TabTitle = styled(Typography)`
  display: block;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TabIconImage = styled.img`
  display: block;
  align-self: center;
  height: 70px
  width: 60px
  text-align: 'center'
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

type ServiceTabProps = {
    onChange: (tabId: string) => void;
    active: any;
    label: string;
    value: string;
    icon: any;
}

export default function ServiceTab({
    onChange,
    active,
    label,
    value,
    icon
}: ServiceTabProps) {

    return (
      <Tab
        onChange={() => onChange(value)}
        active={active}
      >
        <ServiceCard
            text='dark'
            className={`mb-2 mx-auto ${active ? 'active-service' : ''}`}
            active={active}
            style={{backgroundColor:active? '#cc9a28' : '#fff'}}
        >
          <TabIcon className={`figure-personal mb-0 `} >
            <TabIconImage 
              src={icon} 
              alt={label}
            />
          </TabIcon>

          <Card.Body>
              <Card.Title>
                <TabTitle
                  variant="h3"
                  className={`text-center mb-0 ${active ? 'text-white' : ''}`}
                >
                  {label}
                </TabTitle>
              </Card.Title>
          </Card.Body>
        </ServiceCard>
      </Tab>
    )
}