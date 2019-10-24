import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import photo from './photo.jpeg';

const Styles = styled.div`

.img_p{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    position: absolute;
}


.head_t{
    padding-left: 70px;
    padding-top: 15px;
}

.text_b{
    padding-left: 70px; 
}

.link_b{
    padding-left:70px;
}
`;

const Style = {
    height: '390',
    width: '640',
    playerVars: { 
        autoplay: 1
    }}

const Style1 = {
        height: '150',
        width: '300',
        playerVars: {
            autoplay: 1
        }
    }

const Style2 = {
        height: '150',
        width: '300',
        playerVars: {
            autoplay: 1
        }
    }

const onImg =(event) =>{
        event.target.pauseVideo();
    }

    export const Jumbotron = () => (
        <Styles>
        <Container className="fluid" >
            <Row>
                <Col md={7}>
                    
                    <YouTube 
                    id="yhead"
                    videoId="jgVkR5EKI68"
                    opts={Style}
                    onReady={onImg}
                    />
                    <Card style={{ width: '45rem' }}>
                        
                        <Card.Body>
                            <Card.Title>Build a Website with React, React-Bootstrap and React-Router</Card.Title><br />
                            <Card.Img variant="left" src={photo} className="img_p"/>
                            <Card.Subtitle className="head_t">Brice Ayres <br />4.06K subscribers</Card.Subtitle><br />
                            <Card.Text className="text_b">
                            Please LIKE, SHARE or COMMENT if you appreciate this video! It helps others find the content.<br />
                            <br />
                            In this video, I use React, React-Bootstrap and React-Router to quickly build a website. 
                            I have another tutorial where I build a website with React and Bootstrap 4 but this time 
                            I wanted to use the React-Bootstrap library that many people have been asking about. 
                            Please leave a comment if you have any questions.
                            </Card.Text>
                            <Card.Link href="https://www.youtube.com/watch?v=jgVkR5EKI68" className="link_b"> 
                                New Updated Tutorial
                            </Card.Link>
                        </Card.Body>
                    </Card>
                    
                     
                </Col>
                <Col sm={{ span: 2, offset: 1 }}>
                    <YouTube 
                    id="y1"
                    videoId="2g811Eo7K8U"
                    opts={Style1}
                    onReady={onImg}
                    />   
                    <YouTube
                    id="y2"
                    videoId="CVpUuw9XSjY"
                    opts={Style2}
                    onReady={onImg}
                    />
                    <YouTube
                    id="y2"
                    videoId="kJeXr1K3nyg"
                    opts={Style2}
                    onReady={onImg}
                    />
                    <YouTube
                    id="y2"
                    videoId="Ke90Tje7VS0"
                    opts={Style2}
                    onReady={onImg}
                    />
                    <YouTube
                    id="y2"
                    videoId="Law7wfdg_ls"
                    opts={Style2}
                    onReady={onImg}
                    />
                    
                </Col>
                
            </Row>
            
        </Container>
        </Styles>
    )

    