import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import {
  BookingContainer, ItemContainer,
  Info, BtnBox, InfoContainer,
} from './styles';

const Bookings = ({ bookings, onGetBookings, user, onDeleteBooking }) => {
  const navigate = useNavigate();
  useEffect(() => {
    onGetBookings(user.id);
  }, [onGetBookings, user])

  const deleteBooking = async (id) => {
    await onDeleteBooking(id)
    onGetBookings(user.id)
  }

  const reschedule = ({ id, startDate, endDate }) => {
    navigate(`/reschedule/${id}`, { state: {startDate, endDate} })
  }

  return (
    <BookingContainer className="multiGrid" rows={2} cols={3}>
      {bookings?.map(item => (
        <ItemContainer key={v4()}>
          <InfoContainer>
            <Info><h4>{`B-${item.id}`}</h4></Info>
            <Info>Hotel: {item.hotelName}</Info>
            <Info>Start Date: {item.startDate}</Info>
            <Info>End Date: {item.endDate}</Info>
            <Info>
              No of Persons: {item.noOfPersons}
              No of Rooms: {item.noOfRooms}
            </Info>
            <Info>Type of Room: {item.roomType}</Info>
          </InfoContainer>
          <BtnBox>
            <button type="button" onClick={() => reschedule(item)}>Reschedule</button>
            <button type="button" onClick={() => deleteBooking(item.id)}>Cancel</button>
          </BtnBox>
        </ItemContainer>
      ))}
    </BookingContainer>
  );
}

export default Bookings;
