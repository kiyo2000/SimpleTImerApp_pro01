import React, {useState,useEffect} from 'react'
import { StyleSheet, Text } from 'react-native'

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

export const DateFormat = (props) => {
  const [date,setDate] = useState('')

  useEffect( () => {
    const dateObj = new Date( parseInt(props.date) )
    const date = dateObj.getDate()
    const day = days[dateObj.getDay()]
    const month = months[dateObj.getMonth() ]
    const year = dateObj.getFullYear()
    setDate(`${day}, ${date} ${month} ${year}`)//Need " , " between??? 
  })

  return (
    <Text style={{...props.styling}}>{date}</Text>
  )
} 