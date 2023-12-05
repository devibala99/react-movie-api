import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import './App.css'
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ title, poster_path, vote_average, release_data, overview }) => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }
    return (
        <div className='card text-center  mb-3'>

            <div className="card-body">
                <img className="card-img-top img-fluid col-md-4" style={{ maxWidth: '100%', height: 'auto' }} src={API_IMG + poster_path} alt={title} />
                <div className="card-body d-flex justify-content-center">
                    <button type="button" className='btn btn-danger' onClick={handleShow}>View</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className="card-img-top" style={{ width: "14rem" }} src={API_IMG + poster_path} alt={title} />
                            <h3>{title}</h3>
                            <h4>IMDB: {vote_average}</h4>
                            <h5>Release Date: {release_data}</h5>
                            <br />
                            <h6>Overview:</h6>
                            <p>{overview}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button varient="secondary" className='btn btn-danger' onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>

        </div>
    )
}

export default MovieBox
