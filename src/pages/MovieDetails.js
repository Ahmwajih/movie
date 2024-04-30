import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "../components/styleCompo.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const API_KEY = "1a03f114fafb6cba6699cd42b9f8d71b";

  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      setMovieDetails(response.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const fetchVideo = async () => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`, options);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const videoKey = data.results[0].key;
        setMovieDetails(prevState => ({
          ...prevState,
          key: videoKey
        }));
      }
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchVideo();
  }, [id, API_KEY]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex justify-content-center pt-3 pb-4 bg-zinc-600">
      <Card className="w-75">
        <div className="row">
          <div className="col-md">
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w1280${movieDetails.poster_path}`}
              className="movie-image"
            />
            <Card.Body>
              <Card.Title>{movieDetails.original_title}</Card.Title>
              <Card.Text>{movieDetails.overview}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="d-flex flex-column justify-between">
                Release Date: {movieDetails.release_date}
              </ListGroup.Item>
              <ListGroup.Item>Rate: {movieDetails.vote_average}</ListGroup.Item>
              <ListGroup.Item>
                Total Vote: {movieDetails.vote_count}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button href="#">Go Link</Button>
            </Card.Body>
          </div>
          <div className="col-md-8 rightpart bg-slate-900 text-white rounded">
            <Card.Body>
              <Card.Title className="text-blue-gray-50">
                {movieDetails.original_title}
              </Card.Title>
            </Card.Body>
            <Card.Body>
              <iframe
                title="movie-video"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${movieDetails.key}?autoplay=1&mute=1`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Card.Body>
            <Card.Body>
              <Card.Text>{movieDetails.overview}</Card.Text>
              <Button href="#">Go Link</Button>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MovieDetails;
