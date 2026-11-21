export default function Footer(){
    return(
    <footer className="col-lg-12 pt-3 border-top mt-5">
        <div className="row">
        <div className="col-lg-4 d-flex align-items-end">
            <ul className="list-unstyled text-small">
            <li><small className="d-block mb-3 text-muted">Marcelo Victor Alberici de Sousa - 2023 | v1.3</small></li>
            </ul>
        </div>
        <div className="col-lg-4 d-flex justify-content-center">
            <div className="row">
            <h5 className="col-lg-12 d-flex justify-content-center">Contact</h5>
            <div className="col-lg-12 d-flex justify-content-center">
                <a className="col-lg-4 d-flex justify-content-center" href="mailto:marcelo.victor010@gmail.com" target="_blank">
                <img className="contact-img" src="img/envelope-solid.svg" />
                </a>
                <a className="col-lg-4 d-flex justify-content-center" href="https://www.linkedin.com/in/marcelovas" target="_blank">
                <img className="contact-img" src="img/linkedin-brands.svg" />
                </a>
            </div>
            </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-end">
            <img className="mb-2" src="img/vas-logo.svg" alt="" width="100" />
        </div>
        </div>
    </footer>
    )
}