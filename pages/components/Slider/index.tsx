import React, { useState } from 'react'
import style from './style.module.scss'
import useEmblaCarousel from 'embla-carousel-react'
import SliderDay from '../SliderDay';
import classnames from 'classnames';

// interface Meses {
//     mes: string;
//     key: string;
// }
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

// const Slider: React.FC = () => {
//     const [emblaRef] = useEmblaCarousel()

//     const array = meses

//     const classes = classnames('slide_item', {
//         'current': array.key === props.key,
//         'future': date.month() > this.props.month,
//         'past': date.month() < this.props.month
//       });

//     return(
//         <>
//         <div className={style.slider} ref={emblaRef}>
//             <div className={style.slider_container}>
//                 {meses.map((props) => {
//                     return (
//                         <button 
//                         className={style.slider_item}>{props.mes}</button>
//                     );
//                 })}
//             </div>
//         </div>
//         <SliderDay />
//         <div className={style.att}>
//             <div className={style.date}>
//                 <div>
//                     <p>Publicado em 14/11/2022 23H00</p>
//                 </div>
//                 <div>
//                     <p>Atualizado em 15/11/2022 18H44</p>
//                 </div>
//             </div>
//             <div className={style.share}>
//                 <p>Compartilhe:</p>
//                 <i>teste</i>
//                 <i>teste</i>
//                 <i>teste</i>
//             </div>
//         </div>
//         </>
//     )
// };
  
//   export default Slider;

  
// const Slider: React.FC = () => {
//     const [emblaRef] = useEmblaCarousel()
//     const [isActive, setIsActive] = useState(false);

//     const handleClick = () => {
//       // 👇️ toggle
//        setIsActive(current => !current);
  
//       // 👇️ or set to true
//     //   setIsActive(true);
//     };
//     return(
//         <>
//         <div className={style.slider} ref={emblaRef}>
//             <div className={style.slider_container}>
//                 {meses.map((meses) => {
//                     return (
//                         <button onClick={handleClick}  
//                         className={isActive ? style.slider_item_active : style.slider_item}>{meses.mes}</button>
//                     );
//                 })}
//             </div>
//         </div>
//         <SliderDay />
//         <div className={style.att}>
//             <div className={style.date}>
//                 <div>
//                     <p>Publicado em 14/11/2022 23H00</p>
//                 </div>
//                 <div>
//                     <p>Atualizado em 15/11/2022 18H44</p>
//                 </div>
//             </div>
//             <div className={style.share}>
//                 <p>Compartilhe:</p>
//                 <i>teste</i>
//                 <i>teste</i>
//                 <i>teste</i>
//             </div>
//         </div>
//         </>
//     )
// };
  
//   export default Slider;
const Slider: React.FC = () => {
    const [emblaRef] = useEmblaCarousel()
    return(
        <>
        <div className={style.slider} ref={emblaRef}>
            <div className={style.slider_container}>
                {meses.map((meses) => {
                    return (
                        <button  
                        className={style.slider_item}>{meses.mes}
                        </button>
                    );
                })}
            </div>
        </div>
        <SliderDay />
        <div className={style.att}>
            <div className={style.date}>
                <div>
                    <p>Publicado em 14/11/2022 23H00</p>
                </div>
                <div>
                    <p>Atualizado em 15/11/2022 18H44</p>
                </div>
            </div>
            <div className={style.share}>
                <p>Compartilhe:</p>
                <i>teste</i>
                <i>teste</i>
                <i>teste</i>
            </div>
        </div>
        </>
    )
};
  
  export default Slider;