import styles from '../styles/Portfolio.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Image from "next/image";

export default function Home() {

return(
  <div>

    <Head>
      <title>
        Ángel Gallardo | Photo Portfolio
      </title>
      <meta name="description" content="Angel Gallardo's photography portfolio"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>

    <main className={styles.Main}>
      <Image src="/7d0JQqq_nbufbe.png" alt="Background" layout='fill' objectFit='cover' objectPosition='center' priority/>
      <div className={styles.Wrapper}>

        <div className={styles.Content}>

          <div className={styles.NavBar}>
              <div className={styles.NavContent}>
                <Link href={"/"}>HOME</Link>
              </div>
              <div className={styles.NavContent}>
                <Link href={"/portfolio/"}>PORTFOLIO</Link>
                </div>            
            </div>
          <div className={styles.Line}/>
          
          <div className={styles.PhotoPortfolio}>
            <div className={styles.PhotoIndividual}>
              <Image src="/kPdxy32.jpg" alt="Personal" layout='responsive' width={4} height={5} priority quality={50}/>
            </div>
            <div className={styles.PhotoIndividual}>
              <Image src="/m4eq3EW.jpg" alt="Personal" layout='responsive' width={4} height={5} quality={50}/>
            </div>
            <div className={styles.PhotoIndividual}>
              <Image src="/iwRmm6i.jpg" alt="Personal" layout='responsive' width={4} height={5} quality={50}/>
            </div>
            <div className={styles.PhotoIndividual}>
              <Image src="/tD1ryYC.jpg" alt="Personal" layout='responsive' width={4} height={5} quality={50}/>  
            </div>
            <div className={styles.PhotoIndividual}>
              <Image src="/JyFd6XF.jpg" alt="Personal" layout='responsive' width={4} height={5} quality={50}/>
            </div>
            <div className={styles.PhotoIndividual}>
              <Image src="/5jmmYnT.jpg" alt="Personal" layout='responsive' width={4} height={5} quality={50}/>
            </div>
            
          </div>

          <div className={styles.Footer}/> 

        </div>

      </div>
    </main>

  </div>
)
  
}