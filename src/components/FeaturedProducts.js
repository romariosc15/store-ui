import { Box, Text } from '@chakra-ui/react';
import FeaturedProductCard from './../components/FeaturedProductCard';
import featured_products from './../data/featured_products';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

const FeaturedProducts = () => {
    const ProductCards = featured_products.map((v) =>
        <SwiperSlide key={v.id}>
            <FeaturedProductCard product={v} />
        </SwiperSlide>
    );
    return(
        <Box>
            <Text textAlign={'center'} fontSize={'lg'} color={'#7e7e7e'}>Los más vendidos</Text>
            <Text paddingBottom={'2rem'} textAlign={'center'} fontSize={'2xl'} fontWeight={600}>Productos destacados</Text>
            <Swiper
                pagination={true} 
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={
                    {
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        991: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1536: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        }
                    }
                }
            >
                {ProductCards}
            </Swiper>
        </Box>
    );
};
export default FeaturedProducts;