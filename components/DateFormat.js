import React, {useState,useEffect} from 'react'
import { StyleSheet, Text } from 'react-native'

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

export const DateFormat = (props) => {
  const [date,setDate] = useState('')
  // Get timestamp
  useEffect( () => {
    const dateObj = new Date( parseInt(props.date) )
    const date = dateObj.getDate()
    const day = days[dateObj.getDay()]
    const month = months[dateObj.getMonth() ]
    const year = dateObj.getFullYear()
    setDate(`${day}, ${date} ${month} ${year}`)
  })

  //Pass date value as props to DetailScreen
  return (
    <Text style={{...props.styling}}>{date}</Text>
  )
} 