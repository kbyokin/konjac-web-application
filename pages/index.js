import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h2>画像をアッブロードしてください</h2>
    </div>
  )
}