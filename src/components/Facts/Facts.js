import React from 'react';
import SlideFacts from "./SlideFacts";
import SwiperCore, {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import './facts.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination])

const Facts = ({title, slides}) => {
    const factsSliders=slides.map((slideInfo) => <SwiperSlide key={slideInfo.id}>
    <SlideFacts item={slideInfo} />
    </SwiperSlide>);

    return (
        <section className="facts container">
            <h2 className="facts-title">{title}</h2>
            <div className="swiper-button-prev"/>
            <Swiper
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            pagination={{
                el: '.facts-pagination',
                clickable: true,
                renderBullet: function (index, className){
                    return `<span class="facts-pagination-bullet ${className}"></span>`;
                },
            }}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={40}
            loop={true}
            loopFillGroupWithBlank={true}
            >
                {factsSliders}
            </Swiper>
            <div className="swiper-button-next"/>
            <div className="facts-pagination"/>
        </section>
    );
};

export default Facts;
