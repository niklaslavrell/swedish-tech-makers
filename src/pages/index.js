import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const IndexPage = () => (
  <div>
    <h1>Swedish Tech Makers 🚀</h1>
    <p>
      We are a community of tech makers who love to create online products. We
      reach goals and aspirations by holding each other accountable. We inspire
      and encourage each other to create and innovate. We help finding inspiring
      jobs and assignments each other. We work from anywhere in the world.
    </p>
    <p>
      <span style={{ fontWeight: 'bold' }}>
        Wanna join and ship some products? 💪
      </span>
      <br />
      Just{' '}
      <OutboundLink href="https://niklaslavrell.typeform.com/to/TNt1WT">
        fill in this form
      </OutboundLink>{' '}
      and we'll be in touch!
    </p>
    <p>
      <span style={{ fontWeight: 'bold' }}>
        Recruiter looking for freelancers? 👩‍💻
      </span>
      <br />We are a selected group of professionals holding competences across
      development, UX, product, growth, and more - but most importantly - we get
      stuff shipped. Send an email to{' '}
      <OutboundLink href="mailto:hi@swedishtechmakers.com?subject=Can we work together? 👩‍💻">
        hi@swedishtechmakers.com
      </OutboundLink>{' '}
      to find out more.
    </p>
    <p>
      /<OutboundLink href="https://www.lavrell.se">Niklas</OutboundLink> &{' '}
      <OutboundLink href="https://www.hannasoderquist.se">Hanna</OutboundLink>
    </p>
  </div>
)

export default IndexPage
