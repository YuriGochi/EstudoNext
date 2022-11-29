import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Slider from './components/Slider'
import SliderDay from './components/SliderDay'

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className='main'>
        <SliderDay />
      </main>
    </>
  )
}
