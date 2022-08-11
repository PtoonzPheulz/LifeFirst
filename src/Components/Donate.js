import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import womansmiling from '../Images/woman-smiling.svg'

const Style = styled.div`
   background: #F5F5F5;
   width: 100%;

   .d-feed-1 {
     background-image: url(${womansmiling});
     background-size: cover;
     height: 70vh;
     padding-top: 7rem;
   }
   .btn-div {
     margin: 0 auto;
     justify-content: space-evenly;
   }
   h4 {
    color: #fff;
    font-size: 5rem;
    font-weight: 600;
   }
  .d-feed-1 {
    p {
      color: #fff;
      font-size: 2rem;
      font-weight: 500;
      padding-top: .5rem;
     }
     .d-btn {
      background: #C40000;
      border-radius: 10px;
      color: #fff;
      border: none;
      font-size: 1.8rem;
      padding: 0.7rem 1rem ;
     }
     .r-btn {
      background: #1D4ED8;
      border-radius: 10px;
      color: #fff;
      border: none;
      font-size: 1.8rem;
      padding: 0.7rem 1rem;
     }
  }
  .d-feed-2 {
    .btn-primary {
      border-radius: 10px;
      color: #fff;
      border: none;
      background: #C40000;
      font-size: 1.8rem;
      padding: .7rem 1rem;
    }
    .card-title {
      font-size: 4rem;
      color: #1D4ED8;
      padding-bottom: 1rem;
    }
    p {
      font-size: 1.3rem;
      font-weight: 600;
      padding: 1rem 0;
    }
  }

  @media screen and (max-width: 768px) {
    br {
      display: none;
    }
    .d-btn, .r-btn {
      margin: .5rem auto;
    }
    .d-feed-1 {
      height: 40vh;
      background-position: center;
      padding-top: 5rem;
    }
    .btn-div {
      flex-direction: column !important;
    }
    .d-card {
      padding: 1rem 0;
    }
  }

  @media screen and (max-width: 375px) {
    .d-feed-1 {
      height: 55vh;
      padding: 2rem 0;
    }
    h4 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`

function Donate() {
  return (
    <Style>
        <div className='container'>
            <Navigation/>
            <div className='d-feed-1'>
              <h4>Be the reason for <br/> 
              someone's heartbeat.
              </h4>
              <p>A single drop of blood can makes a huge difference.</p>
              <div className='btn-div d-flex'>
                <button className='d-btn'>Donate Blood</button>
                <button className='r-btn'>Donate Blood</button>
              </div>
            </div>
            <div className='row d-feed-2 '>
            <div class="col-md-6 shadow py-5 my-5 bg-white rounded d-card">
            <Card.Body>
              <Card.Title>Donor Health Benefit</Card.Title>
                <Card.Text>
                  Blood donation reduces iron level in the blood which would <br/>
                   prevent cancer, regular blood donation lower blood pressure <br/>
                    and a lower risk for heart attacks.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
          </Card.Body>
          </div>
          <div class="col-md-6 shadow py-5 my-5 bg-white rounded">
          <Card.Body>
              <Card.Title>Did you know?</Card.Title>
                <Card.Text>
                  Nigeria need an average of 1.8 Million pints of blood yearly <br/>
                  to keep the health of people safe and sound, Research <br/>
                  shows Nigeria only collects 500,000 pints yearly and  <br/> 
                  a shortfall of 73.3%.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
          </Card.Body>
          </div>
            </div>
        </div>
    </Style>
  )
}

export default Donate