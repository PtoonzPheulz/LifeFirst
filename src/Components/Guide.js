import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import rectan from '../Images/Rectangle-33.svg'

const Style = styled.div`
   background: #F5F5F5;

   .card-title {
     font-size: 2.5rem;
     font-weight: 600;
     color: #1D4ED8;
   }
   p {
    font-size: 1.3rem;
    font-weight: 600;
    padding: 1rem 0;
   }
   .card {
     border: none;
     flex-direction: column-reverse;

    .btn-primary {
      border-radius: 10px;
      color: #fff;
      border: none;
      background: #C40000;
      font-size: 1.8rem;
      padding: .7rem 1rem;
    }
   }
   .card-img-top {
    padding: 3rem 10rem;
   }
   .g-bg {
     background: #fff;
   }
   @media screen and (max-width: 375px){
    .card-img-top {
     padding: 0;
   }
   }
   
`

function Guide() {
  return (
    <Style>
        <div className='container g-bg'>
            <Card className='w-100% py-5'>
                <Card.Img variant="top" src={rectan}/>
                <Card.Body>
                <Card.Title>Are you new to Blood Donation?</Card.Title>
                    <Card.Text>
                   Download a copy of Donor Guide
                    </Card.Text>
                    <Button variant="primary">Download Guide</Button>
                </Card.Body>
            </Card>
        </div>
    </Style>
  )
}

export default Guide