import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

export default function Home(a: unknown, b:unknown, c:unknown) {
  console.log('aaaaaa',a, 'axxx', b, 'zzz', c)
  return (
    <div>
      HELLO, {JSON.stringify({a, b, c})}
    </div>
  )
}

export const getServerSideProps:GetServerSideProps = async () => {
  return {
    props: {bruno: new Date().toISOString()}
  }
}
