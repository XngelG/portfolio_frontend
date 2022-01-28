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

            <div className={styles.Line}/>

            <div className={styles.IntroImage}>

              <div className={styles.Memoji}>
                <Image src="https://i.imgur.com/zx0ytkW.png" alt="Personal" layout='responsive' width={200} height={200}/>
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
                      <SiScipy className={styles.IconSize}/>
                    </div>
                    <p className={styles.IconText}>SciKit Learn</p>
                  </div>
                </div>

              </div>
              
            </div>

            <h2 className={styles.PortfolioTitle}>
              MY PROJECTS
            </h2>

            <div className={styles.ProjectBorder}>
              <Link href={"/sentiment/"}>
                <h3 className={styles.ProjectLinkTitle}>Sentiment analysis</h3>
              </Link>
              <Link href={"/sentiment/"} className={styles.ProjectLinks}>
                <p className={styles.ProjectLinkParagraph}>Created a REST API that has two main functions, fetch top 5 trends in Twitter and using NLP libraries return the sentiment (positive, negative, neutral) that Twitter has related to the searched topic</p>
              </Link>
            </div>

            <h2 className={styles.PortfolioTitle}>
              MY EXPERIENCE
            </h2>

            <div className={styles.Experience}>
              <div className={styles.ExperienceTimeline}>
                <div className={styles.ExperienceTimelineFormat}/>
                <div className={styles.ExperienceTimelineFormat}/>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed maximus urna. Sed pulvinar consectetur eros nec dictum. Ut volutpat arcu enim, at ornare justo vulputate et. Maecenas dignissim, nibh at mattis fermentum, leo nisi hendrerit dolor, in ultricies ipsum augue non neque. Cras feugiat tempus erat convallis viverra. Aliquam volutpat augue at nunc fringilla, iaculis pharetra mi pharetra. Integer dictum dui eu suscipit faucibus. Vivamus sollicitudin, nunc sit amet molestie feugiat, purus elit luctus neque, at faucibus risus lectus vitae sapien. Mauris ipsum odio, tristique ut imperdiet sodales, rhoncus quis nisi. Quisque massa ipsum, pulvinar nec luctus ac, sollicitudin sed augue. In fringilla bibendum ultricies. Vivamus finibus ex eget odio ornare pharetra. Nam ac turpis sit amet neque elementum condimentum nec sed nisl. Donec sollicitudin eros vel metus maximus porta.
                  </p>
                </div>

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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed maximus urna. Sed pulvinar consectetur eros nec dictum. Ut volutpat arcu enim, at ornare justo vulputate et. Maecenas dignissim, nibh at mattis fermentum, leo nisi hendrerit dolor, in ultricies ipsum augue non neque. Cras feugiat tempus erat convallis viverra. Aliquam volutpat augue at nunc fringilla, iaculis pharetra mi pharetra. Integer dictum dui eu suscipit faucibus. Vivamus sollicitudin, nunc sit amet molestie feugiat, purus elit luctus neque, at faucibus risus lectus vitae sapien. Mauris ipsum odio, tristique ut imperdiet sodales, rhoncus quis nisi. Quisque massa ipsum, pulvinar nec luctus ac, sollicitudin sed augue. In fringilla bibendum ultricies. Vivamus finibus ex eget odio ornare pharetra. Nam ac turpis sit amet neque elementum condimentum nec sed nisl. Donec sollicitudin eros vel metus maximus porta.
                  </p>
                </div>

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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed maximus urna. Sed pulvinar consectetur eros nec dictum. Ut volutpat arcu enim, at ornare justo vulputate et. Maecenas dignissim, nibh at mattis fermentum, leo nisi hendrerit dolor, in ultricies ipsum augue non neque. Cras feugiat tempus erat convallis viverra. Aliquam volutpat augue at nunc fringilla, iaculis pharetra mi pharetra. Integer dictum dui eu suscipit faucibus. Vivamus sollicitudin, nunc sit amet molestie feugiat, purus elit luctus neque, at faucibus risus lectus vitae sapien. Mauris ipsum odio, tristique ut imperdiet sodales, rhoncus quis nisi. Quisque massa ipsum, pulvinar nec luctus ac, sollicitudin sed augue. In fringilla bibendum ultricies. Vivamus finibus ex eget odio ornare pharetra. Nam ac turpis sit amet neque elementum condimentum nec sed nisl. Donec sollicitudin eros vel metus maximus porta.
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

