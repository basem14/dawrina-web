import * as React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
// swiper
import Slider from "react-slick";
// react-bootstrap
import { Stack, Carousel } from "react-bootstrap";
// atoms
import Section from "../atoms/Section";
import SectionTitle from "../atoms/SectionTitle";
import Avatar from "../atoms/Avatar";
// molecules
import FeatureList from "../molecules/FeatureList";
import CarouselItemList from "../molecules/CarouselItemList";
import { StaticImage } from "gatsby-plugin-image";

const CUSTOMER_REVIEWS = [
  {
    id: 0,
    name: "Mohammed aldwsry",
    review: "موقع متميز يشكرون عليه ، سهولة الاستشارة بمبلغ مناسب",
    title: "عميل",
  },
  {
    id: 1,
    name: "محمد ابوريتال",
    review: "تطبيق متميز",
    title: "عميل",
  },
  {
    id: 2,
    name: "Ali Almashari",
    review: "اعجبني جداً الاسم",
    title: "عميل",
  },
  {
    id: 3,
    name: "دحدحين",
    review:
      "احلى شي لما اسأل سؤال فخمس ثواني ويعطيني الرد فعشر دقايق من جميع الزوايا يعطيكم العافية",
    title: "عميل",
  },
  {
    id: 4,
    name: "Muhammad Wilayat Hussain",
    review: "Good application for law consultation",
    title: "عميل",
  },
  {
    id: 5,
    name: "Fahad Almoutiri",
    review: "رائع جدا",
    title: "عميل",
  },
  {
    id: 6,
    name: "Alayad 8842",
    review: "ممتاز",
    title: "عميل",
  },
];

const StyleReviewSection = styled(Section)`
  height: 100%;
  padding-bottom: 11rem !important;
`;

const ReviewWarrp = styled.div`
  padding: 10px;
  max-width: 685px;
`;

const ReviewAvatar = styled.div`
  width: 70px;
  height: 70px;
`;

const ReviewContent = styled.h3`
  text-align: center;
  font: normal normal normal 24px/67px El Messiri;
  letter-spacing: 0px;
  color: #173039;
  opacity: 1;
  line-height: 1.5;
  margin-bottom: 5rem;
`;

const ReviewAuthor = styled.div``;

const ReviewAuthorName = styled.h3`
  text-align: center;
  font: normal normal normal 28px/44px El Messiri;
  letter-spacing: 0px;
  color: #173039;
  opacity: 1;
  font-size: larger;
`;

const ReviewAuthorTitle = styled.div`
  text-align: left;
  font: normal normal normal 14px/22px El Messiri;
  letter-spacing: 0px;
  color: #173039;
  opacity: 0.6;
`;

export default function ReviewSection() {
  return (
    <StyleReviewSection id="reviews">
      <Stack
        direction="horizontal"
        gap={3}
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          margin: "30px 0",
        }}
      >
        <ReviewAvatar>
          <StaticImage
            src="./../../images/clients/default.svg"
            alt="google"
            placeholder="blurred"
          />
        </ReviewAvatar>

        <ReviewAvatar
          style={{
            display: "block",
            padding: "5px",
            border: "1px solid",
            borderRadius: "50%",
            color: "#cc9a28",
          }}
        >
          <StaticImage
            src="./../../images/clients/active-customer.svg"
            alt="google"
            placeholder="blurred"
          />
        </ReviewAvatar>

        <ReviewAvatar>
          <StaticImage
            src="./../../images/clients/default.svg"
            alt="google"
            placeholder="blurred"
          />
        </ReviewAvatar>
      </Stack>

      {/*** ReviewWarrp */}
      <Carousel>
        {CUSTOMER_REVIEWS.map((review, index) => {
          return (
            <Carousel.Item key={index} interval={1500}>
              <ReviewWarrp>
                <ReviewContent>{review.review}</ReviewContent>

                <ReviewAuthor>
                  <Stack
                    // direction="horizontal"
                    gap={3}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Icon
                      icon="fe:quote-left"
                      height="40"
                      width="40"
                      color="#cc9a28"
                    />

                    <ReviewAuthorName>{review.name}</ReviewAuthorName>

                    <ReviewAuthorTitle>{review.title}</ReviewAuthorTitle>
                  </Stack>
                </ReviewAuthor>
              </ReviewWarrp>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </StyleReviewSection>
  );
}
