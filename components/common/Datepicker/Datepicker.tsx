'use client'

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { StyledDatepicker } from './Datepicker.style'
import { getDay, getMonth, getYear } from 'date-fns'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { ko } from 'date-fns/locale'
import Dropdown from '../Dropdown/Dropdown'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
function Datepicker() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  const YEARS = Array.from({ length: getYear(new Date()) + 1 - 2000 }, (_, i) => getYear(new Date()) - i)

  const MONTHS = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']

  return (
    <StyledDatepicker>
      <DatePicker
        showIcon
        className="custom-datepicker"
        calendarClassName="custom-calendar"
        dateFormat="yyyy.MM.dd"
        placeholderText="YYYY/MM/DD"
        shouldCloseOnSelect
        minDate={new Date('2000-01-01')}
        maxDate={new Date()}
        selected={selectedDate}
        locale={ko}
        icon={<CalendarMonthIcon className="icon" fontSize="small" color="primary" />}
        dayClassName={(date) => {
          const day = getDay(date)
          return day === 6 ? 'react-datepicker__day--saturday' : day === 0 ? 'react-datepicker__day--sunday' : ''
        }}
        onChange={(date) => setSelectedDate(date)}
        renderCustomHeader={({
          date,
          changeMonth,
          changeYear,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => {
          const newDate = new Date(date)

          //* 년도 변경
          const handleYearChange = (e: React.MouseEvent<HTMLButtonElement>) => {
            const newYear = Number(e.currentTarget.value)
            newDate.setFullYear(newYear)
            setSelectedDate(newDate)
            changeYear(newYear)
          }

          //* 월 변경
          const handleMonthChange = (e: React.MouseEvent<HTMLButtonElement>) => {
            const newMonthIndex = MONTHS.indexOf(e.currentTarget.value)
            if (newMonthIndex >= 0) {
              newDate.setMonth(newMonthIndex)
              setSelectedDate(newDate)
              changeMonth(newMonthIndex)
            }
          }

          return (
            <div className="custom-header-container">
              <button
                className="nav-btn before"
                type="button"
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                color={prevMonthButtonDisabled ? 'disabled' : 'inherit'}
              >
                <NavigateBeforeIcon fontSize="small" />
              </button>

              <Dropdown id="myDropdown" list={YEARS as any} value={getYear(date) as any} onChange={handleYearChange} />

              <Dropdown id="myDropdown" list={MONTHS} value={MONTHS[getMonth(date)]} onChange={handleMonthChange} />

              <button className="nav-btn next" type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                <NavigateNextIcon fontSize="small" color={nextMonthButtonDisabled ? 'disabled' : 'inherit'} />
              </button>
            </div>
          )
        }}
      />
    </StyledDatepicker>
  )
}

export default Datepicker
