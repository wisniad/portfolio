import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import ReactTooltip from 'react-tooltip'
import Typist from 'react-typist';
import ResponsiveDialog from './components/ResponsiveDialog';
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import FaGithub from 'react-icons/lib/fa/github';
import MdMailOutline from 'react-icons/lib/md/mail-outline'

class App extends Component {

    render() {

        return (
            <div className="content">
                <Grid container justify="space-around" alignItems="center">
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className="">
                            <Typist cursor={{show: false}}>
                                <h1 className="divContainer__centered">Hi!<Typist.Delay ms={500}/></h1>
                                <h2 className="divContainer__centered"> Welcome to my website.</h2>
                                <h2 className="divContainer__centered">My name is:</h2>
                                <Typist.Delay ms={500}/>
                                <h1 className="divContainer__centered divContainer__important">Damian Wiśniewski</h1>
                            </Typist>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div>
                            <h2>
                                I’m looking for the opportunity to work as a Frontend developer in
                                <a data-tip data-for='global'> Tricity</a>.</h2>
                            <ReactTooltip id='global' place="top" type="light"
                                          effect="float">
                                <p>Gdynia, Sopot, Gdańsk</p>
                            </ReactTooltip>
                            <p>
                                I'm constantly learning and improving my development skills.
                                I’ve IT knowledge from studying programming and system development at University West in
                                Sweden, furthermore I’ve completed Front-end developer bootcamp at InfoShare
                                Academy.
                            </p>
                            <p>
                                I have knowledge in React and I’m using Redux & React-router in application development.
                                I’m very motivated and I’m constantly learning new things to improve my knowledge and
                                skill-set.
                            </p>
                            <p>
                                Over the course of my career, I have developed communication and problem-solving skills,
                                which I
                                hope to leverage into the Front-end developer role at your company.
                            </p>
                            <p>
                                I’ve used languages: <u>Polish</u>, <u>English</u> and <u>Swedish</u> in my previous
                                jobs and I’m used to using them on daily basis.
                                I hope that I am the type of competent and competitive candidate you are looking for.
                                I look forward to elaborating on how my specific skills and abilities
                                will benefit your organization. I will send my CV on request.
                            </p>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <h2>My projects:</h2>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <div className="divContainer__centered">
                            <div>
                            <img src={require('./img/beerapp.jpeg')} alt="Beerapp thumbnail" className="gallery"/>
                            <h3 className="divContainer__centered">Beer App</h3>
                            <ResponsiveDialog
                                name="Beer app"
                                picture={<img src={require('./img/beerapp.jpeg')} alt="Beer app thumbnail"/>}
                                text="Hobby project to search for the best beers.
                                      Website created with ReactJS, Redux, React-Router.
                                      Data received from open API, layout made with Material UI"
                                link="http://beer-find-app.herokuapp.com"
                            />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <div className="divContainer__centered">
                            <div>
                            <img src={require('./img/dreamersapp.jpeg')} alt="Dreamers app thumbnail"
                                 className="gallery"/>
                            <h3 className="divContainer__centered">Dreamers App</h3>
                            <ResponsiveDialog
                                name="Dreamers app"
                                picture={<img src={require('./img/dreamersapp.jpeg')} alt="Dreamersapp thumbnail"/>}
                                text="Project was created during the course Frontend developer by team in which i managed workflow and project development.
                                      Website uses ReactJS, Redux, React-Router, Login functionality is connected to Firebase.
                                      Website receives it's events from free API and the design is based on Bootstrap."
                                link="http://app.dreamers.jfdz6.is-academy.pl"
                            />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={3} xl={3}>
                        <div className="divContainer__centered">
                            <div>
                            <img src={require('./img/noblespeakers.jpeg')} alt="Noble speakers thumbnail"
                                 className="gallery"/>
                            <h3 className="divContainer__centered">Noble Speakers</h3>
                            <ResponsiveDialog
                                name="Noble Speakers Bureau"
                                picture={<img src={require('./img/noblespeakers.jpeg')} alt="Noble speakers thumbnail"/>}
                                text="Website created for the company Noble Speakers Bureau in which I worked.
                                      I created layout and it's functionality.
                                      Website functionality is created with JS with JQuery and pure PHP to receive data from SQL database.
                                      No framework was used."
                                link="https://www.noblespeakers.com/"
                            />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className="divContainer__centered">
                        <p>If you want to know more about my projects, please feel free to contact me.</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid item xs={4} sm={4}>
                            <p><FaLinkedin/>LinkedIn</p>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <p><FaGithub/>GitHub</p>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <p><MdMailOutline/>Email</p>
                        </Grid>

                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default App;
