import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ReviewContainer } from './styles';

const Reviews = ({ onGetHotelById }) => {
  const { state: { id }} = useLocation();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    onGetHotelById(id).then(res => setReviews(res.reviews));
  }, [onGetHotelById, id])

  useEffect(() => {
    console.log(reviews);
  }, [reviews])

  return (
    <ReviewContainer height="100%">
      <div>
        <h2>Customers' Reviews</h2>
        <main>
          {reviews?.map(review => <div>{review}</div>)}
        </main>
      </div>
    </ReviewContainer>
  );
};

export default Reviews;
