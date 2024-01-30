import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import Tabs from '../atoms/Tabs';
import ServiceTab from '../atoms/ServiceTab';
import { 
  Col,
} from 'react-bootstrap';

const ServiceCol = styled(Col)``;

type CardProps = {
  tabs: {
    value: string;
    label: string;
    icon: string;
    description: string;
    subDescription: string;
  }[];
  currentTab: string;
  onTabChange: (tabId: string) => void;
  tabStyles?: CSSProperties
}

export default function ServiceTabList({ tabs, currentTab, onTabChange, tabStyles = {} }: CardProps) {
  return (
      <Tabs
       style={{
        position: 'relative',
        top: 56,
        ...tabStyles
       }}
      >
      {
        tabs.map(tab => {
          const { value, label, icon } = tab;
          const isActive = currentTab === value?true:false;
          return (
          <ServiceCol 
            key={value}
            xs={6}
            md
            className='col-6'
          >
            <ServiceTab
              onChange={() => onTabChange(value)}
              active={isActive}
              label={label}
              value={value}
              icon={icon}
            />
          </ServiceCol>
          )
        })
      }        
      </Tabs>
    )
  }