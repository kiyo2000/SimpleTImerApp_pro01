import React, {useState,useEffect} from 'react'
import { StyleSheet, Text } from 'react-native'

const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
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
    setDate(`${day}, ${date} ${month} ${year}`)//Need " , " between??? 
  })

  return (
    <Text style={{...props.style}}>{date}</Text>
  )
} 