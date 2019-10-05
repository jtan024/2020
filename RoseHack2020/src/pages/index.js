import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import GIF from '../gifs/Heroanimation.gif'
import Question from "../components/question"




const IndexPage = () => (
  <Layout>
      <img src={GIF} className="animation" />
      <div className={'centerButton'}>
    <a href="/apply" className="email-button"> Apply</a>
      </div>
      <section className={'title'} id={'about'}>
        <h1>About</h1>
        <p>Rose Hack is UC Riverside’s first women-centric hackathon*, founded by the female leaders of the Association for Computing Machinery (ACM-W) and the Society of Women Engineers (SWE). Rose Hack’s mission is to encourage individuals from underrepresented groups in STEM to create a strong network together through their shared passions in Science and Technology.
          Come for a lively weekend of innovation, face masks, discovering and creating new technology, networking, mentorship, and much more.</p>
      </section>
    <section className={'title'} id={'questions'}>
      <h1>FAQ</h1>
      <div className={'questionContainer'}>
        <Question question={"What is a hackathon?"} answer={'A hackathon is a technology-focused event where individuals and teams work on new projects in a short period of time. You can build anything you want. An app, a robot, a website. The only limit is your imagination! '}/>
      <Question question={"How much does it cost?"} answer={'1'}/>
      <Question question={"Who should apply?"} answer={'1'}/>
      <Question question={"What should I bring?"} answer={'1'}/>
      <Question question={"How many people can be on a team?"} answer={'1'}/>
      <Question question={'I still have questions!'} answer={'1'}/>
      </div>

    </section>
    <section className={'title'} id={'sponsors'}>
      <h1 className={'sponsorTitle'}>Sponsors</h1>
<p>Interested in sponsoring Rose Hack 2020? Contact us or view our sponsorship package. </p>
    </section>
  </Layout>
)

export default IndexPage

