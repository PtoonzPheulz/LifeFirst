import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import recttwo from '../Images/Rectangle-28.svg'
import rectthree from '../Images/Rectangle-28-1.svg'
import rectone from '../Images/Rectangle-28-2.svg'

const Style = styled.div`
     background: #F5F5F5;

     h4 {
        font-size: 4rem;
        font-weight: 600;
        color: #1D4ED8;
     }
     .n-bg {
         background: #fff;
     }
     .card {
         border: none;

         p {
            font-size: 2rem;
            font-weight: 600;
         }
         .btn-primary {
            border-radius: 10px;
            color: #fff;
            border: none;
            background: #C40000;
            font-size: 1.8rem;
            padding: .7rem 1rem;
          }
     }

     @media screen and (max-width: 768px) {
         .i-padding {
             padding: 1.5rem 0rem;
             font-size: 2rem;
             font-weight: 600;
         }
     }
`

function Involved() {
  return (
    <Style>
        <div>
            <div className='container n-bg'>
                <h4 className='pb-5'>Get Involved</h4>
                <div className='row'>
                    <div className='col-md-4'>
                    <Card className='w-100 shadow mb-5 bg-white rounded'>
                    <Card.Img variant="top" src={rectone} />
                    <Card.Body>
                        <Card.Text className='i-padding'>
                        Raise Awareness
                        </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                    </Card>
                    </div>

                    <div className='col-md-4'>
                    <Card className='w-100 shadow mb-5 bg-white rounded'>
                    <Card.Img variant="top" src={recttwo} />
                    <Card.Body>
                        <Card.Text className='i-padding'>
                        Partner with us
                        </Card.Text>
                        <Button variant="primary">Find out Here</Button>
                    </Card.Body>
                    </Card>
                    </div>

                    <div className='col-md-4'>
                    <Card className='w-100 shadow mb-5 bg-white rounded'>
                    <Card.Img variant="top" src={rectthree} />
                    <Card.Body>
                        <Card.Text>
                        Donate Financially
                        </Card.Text>
                        <Button variant="primary">Donate Here</Button>
                    </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
        </div>
    </Style>
  )
}

export default Involved