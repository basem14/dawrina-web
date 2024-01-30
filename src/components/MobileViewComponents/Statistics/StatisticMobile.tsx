import React from 'react'
import { Stack } from 'react-bootstrap'

const StatisticMobile = () => {
  return (
    <Stack direction='vertical' className='align-items-center my-5' gap={3} >

 <Stack
        direction="horizontal"
        className="justify-content-center px-5"
        gap={4}
      >
        <div
          style={{ border: "1px solid #F6EBD3",width:'10%'  }}
        ></div>

<h1 className="fw-bolder text-center">إنجازات منصة شورى</h1>
        <div
          style={{ border: "1px solid #F6EBD3",width:'10%' }}
        ></div>
      </Stack>


<Stack  className='Stat-Text'>
    <h1>15+</h1>
    <h2>تخصص قانوني</h2>
</Stack>

<Stack className='Stat-Text'>
    <h1>6000+</h1>
    <h2>استشارة قانونية</h2>
</Stack>

<Stack className='Stat-Text'>
    <h1>35,000+</h1>
    <h2>مستخدم نشط</h2>
</Stack>



</Stack>

  )
}

export default StatisticMobile