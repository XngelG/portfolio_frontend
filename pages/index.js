import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import {SiNextdotjs} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiDjango} from 'react-icons/si'


export default function Home() {
  return(
    <div>
      <Head>
        <title>
          Ángel Gallardo | Home
        </title>
        <meta name="description" content="Angel Gallardo's portfolio"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <main className={styles.Main}>
        <div className={styles.Wrapper}>
          <div className={styles.Content}>
            <div className={styles.NavBar}>
              <div className={styles.NavContent}>
                <Link href={"/"}>HOME</Link>
              </div>
              <div className={styles.NavContent}>
                <Link href={"/sentiment/"}>SENTIMENT</Link>
              </div>
              <div className={styles.NavContent}>
                <Link href={"/"}>PORTFOLIO</Link>
                </div>            
            </div>
            <body className={styles.Body}>
              <h1 className={styles.Intro}>
                HEY, I'M ÁNGEL GALLARDO
              </h1>
              <p className={styles.Headline}>
                I'M A POST-GRADUATE PROFESSIONAL WITH A PASSION FOR PROGRAMMING, MACHINE LEARNING, AND MECHATRONICS. I CURRENTLY WORK AT KEYENCE AS A TECH SUPPORT ENGINEER. I'M ALSO AN ASPIRING PHOTOGRAPHER.
              </p>
              <h2 className={styles.MySkills}>
                MY SKILLS
              </h2>
              <div className={styles.SkillsColumn}>
                <p className={styles.Skillset}>
                  Front End
                </p>
                <p className={styles.Skillset}>
                  Back End
                </p>
                <p className={styles.Skillset}>
                  Tools
                </p>
              </div>
            </body>
            <div className={styles.SkillsIcons}>
              <div className={styles.Icon}>
                <div className={styles.IconSeparation}>
                  <SiNextdotjs size={70} color="gold" />
                </div>
                <div className={styles.IconSeparation}>
                  <SiReact size={70} color="gold" />
                </div>
              </div>
              <div className={styles.Icon}>
                <SiDjango size={70} color="gold" />
              </div>
            </div>
          </div>
        </div>
      </main>      
    </div>
  )
}

