import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
    },
    []
  );

  return (
    <div className={styles.main}>
    {
      posts.map(posts => (
        <div className={styles.card}>
          <h3>{posts.title}</h3>
          <p>{posts.body}</p>
        </div>
      ))
    }
    </div>
  )
}
