import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home - Rozgaar Samadhan</title>
        <meta property="og:title" content="Home - Rozgaar Samadhan " />
      </Helmet>
      <div className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-container1">
            <nav className="home-links">
              <span className="home-nav1">About</span>
            </nav>
          </div>
          <div className="home-container2">
            <div data-thq="thq-navbar-nav" className="home-desktop-menu"></div>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu"></div>
          <span className="home-nav2">Careers</span>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container3">
            <h1 className="home-hero-heading heading1">
              <span>
                Welcome to
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Rozgaar Samadhan</span>
            </h1>
            <span className="home-hero-sub-heading">
              Connecting Expert Surveyors to Your Projects
            </span>
            <div className="home-btn-group"></div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container4">
            <span className="home-text03 sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">Who We Are</h2>
            <span className="home-details-sub-heading">
              At Rozgaar Samadhan, we link researchers and companies with
              skilled surveyors effortlessly. Our vast database bridges the gap
              between research needs and talented professionals, ensuring
              seamless collaboration where expertise meets opportunity.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1521669246297-b04a27e36f07?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDU0NjE5OHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container5">
              <span className="home-text06 sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Explore Our Key Features
              </h2>
              <span className="home-features-sub-heading">
                Why Choose Rozgaar Samadhan?
              </span>
            </div>
            <div className="home-container6">
              <FeatureCard
                heading="Tailored Matching Process"
                subHeading="Find the perfect surveyor for your project through our customized matching process. We analyze your requirements and connect you with the most suitable professionals from our database."
              ></FeatureCard>
              <FeatureCard
                heading="Diverse Skillsets"
                subHeading="Access a pool of surveyors with diverse skills and expertise. Whether you need someone for rural studies or urban projects, Rozgaar Samadhan has you covered."
              ></FeatureCard>
              <FeatureCard
                heading="Efficient Project Management"
                subHeading="Streamline your projects with our user-friendly platform. Manage tasks, track progress, and communicate with surveyors effortlessly to ensure project success."
              ></FeatureCard>
              <FeatureCard
                heading="Quality Assurance"
                subHeading="Rest assured with our commitment to quality. Rozgaar Samadhan ensures that every surveyor in our network is experienced, reliable, and committed to delivering exceptional results."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-container7">
            <span className="home-logo">Rozgaar Samadhan</span>
            <nav className="home-nav">
              <span className="home-nav11">About</span>
              <Link to="/" className="home-nav21">
                Careers
              </Link>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container8">
            <span className="home-text09">
              © 2024 Rozgaar Samadhan, All Rights Reserved.
            </span>
            <div className="home-icon-group"></div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
