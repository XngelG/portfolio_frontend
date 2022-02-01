import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import {SiNextdotjs} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiDjango} from 'react-icons/si'
import {SiGit} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiPandas} from 'react-icons/si'
import {SiNumpy} from 'react-icons/si'
import Image from 'next/image'
import {SiHeroku} from 'react-icons/si'
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
      <Image src="https://res.cloudinary.com/dfcshdnfp/image/upload/v1643647216/7d0JQqq_nbufbe.png" alt="Background" layout='fill' objectFit='cover' objectPosition='center' priority/>
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

            <div className={styles.IntroImage}>

              <div className={styles.Memoji}>
                <Image src="https://res.cloudinary.com/dfcshdnfp/image/upload/v1643647335/zx0ytkW_qvvvnq.png" alt="Personal" layout='responsive' width={200} height={200} priority/>
              </div>

              <div className={styles.Intro}>
                <h1 className={styles.IntroText}>
                  HEY, I&apos;M ÁNGEL GALLARDO
                </h1>
              </div>
              
              

            </div>

            <p className={styles.Headline}>
              I&apos;M A POST-GRADUATE PROFESSIONAL WITH A PASSION FOR PROGRAMMING, MACHINE LEARNING, AND MECHATRONICS. I CURRENTLY WORK AT KEYENCE AS A TECH SUPPORT ENGINEER. I&apos;M ALSO AN ASPIRING PHOTOGRAPHER.
            </p>

            <h2 className={styles.PortfolioTitle}>
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
                      <SiPandas className={styles.IconSize}/>
                    </div>
                    <p className={styles.IconText}>Pandas</p>
                  </div>
                  <div className={styles.IconCombo}>
                    <div className={styles.IconPosition}>
                      <SiHeroku className={styles.IconSize}/>
                    </div>
                    <p className={styles.IconText}>Heroku</p>
                  </div>
                  <div className={styles.IconCombo}>
                    <div className={styles.IconPosition}>
                      <SiNumpy className={styles.IconSize}/>
                    </div>
                    <p className={styles.IconText}>Numpy</p>
                  </div>
                </div>

              </div>
              
            </div>

            <h2 className={styles.PortfolioTitle}>
              MY PROJECTS
            </h2>

            <div className={styles.ProjectBorder}>
              <h3 className={styles.ProjectLinkTitle}>
                <Link href={"/sentiment/"}>
                  Sentiment analysis
                </Link>
              </h3>
              <p className={styles.ProjectLinkParagraph}>
                <Link href={"/sentiment/"}>
                Created a REST API with Django REST that has two main functions: fetch top 5 trends in Twitter; and using NLP libraries return the sentiment (positive, negative, neutral) that Twitter has related to the searched topic. Used Next.JS for the front end.
                </Link>
              </p>
            </div>

            <h2 className={styles.PortfolioTitle}>
              MY EXPERIENCE
            </h2>

            <div className={styles.Experience}>
              <div className={styles.ExperienceTimeline}>
                <div className={styles.ExperienceTimelineFormat}/>
              </div>
              <div  className={styles.ExperienceDescriptions}>
    
                <div className={styles.ExperienceJob}>
                  <h3 className={styles.ExperienceCompanyName}>
                    Keyence
                  </h3>
                  <p className={styles.ExperienceJobDates}>
                    Jun 2019 - Present
                  </p>
                  <p className={styles.ExperienceJobPost}>
                    Senior tech support
                  </p>
                  <p className={styles.ExperienceJobDescription}>
                    <ul>
                      <li><b>Direct closing sales contribution:</b> collaborate with sales members to oversee the closing of PLC projects that amount on sales over 1M USD</li>
                      <li><b>SQL expert:</b> supervise all SQL-PLC related applications throughout the country (more than 5 key accounts with completed projects)</li>
                      <li><b>Field support:</b> oversee the completion of projects via onsite technical support and specification</li>
                      <li><b>Documentation development:</b> developed multimedia material for sales members to use with clients</li>
                      <li><b>IoT promotion:</b> on charge of introducing to the market the suite of IoT products from Keyence Mexico</li>
                    </ul>
                  </p>
                </div>

                <div className={styles.ExperienceJob}>
                  <h3 className={styles.ExperienceCompanyName}>
                    Tec de Monterrey
                  </h3>
                  <p className={styles.ExperienceJobDates}>
                    Jan 2018 – May 2019
                  </p>
                  <p className={styles.ExperienceJobPost}>
                    Adjunct Professor
                  </p>
                  <p className={styles.ExperienceJobDescription}>
                    <ul>
                      <li><b>Programming:</b> taught Python programming class for mechatronics’ undergraduates, innovating by introducing them to basic artificial evolution concepts</li>
                      <li><b>Industrial Networks:</b> taught ladder programming class with Siemens PLCs for mechanics’ undergraduates, innovating the standard curriculum which only included basic PID control</li>
                    </ul>
                  </p>
                </div>

              </div>
            </div>

            <h2 className={styles.PortfolioTitle}>
              MY EDUCATION
            </h2>

            <div className={styles.Experience}>
              <div className={styles.ExperienceTimeline}>
                <div className={styles.ExperienceTimelineFormat}/>
              </div>
              <div  className={styles.ExperienceDescriptions}>
    
                <div className={styles.ExperienceJob}>
                  <h3 className={styles.ExperienceCompanyName}>
                    Ecole polytechnique fédérale de Lausanne 
                  </h3>
                  <p className={styles.ExperienceJobDates}>
                    Sept 2015 - Mar 2017
                  </p>
                  <p className={styles.ExperienceJobPost}>
                    Master of Science in microengineering
                  </p>
                  <p className={styles.ExperienceJobDescription}>
                    <ul>
                      <li><b>Relevant coursework:</b> Machine Learning, Artificial Evolution, Distributed Intelligent Systems</li>
                    </ul>
                  </p>
                </div>

                <div className={styles.ExperienceJob}>
                  <h3 className={styles.ExperienceCompanyName}>
                    Tec de Monterrey
                  </h3>
                  <p className={styles.ExperienceJobDates}>
                    Aug 2010 – Dec 2014
                  </p>
                  <p className={styles.ExperienceJobPost}>
                    Bachelor of mechatronics engineering; Summa Cum Laude
                  </p>
                  <p className={styles.ExperienceJobDescription}>
                    <ul>
                      <li><b>Relevant coursework:</b> Programming, Industrial Networks, Applied Control Theory</li>
                    </ul>
                  </p>
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

