import './App.css';
import { useEffect, useState } from 'react';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=8a3159b3c2a9e06e5d282c339739637c";


function App() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setMovies(data.results);
            })
    }, []);

    const searchMovie = async (e) => {
        e.preventDefault();

        try {
            const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=8a3159b3c2a9e06e5d282c339739637c`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(movies);
            setMovies(data.results);
        }
        catch (e) {
            console.log(e);
        }
    }

    const changeHandler = (e) => {
        setQuery(e.target.value);
    }

    return (

        <>

            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">KATFLIX</Navbar.Brand>
                    <Navbar.Brand href="/home">Trending</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

                    <Navbar.Collapse id="nabarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-3"
                            style={{ maxHeight: '100px' }}
                            navbarScroll></Nav>

                        <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
                            <FormControl
                                type="search"
                                placeholder="Movie Search"
                                className="me-2"
                                aria-label="search"
                                name="query"
                                value={query} onChange={changeHandler}></FormControl>
                            <Button variant="secondary" type="submit">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div style={{ border: '1px solid green' }}>
                {movies.length > 0 ? (
                    <div className='container'>
                        <div className="grid">
                            {movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq} />)}
                        </div>
                    </div>
                ) :
                    (
                        <h2>No matches found :(</h2>
                    )
                }

            </div>
        </>
    );
}

export default App;
