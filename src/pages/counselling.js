import React from 'react'
import { Divider, Header } from 'semantic-ui-react'
import { InfoContainer, GatsbyJumbotron, JumboMessage, JumboHeader } from '../components/MyStyledComponents'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

function Counselling (props) {
  const data = useStaticQuery(graphql`
    query {
      trees: file(
        relativePath: {
          regex: "/(images/resources/trees.jpg)/"
        }
      ) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `
  )

  return (
    <Layout>
      {/* <GatsbyJumbotron src='https://storage.googleapis.com/inner_wisdom_bucket/beautiful-bonsai-botany-1671256.jpg' /> */}
      <GatsbyJumbotron>
        <Img
          alt='trees in mist'
          style={{ gridArea: 'main' }}
          fluid={data.trees.childImageSharp.fluid}
        />
      </GatsbyJumbotron>
      <Divider hidden />

      <InfoContainer text>
        {/* <div> */}
        <h1 style={{ gridArea: 'header' }}>What is Counselling Psychology?</h1>
        <p style={{ gridArea: 'p1' }}>Many people seek help from a Psychologist, knowing there is a particular concern they want to address, but don't know how to make the changes they desire. Others experience on going distress in their lives or relationships and are looking for personal growth, support and guidance. Many have suffered abuse, trauma or grief and would like to make sense of their experiences, seek healing and build strategies to empower them to live more fulfilling lives.</p>

        <p style={{ gridArea: 'p2' }}>For those seeking couples counselling, their relationships are often a source of stress and emotional pain, due to differing values and goals, a sense of betrayal or unhelpful communication patterns. Deciding what you want to achieve from your sessions and clarifying expectations is an important part of the counselling process.</p>

        <blockquote style={{ gridArea: 'quote' }}>
                    The aim is to facilitate growth in emotional, psychological and spiritual well-being and life affirming relationships
        </blockquote>

        <div style={{ gridArea: 'p3' }}>

          <p>At Inner Wisdom Psychology I take a client centred approach, where the aim is to facilitate growth in emotional, psychological and spiritual well-being and life affirming relationships. Your personal issues and goals are addressed in collaborative and hope filled ways and you can expect to achieve greater personal insights, along with a renewed sense of purpose</p>
          <h2>Specific Counselling approaches include:</h2>
          <ul>
            <li>Cognitive Therapy</li>
            <li>Psychodynamic Psychotherapy</li>
            <li>Emotion Focused Therapy</li>
            <li>Creative Therapy: Sandplay, Art, Guided Imagery</li>
            <li>Mindfulness & Yoga Therapy</li>
            <li>Transformational Chairwork</li>
            <li>Couples Counselling</li>
          </ul>

        </div>
        {/* <div style={{ backgroundImage: "url(https://storage.googleapis.com/inner_wisdom_bucket/DSC_0022.jpg)", width: "100%", height: "100%", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", gridArea: "img" }} /> */}
      </InfoContainer>
    </Layout>
  )
}

export default Counselling
