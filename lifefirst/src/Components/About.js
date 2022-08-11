import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import logo from '../Images/newlogo.svg'
import Frame50 from '../Images/Frame50.svg'
import Frame51 from '../Images/Frame51.svg'
import social from '../Images/social-icon.svg'
import {BiWorld} from 'react-icons/bi'

const Style = styled.div`
     background: #000;
     padding: 1rem 0;
     
     h4, p {
         color: #fff;
     }
     .a-img-1 {
         padding-bottom: 3rem
     }
     .a-img-2 img{
        width: 90%;
        padding-bottom: 2rem;
    }
    .a-img-3 img{
        width: 90%;
    }
    .dir-btn {
        border-radius: 10px;
        color: #fff;
        border: #fff solid 1px;
        background: #000;
        font-size: 1.6rem;
        padding: 1.3rem;
        margin: .5rem 0;
      }
      h4 {
          font-size: 2.5rem;
          padding: 2rem 0;
      }
      p {
          font-size: 1.4rem;
      }
      .conbi p {
          padding: 1rem 0;
      }
      .btn-outline-secondary {
        color: #fff;
        border: #fff solid 1px;
      }

      @media screen and (max-width: 768px) {
          .input-group {
              padding: 0 !important;
          }
      }

      @media screen and (max-width: 375px) {
          .app-down {
              display: flex;
              justify-content: space-evenly;
          }
      }
`

function About() {
  return (
    <Style>
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='a-img-1'>
                            <img src={logo} alt/>
                        </div>
                        <div className='app-down'>
                        <div className='a-img-2'>
                            <img src={Frame50} alt/>
                        </div>
                        <div className='a-img-3'>
                            <img src={Frame51} alt/>
                        </div>
                        </div>
                        <div className='add'>
                            <h4>Address</h4>
                            <p>109, Lekki ajah road, Lagos.</p>
                            <button className='dir-btn'>Get Direction</button>
                        </div>
                        <div className='con'>
                            <h4>Contacts</h4>
                            <p>General info: 070000000</p>
                            <p>Book Appointment: 070000000</p>
                            <p>Blood Request: 070000000</p>
                            <p>Ticket info: ticket@lifefirst.com</p>
                        </div>
                    </div>
                    <div className='col-md-3 conbi'>
                        <h4>Company</h4>
                        <p>Donate Blood</p>
                        <p>Request Blood</p>
                        <p>Guide</p>
                        <p>Get Involved</p>
                        <p>About Us</p>
                    </div>
                    <div className='col-md-5'>
                        <h4>Get your Guide</h4>
                        <p>Get a copy of Blood Donation <br/> 
                        Educational Guide in your email</p>
                        <InputGroup className="mb-3 px-5">
                            <Form.Control
                            placeholder="Enter your Email"
                            aria-label="Enter your Email"
                            aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Download Guide
                            </Button>
                        </InputGroup>
                        <h4>Stay Connected</h4>
                        <div className='s-icon'>
                            <img src={social} alt/>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between py-4'>
                    <p><BiWorld size={20} color={'white'}/> English</p>
                    <p>Privacy</p>
                    <p>Legal</p>
                    <p>Accesibility</p>
                </div>
            </div>
        </div>
    </Style>
  )
}

export default About