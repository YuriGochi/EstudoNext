import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import useEmblaCarousel from 'embla-carousel-react'
import { formatDistance, subDays, lastDayOfMonth, format, addDays } from 'date-fns'

const SliderDay: React.FC = () => {
  const [emblaRef] = useEmblaCarousel()

  const [days, setDays] = useState([])

  const [daySelect, setDaySelected] = useState([])

  useEffect(() => {
    const today = new Date()
    const firstDateOfMonth = new Date(format(today, 'yyyy-MM-01'))
    const lastDateOfMonth = new Date(format(lastDayOfMonth(today), 'yyyy-MM-dd'))

    const getDatesBetween = (
      startDate: Date,
      endDate: Date,
      includeEndDate?: boolean
    ) => {
      const dates = [];
      let currentDate = startDate;
      while (currentDate < endDate) {
        const dateObject = {
          day: currentDate.getDate(),
          key: `${currentDate.getDate()}key`,
          dayWeek: ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'][currentDate.getDay()],
        }
        dates.push(dateObject);
        if (currentDate.getDate() === today.getDate())
          setDaySelected(dateObject)
        currentDate = addDays(currentDate, 1)
      }//const gera uma variável estática - MUTABILIDADE
      if (includeEndDate) dates.push(endDate);
      setDays(dates)
    };

    getDatesBetween(firstDateOfMonth, lastDateOfMonth, true)
  }, [])

  console.log(daySelect)

  return (
    <div className={style.slider} ref={emblaRef}>
      <div className={style.slider_container}>
        {days.map((date) => {
          return (
            <div className={style.slider_item} key={date.key}>
              <button onClick={() => setDaySelected(date) } className={style.slider_dia, date.key === daySelect.key && style.slider_dia_habilitado}>{date.day}</button>
              <div className={style.slider_semana}>{date.dayWeek}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default SliderDay;