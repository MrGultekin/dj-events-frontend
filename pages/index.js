import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function HomePage() {
  return (
      <div>
        <h1>Home</h1>
          <Link href="/about">go to about</Link>
      </div>
  )
}
