import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';

class CarruselComponent extends Component {
    render() {
        return (
            <div>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Football_iu_1996.jpg"
                            alt="First slide" width="250" height="500"
                        />
                        <Carousel.Caption>
                            <h3>Bienvenidos a Sinplafut</h3>
                            <p>"El futbol corre por las venas - Diego Maradona".</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://confa.co/wp-content/uploads/2018/04/F%C3%BAtbol-sal%C3%B3n-Confa-2018.jpg"
                            alt="Second slide" width="250" height="500"
                        />

                        <Carousel.Caption>
                            <h3>Sistema de gestion de Sinplafut</h3>
                            <p>Pagina para administracion del negocio.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://lh3.googleusercontent.com/XB-52h4LXRhmfQPBBwf-_6Wg5WzR1qFX3RQu0PKlUJC7M0VADTCGGpO96jUSB4SXejfVn9tyDO4mO2BU25X3XGomsJaLq224KbUA1IYPWBF4NLT9PO3x19SnujmvPvW-U_USF-00rv00xhxL5jeOOIdJc5LOdh8PLPJ82u6eVKXm7yBF23lPNFp4VMIbudVVbH-CGUy1Zzr96c5S8MIB07YZZca7y23_4VRE5kEQ3Jd0QQoBdO0brJRWJBJ4-ZuwQGatkWVmM8yzBMR-i9Y5p_9R7Xzxs6RjkiLq7Ron5tROqIf2r6fP7POK36GMdjLUVdeVXr7oD-WwJv0rlJyqbSeiegZoDlrivk266-hgbD2BItJRyei7ARNGjmWfsoy7X64ee9KZV66GIR6Ql5dEZuREMEzxUzvRwu91gQgeYf9eKH2A40yOE85cePeZxaAqlVJ2yWjPz0mpgzAjsMCtO0GUyHMl3JdUlo4vJ_6jiOB8chh4dAmR6SODJHKJl0FueAou6Xn1W_cpfHA6iP5NaypmRjImH_1L_Hacp0WgL-BL4_cSn6sPOG_KG1ojxq4U0aEjGMbIdmy71j_oB4ONZJVUkLwqu015XLHxJMYDiBuSRhOuCIPwsJwtKXQn7W57OsAXU6pKqtMzPzmpAFyrdhNGFvy7DDHpzWCWCziGyy9JXtzeOjpkrcGTjnWkeHfTjpiFe8yFXtr640ea-8rqvOU=w1264-h948-no?authuser=0"
                            alt="Third slide" width="250" height="500"
                        />

                        <Carousel.Caption>
                            <h3>Plantilla profesional Juvenil </h3>
                            <p>Tenemos a los mejores jugadores del país</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        );
    }
}

export default CarruselComponent;