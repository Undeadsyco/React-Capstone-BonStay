import { Routes, Route } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";

import { 
  Home, Register, Login, Hotels, BookingForm,
  Bookings, Reschedule, ReviewForm, Reviews,
} from "./Views";

import { Header, PrivateRoute } from './Components';
import { Container } from "./GlobalStyles/GlobalStyles";

import actions from "./actions/actions";
import { useEffect } from "react";

const RoutesContainer = styled(Container)``;

const App = (props) => {
  const { onGetHotels } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    onGetHotels()
    const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        dispatch({ type: 'LOGIN', data: { ...user } })
      }
  }, [onGetHotels, dispatch]);

  return (
    <Container>
      <Header isLoggedIn={props.isLoggedIn} />
      <RoutesContainer height='90%'>
        <Routes>
          <Route path='/login' element={<Login {...props} />} />
          <Route path='/register' element={<Register {...props} />} />
          <Route path='/' element={<PrivateRoute {...props} />}>
            <Route path='/' element={<Home />} />
            <Route path='/hotels' element={<Hotels {...props} />} />
            <Route path='/bookings' element={<Bookings {...props} />} />
            <Route path='/bookRoom/:name' element={<BookingForm {...props} />} />
            <Route path='/reschedule/:id' element={<Reschedule {...props} />} />
            <Route path='/makeReview' element={<ReviewForm {...props} />} />
            <Route path='/reviews' element={<Reviews {...props} />} />
          </Route>
        </Routes>
      </RoutesContainer>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
  user: state.user,
  hotels: state.hotels,
  bookings: state.bookings
});

const mapDispatchToProps = (dispatch) => {
  const { 
    register, login, getHotels, getHotel, makeBooking, getBookings,
    deleteBooking, rescheduleBooking, makeReview, getHotelById,
  } = actions;
  return ({
    onRegister: (body) => register(body),
    onLogin: (email) => login(email),
    onGetHotels: () => getHotels().then(data => dispatch({ type: 'GET_HOTELS', data })),
    onGetHotel: (name) => getHotel(name),
    onGetHotelById: (id) => getHotelById(id),
    onMakeBooking: (body) => makeBooking(body),
    onGetBookings: (id) => getBookings(id).then(data => dispatch({ type: 'GET_BOOKINGS', data })),
    onDeleteBooking: (id) => deleteBooking(id),
    onRescheduleBooking: (userId, bookingId, body) => rescheduleBooking(userId, bookingId, body),
    onMakeReview: (id, body) => makeReview(id, body),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(App);