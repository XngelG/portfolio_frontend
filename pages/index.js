import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import {SiNextdotjs} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiDjango} from 'react-icons/si'
import {SiGit} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiPandas} from 'react-icons/si'
import {SiScipy} from 'react-icons/si'
import {SiNumpy} from 'react-icons/si'
import Image from 'next/image'
// import {SiPython} from 'react-icons/si'
// import {SiPython} from 'react-icons/si'
// import {SiPython} from 'react-icons/si'

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

            <div className={styles.IntroImage}>
              <div className={styles.Intro}>
                <h1 className={styles.IntroText}>
                  HEY, I&apos;M ÁNGEL GALLARDO
                </h1>
              </div>
              
              <div className={styles.Memoji}>
                <Image src="https://i.imgur.com/zx0ytkW.png" alt="Campaign Banner" layout='responsive' width={400} height={400}/>
              </div>
            </div>

            <p className={styles.Headline}>
              I&apos;M A POST-GRADUATE PROFESSIONAL WITH A PASSION FOR PROGRAMMING, MACHINE LEARNING, AND MECHATRONICS. I CURRENTLY WORK AT KEYENCE AS A TECH SUPPORT ENGINEER. I&apos;M ALSO AN ASPIRING PHOTOGRAPHER.
            </p>

            <h2 className={styles.MySkills}>
              MY SKILLS
            </h2>

            <div className={styles.Skills}>

              <div className={styles.SkillsSet}>

                <p className={styles.SkillsTitle}>Front End</p>

                <div className={styles.SkillsIcon}>
                  <div className={styles.IconCombo}>
                    <div className={styles.IconPosition}>
                      <SiNextdotjs className={styles.IconSize}/>
                    </div>
                    <p className={styles.IconText}>Next JS</p>
                  </div>
                  <div className={styles.IconCombo}>
                    <div className={styles.IconPosition}>
                      <SiReact className={styles.IconSize}/>
                    </div>
                    <p className={styles.IconText}>React JS</p>
                  </div>
                </div>
                  

              </div>

              <div className={styles.SkillsSet}>

                <p className={styles.SkillsTitle}>Back End</p>

                <div className={styles.SkillsIcon}>
                  <div className={styles.IconCombo}>
                    <div className={styles.IconPosition}>
                      <SiPython className={styles.IconSize}/>
                    </div>
                    <p className={styles.IconText}>Python</p>
                  </div>
                  <div className={styles.IconCombo}>
                    <div className={styles.IconPosition}>
                      <SiDjango className={styles.IconSize}/>
                    </div>
                    <p className={styles.IconText}>Django</p>
                  </div>
                </div>

              </div>

              <div className={styles.SkillsSet}>

                <p className={styles.SkillsTitle}>Tools</p>

                <div className={styles.SkillsIcon}>
                  <div className={styles.IconCombo}>
                    <div className={styles.IconPosition}>
                      <SiGit className={styles.IconSize}/>
                    </div>
                    <p className={styles.IconText}>Git</p>
                  </div>
                  <div className={styles.IconCombo}>
                    <div className={styles.IconPosition}>
                      <SiScipy className={styles.IconSize}/>
                    </div>
                    <p className={styles.IconText}>SciKit Learn</p>
                  </div>
                </div>

              </div>
              
            </div>
            
            <div className={styles.Footer}/>            

          </div>
        </div>
      </main>      
    </div>
  )
}

