import React from 'react'
import style from './style.module.scss'
import useEmblaCarousel from 'embla-carousel-react'

const dias = [
    { dia: '01', key: 'item-1'}, // remember to pass the key prop
    { dia: '02', key: 'item-2'},
    { dia: '03', key: 'item-3'},
    { dia: '04', key: 'item-4'},
    { dia: '05', key: 'item-5'},
    { dia: '06', key: 'item-6'},
    { dia: '07', key: 'item-7'},
    { dia: '08', key: 'item-8'},
    { dia: '09', key: 'item-9'},
    { dia: '10', key: 'item-10'},
    { dia: '11', key: 'item-11'},
    { dia: '12', key: 'item-12'},
    { dia: '13', key: 'item-13'},
    { dia: '14', key: 'item-14'},
    { dia: '15', key: 'item-15'},
    { dia: '16', key: 'item-16'},
    { dia: '17', key: 'item-17'},
    { dia: '18', key: 'item-18'},
    { dia: '19', key: 'item-19'},
    { dia: '20', key: 'item-20'},
    { dia: '21', key: 'item-21'},
    { dia: '22', key: 'item-22'},
    { dia: '23', key: 'item-23'},
    { dia: '24', key: 'item-24'},
    { dia: '25', key: 'item-25'},
    { dia: '26', key: 'item-26'},
    { dia: '27', key: 'item-27'},
    { dia: '28', key: 'item-28'},
    { dia: '29', key: 'item-29'},
    { dia: '30', key: 'item-30'},
    { dia: '31', key: 'item-31'},
  ];

const SliderDay: React.FC = () => {
    const [emblaRef] = useEmblaCarousel()

    return(
        <div className={style.slider} ref={emblaRef}>
        <div className={style.slider_container}>
        {dias.map((dias) => {
            return (
          <div className={style.slider_item}>{dias.dia}</div>
            )
        })}
        </div>
      </div>
    )
};
  
  export default SliderDay;