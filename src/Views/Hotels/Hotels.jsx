import { Link, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { HotelsContainer, RowContainer, ColContainer, ImgContainer } from "./styles";

const Hotels = (props) => {
  const { hotels } = props;
  const navigate = useNavigate();

  const makeReview = (id) => {
    navigate('/makeReview', { state: { id }})
  }

  const viewReviews = (id) => {
    navigate('/reviews', { state: { id }})
  }
  
  return (
    <HotelsContainer className="multiRows" rows={4} cols="100%">
      {hotels?.map(hotel => (
        <RowContainer key={v4()}>
          <ColContainer width="15%">
            <ImgContainer></ImgContainer>
          </ColContainer>
          <ColContainer width="65%">
            <div>{hotel.hotelName}</div>
            <div>City: {hotel.city}</div>
            <div>Amenities: {hotel.amanities}</div>
            <div>Address: {hotel.address}</div>
            <div>Contact No: {hotel.phoneNo}</div>
          </ColContainer>
          <ColContainer width="15%">
            <button><Link to={`/bookRoom/${hotel.hotelName}`}>Book A Room</Link></button>
            <button onClick={() => makeReview(hotel.id)}>Add Review</button>
            <button onClick={() => viewReviews(hotel.id)}>View Reviews</button>
          </ColContainer>
        </RowContainer>
      ))}
    </HotelsContainer>
  );
}

export default Hotels;