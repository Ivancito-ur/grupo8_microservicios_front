
import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import AuthenticateService from '../Autenticacion/AuthenticateService.js'

class HeaderComponent extends Component {
    render() {
        const authenticated = AuthenticateService.getAuthenticated();
        return (
            <div className="headerComponent">
                <header className="p-3 bg-dark text-white">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            
                            <Link  to="/dashboard">
                            <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTExLjUzMyA1MTEuNTMzIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMS41MzMgNTExLjUzMyIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48cGF0aCBkPSJtMjU1Ljc3MiAzNTUuNjI4IDk0Ljk2OC02OS4wMDIgODYuNDc3IDI4LjYyMyAyMi40NDMgOTQuOTc4Yy03LjAyMSA5LjIyOS0xNC42OTkgMTguMDU0LTIzLjAzOSAyNi4zOTUtMjcuOTIxIDI3LjkyLTYxLjE2NiA0OC41NzMtOTcuNDM5IDYxLjA0N2wtODMuNDE2LTUxLjM4N3oiIGZpbGw9IiNmNmY5ZjkiLz48cGF0aCBkPSJtMjU1Ljc2NyAzNTUuNjI4LTk0Ljk3NS02OS4wMDMgMzYuMjc4LTExMS42NDhoMTE3LjM5M2wzNi4yNzggMTExLjY0OHoiIGZpbGw9IiMxMzU3NzIiLz48cGF0aCBkPSJtMTYwLjc5MiAyODYuNjI1IDk0Ljk3NCA2OS4wMDJ2OTAuNjUzbC04My4yMzkgNTEuNDQ4Yy0zNi4zNDEtMTIuNDY4LTY5LjY0OS0zMy4xNDItOTcuNjE1LTYxLjEwOC04LjI3NC04LjI3NC0xNS44OTQtMTcuMDI1LTIyLjg3LTI2LjE3M2wyMi4zNS05NS44Njl6IiBmaWxsPSIjZjZmOWY5Ii8+PHBhdGggZD0ibTMzOS4xODIgNDk3LjY2OGMtMjYuNDg2IDkuMTA5LTU0LjU4MyAxMy44NjUtODMuNDE2IDEzLjg2NS0yOC43NjggMC01Ni44MDUtNC43MzUtODMuMjM5LTEzLjgwNGw4My4yMzktNTEuNDQ4eiIgZmlsbD0iIzEzNTc3MiIvPjxwYXRoIGQ9Im0xOTcuMDcgMTc0Ljk3Ny0zNi4yNzcgMTExLjY0OC04Ni40MDEgMjcuOTU0LTc0LjMyMi02NC41N2MxLjEyNy01MS4zNDkgMTcuMzA2LTEwMC4xODIgNDYuNDQ0LTE0MS40MjJsOTcuNzUzLTcuMzJ6IiBmaWxsPSIjZWNlY2VmIi8+PHBhdGggZD0ibTMxNC40NjMgMTc0Ljk3N2gtMTE3LjM5M2wtNTIuODAzLTczLjcxIDM3LjIwMS05MC4zNjJjMjMuNzgyLTcuMTgzIDQ4Ljc1NC0xMC45MDUgNzQuMjk5LTEwLjkwNSAyNS41NzYgMCA1MC41NzggMy43MyA3NC4zODcgMTAuOTNsMzcuODYzIDkwLjcxMXoiIGZpbGw9IiNmNmY5ZjkiLz48cGF0aCBkPSJtNDM3LjIxNyAzMTUuMjQ5LTg2LjQ3Ny0yOC42MjMtMzYuMjc3LTExMS42NDggNTMuNTUzLTczLjMzNSA5Ny4yODEgNy4zNGMyOS4wNjIgNDEuMjk4IDQ1LjE0OCA5MC4xNzcgNDYuMTcyIDE0MS41NTV6IiBmaWxsPSIjZWNlY2VmIi8+PGcgZmlsbD0iIzEzNTc3MiI+PHBhdGggZD0ibTUyLjA0MiA0MTAuNDQ4Yy0zMy43NTQtNDQuMjY2LTUyLjA0Mi05OC4wNjQtNTIuMDQyLTE1NC42ODEgMC0xLjkyMy4wMjgtMy44NDIuMDctNS43NThsNzQuMzIyIDY0LjU3eiIvPjxwYXRoIGQ9Im00Ni41MTQgMTA4LjU4N2M4LjQwNi0xMS44OTcgMTcuODg3LTIzLjE2NCAyOC4zOTgtMzMuNjc1IDMwLjI0NS0zMC4yNDUgNjYuNzMyLTUxLjk4IDEwNi41NTUtNjQuMDA4bC0zNy4yMDEgOTAuMzYyeiIvPjxwYXRoIGQ9Im00NjUuMjk4IDEwOC45ODItOTcuMjgxLTcuMzQtMzcuODYzLTkwLjcxMmMzOS43ODkgMTIuMDMzIDc2LjI0NCAzMy43NTkgMTA2LjQ2NyA2My45ODIgMTAuNjI4IDEwLjYyOCAyMC4yMDIgMjIuMDI3IDI4LjY3NyAzNC4wN3oiLz48cGF0aCBkPSJtNTExLjQ3IDI1MC41MzdjLjAzNSAxLjc0MS4wNjQgMy40ODMuMDY0IDUuMjMgMCA1Ni41MjItMTguMjI3IDExMC4yMzYtNTEuODczIDE1NC40NTlsLTIyLjQ0My05NC45Nzh6Ii8+PC9nPjxwYXRoIGQ9Im0yNTUuNzcyIDM1NS42MjggOTQuOTY4LTY5LjAwMiA4Ni40NzcgMjguNjIzIDIyLjQ0MyA5NC45NzhjLTcuMDIxIDkuMjI5LTE0LjY5OSAxOC4wNTQtMjMuMDM5IDI2LjM5NS0yNy45MjEgMjcuOTItNjEuMTY2IDQ4LjU3My05Ny40MzkgNjEuMDQ3bC04My40MTYtNTEuMzg3eiIgZmlsbD0iI2VjZWNlZiIvPjxwYXRoIGQ9Im00MzcuMjE3IDMxNS4yNDktODYuNDc3LTI4LjYyMy0zNi4yNzctMTExLjY0OCA1My41NTMtNzMuMzM1IDk3LjI4MSA3LjM0YzI5LjA2MiA0MS4yOTggNDUuMTQ4IDkwLjE3NyA0Ni4xNzIgMTQxLjU1NXoiIGZpbGw9IiNkZGRkZGYiLz48cGF0aCBkPSJtNDY1LjI5OCAxMDguOTgyLTk3LjI4MS03LjM0LTM3Ljg2My05MC43MTJjMzkuNzg5IDEyLjAzMyA3Ni4yNDQgMzMuNzU5IDEwNi40NjcgNjMuOTgyIDEwLjYyOCAxMC42MjggMjAuMjAyIDIyLjAyNyAyOC42NzcgMzQuMDd6IiBmaWxsPSIjMDkzZjYxIi8+PHBhdGggZD0ibTUxMS40NyAyNTAuNTM3Yy4wMzUgMS43NDEuMDY0IDMuNDgzLjA2NCA1LjIzIDAgNTYuNTIyLTE4LjIyNyAxMTAuMjM2LTUxLjg3MyAxNTQuNDU5bC0yMi40NDMtOTQuOTc4eiIgZmlsbD0iIzA5M2Y2MSIvPjxwYXRoIGQ9Im0yNTUuNzY3IDUxMS41MzNjMjguODMyIDAgNTYuOTI5LTQuNzU2IDgzLjQxNi0xMy44NjVsLTgzLjQxNi01MS4zODd6IiBmaWxsPSIjMDkzZjYxIi8+PHBhdGggZD0ibTM2OC4wMTcgMTAxLjY0Mi0zNy44NjMtOTAuNzEyYy0yMy44MDktNy4yLTQ4LjgxMS0xMC45My03NC4zODctMTAuOTN2MTc0Ljk3N2g1OC42OTd6IiBmaWxsPSIjZWNlY2VmIi8+PHBhdGggZD0ibTMxNC40NjMgMTc0Ljk3N2gtNTguNjk2djE4MC42NTFsOTQuOTc0LTY5LjAwM3oiIGZpbGw9IiMwOTNmNjEiLz48L2c+PC9zdmc+"
                                height="50" width="50" />
                            </Link>
                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                {!authenticated && <li><Link className="nav-link px-2 text-white" to="/inicio">Inicio</Link></li>}
                                {!authenticated && <li><Link className="nav-link px-2 text-white" to="/">Novedades</Link></li>}
                                {!authenticated && <li><Link className="nav-link px-2 text-white" to="/">Nosotros</Link></li>}
                                {!authenticated && <li><Link className="nav-link px-2 text-white" to="/">FAQs</Link></li>}


                                {authenticated && <li><Link className="nav-link px-2 text-white" to="/roles">Roles guardados</Link></li>}
                                {authenticated && <li><Link className="nav-link px-2 text-white" to="/usuarios">Usuarios guardados</Link></li>}

                            </ul>

                            <div className="text-end">
                                {!authenticated && <Link type="button" className="btn btn-outline-light me-2" to="/login">Login</Link>}
                                {authenticated && <Link type="button" to="/login" onClick={AuthenticateService.logout} className="btn btn-outline-light me-2" >Log out</Link>}
                                {!authenticated && <Link type="button" className="btn btn-warning" to="/registro">Registro</Link>}

                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }

    logOut() {

    }
}

export default withRouter(HeaderComponent);
