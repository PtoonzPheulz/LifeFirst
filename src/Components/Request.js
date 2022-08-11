import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import rectwo from '../Images/Rectangle-39.svg'
import recone from '../Images/Rectangle-39-1.svg'
import recfour from '../Images/Rectangle-39-2.svg'
import recthree from '../Images/Rectangle-39-3.svg'

const Style = styled.div`
     background: #F5F5F5;
     .card {
         border: none;

         .btn-primary {
            border-radius: 10px;
            color: #fff;
            border: none;
            background: #C40000;
            font-size: 1.8rem;
            padding: .7rem 1rem;
          }
          p {
            font-size: 1.3rem;
            font-weight: 600;
          }
     }
     
     @media screen and (max-width: 768px) {
         br {
             display: none;
         }
     }
`

function Request() {
  return (
    <Style>
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                    <Card className='w-100 shadow mb-5 bg-white rounded'>
                    <Card.Img variant="top" src={recone} />
                    <Card.Body>
                        <Card.Text>
                        Is today your first time here? please register to <br/> 
                        start your donation process
                        </Card.Text>
                        <Button variant="primary">Register</Button>
                    </Card.Body>
                    </Card>
                    </div>

                    <div className='col-md-6'>
                    <Card className='w-100 shadow mb-5 bg-white rounded'>
                    <Card.Img variant="top" src={rectwo} />
                    <Card.Body>
                        <Card.Text>
                        Do you want to know if you are qualify to donate <br/> 
                        again?
                        </Card.Text>
                        <Button variant="primary">Find out Here</Button>
                    </Card.Body>
                    </Card>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                    <Card className='w-100 shadow mb-5 bg-white rounded'>
                    <Card.Img variant="top" src={recthree} />
                    <Card.Body>
                        <Card.Text>
                        Do you know any one that are in need of Blood? Please <br/> 
                        make a request now.
                        </Card.Text>
                        <Button variant="primary">Request Here</Button>
                    </Card.Body>
                    </Card>
                    </div>

                    <div className='col-md-6'>
                    <Card className='w-100 shadow mb-5 bg-white rounded'>
                    <Card.Img variant="top" src={recfour} />
                    <Card.Body>
                        <Card.Text>
                        Want to find out if you are Elibigible to  donate ? <br/> 
                        Check our Educational Material
                        </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
        </div>
    </Style>
  )
}

export default Request