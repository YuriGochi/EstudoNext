import React from 'react'
import style from './style.module.scss'
import useEmblaCarousel from 'embla-carousel-react'
import SliderDay from '../SliderDay';

const meses = [
    { mes: 'JAN', key: 'item-1'}, // remember to pass the key prop
    { mes: 'FEV', key: 'item-2'},
    { mes: 'MAR', key: 'item-3'},
    { mes: 'ABR', key: 'item-4'},
    { mes: 'MAI', key: 'item-5'},
    { mes: 'JUN', key: 'item-6'},
    { mes: 'JUL', key: 'item-7'},
    { mes: 'AGO', key: 'item-8'},
    { mes: 'SET', key: 'item-9'},
    { mes: 'OUT', key: 'item-10'},
    { mes: 'NOV', key: 'item-11'},
    { mes: 'DEZ', key: 'item-12'},
  ];

const Slider: React.FC = () => {
    const [emblaRef] = useEmblaCarousel()

    return(
        <>
        <div className={style.slider} ref={emblaRef}>
            <div className={style.slider_container}>
                {meses.map((meses) => {
                    return (
                        <div className={style.slider_item}>{meses.mes}</div>
                    );
                })}
            </div>
        </div>
        <SliderDay />
        </>
    )
};
  
  export default Slider;