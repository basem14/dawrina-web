import * as React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
// swiper
import Slider from "react-slick";
// react-bootstrap
import { Stack, Carousel} from 'react-bootstrap';
// atoms
import Section from '../atoms/Section';
import SectionTitle from '../atoms/SectionTitle';
import Avatar from '../atoms/Avatar';
// molecules
import FeatureList from '../molecules/FeatureList';
import { title } from 'process';





type CarouselItemListProps = {
    reviews: {
        id: number,
        name: string,
        review: string,
        title: string
    }[]
}


const ReviewWarrp = styled.div`
  padding: 10px;
`



const ReviewAvatar = styled.div`
  font-size: 90px;
`




const ReviewContent = styled.h3`
  text-align: center;
  font: normal normal normal 24px/67px El Messiri;
  letter-spacing: 0px;
  color: #173039;
  opacity: 1;
  line-height: 1.5;
`


const ReviewAuthor = styled.div`
`

const ReviewAuthorName = styled.h3`
  text-align: center;
  font: normal normal normal 28px/44px El Messiri;
  letter-spacing: 0px;
  color: #173039;
  opacity: 1;
  font-size: larger;
`

const ReviewAuthorTitle = styled.div`
  text-align: left;
  font: normal normal normal 14px/22px El Messiri;
  letter-spacing: 0px;
  color: #173039;
  opacity: 0.6;
`




export default function CarouselItemList({ reviews }: CarouselItemListProps) {

    return (
        <>
        {
            reviews.map((review, index) => {
                return (
                <Carousel.Item interval={1500} key={index}>
                        <ReviewWarrp>


                    <ReviewContent>
                        {review.review}
                    </ReviewContent>



                    <ReviewAuthor>
                    <Stack
                    // direction="horizontal"
                        gap={3}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        
                        <Icon 
                        icon="fe:quote-left" 
                        height="40"
                        width="40"
                        color="#cc9a28"
                        />


                        <ReviewAuthorName>
                            {review.name}
                        </ReviewAuthorName>


                        <ReviewAuthorTitle>
                            {review.title}
                        </ReviewAuthorTitle>
                        

                    </Stack>
                    </ReviewAuthor>

                    </ReviewWarrp>
                    </Carousel.Item>
              
                )
            })
        }


  </>
    );
}
