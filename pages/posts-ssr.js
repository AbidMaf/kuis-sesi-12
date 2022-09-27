import styles from '../styles/Home.module.css'

export default function Posts(props) {

    return(
        <div className={styles.main}>
        {
        props.posts?.map(post => (
            <div className={styles.card}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        ))
        }
        </div>
    )
    
}

export async function getServerSideProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    return {
        props:  posts 
    }
}
   