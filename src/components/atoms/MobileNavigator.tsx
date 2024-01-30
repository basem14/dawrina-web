import { Icon } from '@iconify/react'
import { Link } from 'gatsby'
import React from 'react'
import { Stack } from 'react-bootstrap'
import styled from 'styled-components'
import ButtonLink from './ButtonLink'

const MobileNavigator = ({link,title} : {link:any , title:string}) => {

    const ButtonLink = styled(Link)`
  
`

  return (
    
    <Stack dir='rtl' direction='horizontal' className='align-items-center my-5 px-3'>

      <div className='mx-auto'>
        <h1 style={{color:'var(--text-dark',fontSize:'2.5rem',paddingRight:'3rem'}} className='mx-auto fw-bold'>{title}</h1>
        </div>
        
      <ButtonLink to={link}>
        <Icon cursor='pointer'  fontSize={'3.5rem'} color='var(--text-gray)' icon="ic:round-arrow-back-ios-new" />
     </ButtonLink>
     <div>
      
     </div>
    </Stack>
  )
}

export default MobileNavigator