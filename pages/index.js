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
            <body className={styles.Body}>
              <h1 className={styles.Intro}>
                HEY, I&apos;M ÁNGEL GALLARDO
              </h1>
              <p className={styles.Headline}>
                I&apos;M A POST-GRADUATE PROFESSIONAL WITH A PASSION FOR PROGRAMMING, MACHINE LEARNING, AND MECHATRONICS. I CURRENTLY WORK AT KEYENCE AS A TECH SUPPORT ENGINEER. I&apos;M ALSO AN ASPIRING PHOTOGRAPHER.
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

            <div className={styles.Table}>
              <table className={styles.SkillsIcons}>
                <tr>
                  <th>
                    <div className={styles.IconSeparation}>
                      <SiNextdotjs className={styles.IconSize}/>
                      <p className={styles.IconSeparationText}>Next JS</p>
                    </div>
                  </th>
                  <th>
                    <div className={styles.IconSeparation}>
                      <SiReact className={styles.IconSize}/>
                      <p className={styles.IconSeparationText}>React JS</p>
                    </div>
                  </th>
                </tr>
              </table>

              <table className={styles.SkillsIcons}>
                <tr>
                  <th>
                    <div className={styles.IconSeparation}>
                      <SiPython className={styles.IconSize}/>
                      <p className={styles.IconSeparationText}>Python</p>
                    </div>
                  </th>
                  <th>
                    <div className={styles.IconSeparation}>
                      <SiDjango className={styles.IconSize}/>
                      <p className={styles.IconSeparationText}>Django</p>
                    </div>
                  </th>
                </tr>
              </table>

              <table className={styles.SkillsIcons}>
                <tr>
                  <th>
                    <div className={styles.IconSeparation}>
                      <SiGit className={styles.IconSize}/>
                      <p className={styles.IconSeparationText}>Git</p>
                    </div>
                  </th>
                  <th>
                    <div className={styles.IconSeparation}>
                      <SiPandas className={styles.IconSize}/>
                      <p className={styles.IconSeparationText}>Pandas</p>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>
                    <div className={styles.IconSeparation}>
                      <SiScipy className={styles.IconSize}/>
                      <p className={styles.IconSeparationText}>SciPy</p>
                    </div>
                  </th>
                  <th>
                    <div className={styles.IconSeparation}>
                      <SiNumpy className={styles.IconSize}/>
                      <p className={styles.IconSeparationText}>NumPy</p>
                    </div>
                  </th>
                </tr>
              </table>


            </div>

            

          </div>
        </div>
      </main>      
    </div>
  )
}

