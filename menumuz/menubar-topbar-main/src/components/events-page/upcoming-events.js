import React from 'react';
import "./upcoming-events.scss";
import { Container } from 'react-bootstrap';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import events from "../../helpers/data/events.json";
import EventCard from "./event-card";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';



const UpcomingEvents = () => {
  const upcomingEvents = events.filter(event => new Date(event.date) > new Date());

  return (
    <div className='upcoming-events'>
      <Container>
        <h2>
          <span className='prev'><FiChevronLeft/></span>
          <span> Upcoming Events</span>
          <span className='next'><FiChevronRight/></span>
        </h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log( swiper)}
          navigation={{ 
            prevEl: '.prev', 
            nextEl: '.next' }}


          breakpoints={{
            576: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 4 }
          }}
        >


          {upcomingEvents.map(event => (<SwiperSlide key={event.id}>
              <EventCard {...event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default UpcomingEvents;