import React from 'react'
import { Accordion } from 'react-bootstrap'

const AccordionComp = ({title,body,business} : {title:string,body:any,business:boolean}) => {
  return (

    <Accordion  dir='rtl' className={business?'accordion-2':''} style={{textOverflow:'clip'}}>
    <Accordion.Item  eventKey='0'> 
      <Accordion.Header style={{color:business?"white":undefined}} >
          <span style={{width:'100%',textAlign:'right',color:business?"white":undefined}}>
          {title}
          </span>
      </Accordion.Header>
      <Accordion.Body  >
        {body}
      </Accordion.Body>
    </Accordion.Item>
    </Accordion>

  )
}

export default AccordionComp