import React, { Component } from 'react'
import AuthenticateService from '../../Autenticacion/AuthenticateService';
import HeaderComponent from './HeaderComponent'
import '../../css/style.green.css'
import { Button, Card, CardGroup } from 'react-bootstrap';


class LandingPageComponent extends Component {
    render() {
        const authenticated = AuthenticateService.getAuthenticated();
        return (
            
            <div className="LandingPage container">
                <HeaderComponent></HeaderComponent>
                <section id="inicio" class="hero hero-home bg-gray">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-lg-6 text order-2 order-lg-1">
                                <h1>Bienvenidos a Sinplafut</h1>
                                <p className="hero-text">
                                    Plataforma de administracion de Clubes de Futbol Sinplafut
                                </p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Football_iu_1996.jpg" alt="..." className="img-fluid"></img></div>
                        </div>
                    </div>
                </section>
                <section id="nosotros" class="extra-features bg-primary">
                    <div className="container text-center">
                        <header>
                            <h2>Nuestras metas           </h2>
                            <div className="row">
                                <p className="lead col-lg-8 mx-auto">Aqui mostramos nuestros mejores habilidades de Sinplafut</p>
                            </div>
                        </header>
                        <div className="grid row">
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon"> <i className="icon-diploma"></i></div>
                                <h3 className="h5">Administracion de clubes</h3>
                                <p>INFORMACION ADICIONAL</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon"> <i className="icon-folder-1"></i></div>
                                <h3 className="h5">Control de roles del club</h3>
                                <p>INFORMACION ADICIONAL</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon"> <i className="icon-gears"></i></div>
                                <h3 className="h5">Administracion de los jugadores</h3>
                                <p>INFORMACION ADICIONAL</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon"> <i className="icon-management"></i></div>
                                <h3 className="h5">Administracion de los entrenamientos</h3>
                                <p>INFORMACION ADICIONAL</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon"> <i className="icon-pie-chart"></i></div>
                                <h3 className="h5">Lorem Ipsum Dolor</h3>
                                <p>INFORMACION ADICIONAL</p>
                            </div>
                            <div className="item col-lg-4 col-md-6">
                                <div className="icon"> <i className="icon-quality"></i></div>
                                <h3 className="h5">Lorem Ipsum Dolor</h3>
                                <p>INFORMACION ADICIONAL</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="equipo" className="hero hero-home bg-gray">
                    <div className="container">
                        <h2>Nuestro equipo de trabajo</h2>
                        <div className="row">
                            <p className="lead col-lg-10">
                                El equipo de trabajo consta de estudiantes de ingeniería de sistemas de la Universidad Francisco de Paula Santander
                                en la materia de micro servicios.
                            </p>
                        </div>
                        <div className="row justify-end">
                            <CardGroup>                    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" width="262px" height="262px" src="https://scontent.fbga2-1.fna.fbcdn.net/v/t1.18169-9/12039403_972786722759503_3161409764166785352_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=ZtXRTFqVZmEAX9Z3wak&tn=EI2o_F8mamOR9sZu&_nc_ht=scontent.fbga2-1.fna&oh=f93c0990b11092a8e5e205fa61549975&oe=60DA27C3" />
                                <Card.Body>
                                    <Card.Title>Ivan Uribe</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</Card.Text>
                                    
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" width="262px" height="262px"  src="https://scontent.fbga2-1.fna.fbcdn.net/v/t1.6435-1/p320x320/79839965_2484179581709436_2506036691920224256_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=7206a8&_nc_ohc=O5kuJN6xexEAX_IM0LV&_nc_ht=scontent.fbga2-1.fna&tp=6&oh=eeba6b47e5c978b253d25e2290525836&oe=60DB4FE1" />
                                <Card.Body>
                                    <Card.Title>Daniel Peña</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</Card.Text>
                                    
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" width="262px" height="262px"  src="https://scontent.fbga2-1.fna.fbcdn.net/v/t1.6435-1/p320x320/79839965_2484179581709436_2506036691920224256_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=7206a8&_nc_ohc=O5kuJN6xexEAX_IM0LV&_nc_ht=scontent.fbga2-1.fna&tp=6&oh=eeba6b47e5c978b253d25e2290525836&oe=60DB4FE1" />
                                <Card.Body>
                                    <Card.Title>Anderson Navarro</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</Card.Text>
                                    
                                </Card.Body>
                            </Card>
                            </CardGroup>
                        </div>
                    </div>
                </section>
                <section id="contacto" className="newsletter bg-gray">
                    <div className="container text-center">
                        <h2>Envíe un correo para contacto</h2>
                        <p className="lead">Aquí puede dejar el correo electronico para porveer mas informacion sobre Sinplafut</p>
                        <div className="form-holder">
                            <form id="newsletterForm" action="#">
                                <div className="form-group">
                                    <input type="email" name="email" id="email" placeholder="Correo electronico"></input>
                                    <button type="submit" className="btn btn-primary btn-gradient submit">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );

    }
}

export default LandingPageComponent;