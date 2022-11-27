import React from 'react'
import style from './style.module.scss'
import useEmblaCarousel from 'embla-carousel-react'

const dias = [
    { dia: '01', key: 'item-1', semana: 'SEG'}, // remember to pass the key prop
    { dia: '02', key: 'item-2', semana: 'TER'},
    { dia: '03', key: 'item-3', semana: 'QUA'},
    { dia: '04', key: 'item-4', semana: 'QUI'},
    { dia: '05', key: 'item-5', semana: 'SEX'},
    { dia: '06', key: 'item-6', semana: 'SEG'},
    { dia: '07', key: 'item-7', semana: 'TER'},
    { dia: '08', key: 'item-8', semana: 'QUA'},
    { dia: '09', key: 'item-9', semana: 'QUI'},
    { dia: '10', key: 'item-10', semana: 'SEX'},
    { dia: '11', key: 'item-11', semana: 'SEG'},
    { dia: '12', key: 'item-12', semana: 'TER'},
    { dia: '13', key: 'item-13', semana: 'QUA'},
    { dia: '14', key: 'item-14', semana: 'QUI'},
    { dia: '15', key: 'item-15', semana: 'SEG'},
    { dia: '16', key: 'item-16', semana: 'TER'},
    { dia: '17', key: 'item-17', semana: 'QUA'},
    { dia: '18', key: 'item-18', semana: 'QUI'},
    { dia: '19', key: 'item-19', semana: 'SEX'},
    { dia: '20', key: 'item-20', semana: 'SEG'},
    { dia: '21', key: 'item-21', semana: 'TER'},
    { dia: '22', key: 'item-22', semana: 'QUA'},
    { dia: '23', key: 'item-23', semana: 'QUI'},
    { dia: '24', key: 'item-24', semana: 'SEG'},
    { dia: '25', key: 'item-25', semana: 'TER'},
    { dia: '26', key: 'item-26', semana: 'QUA'},
    { dia: '27', key: 'item-27', semana: 'QUI'},
    { dia: '28', key: 'item-28', semana: 'SEG'},
    { dia: '29', key: 'item-29', semana: 'TER'},
    { dia: '30', key: 'item-30', semana: 'QUA'},
    { dia: '31', key: 'item-31', semana: 'QUI'},
  ];

const SliderDay: React.FC = () => {
    const [emblaRef] = useEmblaCarousel()

    return(
        <div className={style.slider} ref={emblaRef}>
          <div className={style.slider_container}>
          {dias.map((dias) => {
              return (
                <>
                  <div className={style.slider_item}>
                  <button onClick={() => { 
                            console.log(dias.key);
                          }}  className={style.slider_dia}>{dias.dia}</button>
                    <div className={style.slider_semana}>{dias.semana}</div>
                  </div>
                </>
              )
          })}
          </div>
      </div>
    )
};
  
  export default SliderDay;