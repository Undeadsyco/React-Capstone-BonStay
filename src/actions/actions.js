import axios from "axios";

const baseUrl = 'http://localhost:5000'

const actions = {
  register: async (body) => {
    const req = await axios.post(`${baseUrl}/users`, body);
    const res = await req.data;
    return res;
  },
  login: async (email) => {
    const req = await axios.get(`${baseUrl}/users?email=${email}`);
    const res = await req.data;
    return res[0];
  },
  getHotels: async () => {
    const req = await axios.get(`${baseUrl}/hotels`);
    const res = await req.data;
    return res;
  },
  getHotel: async (name) => {
    const req = await axios.get(`${baseUrl}/hotels?hotelName=${name}`);
    const res = await req.data;
    return res[0];
  },
  getHotelById: async (id) => {
    const req = await axios.get(`${baseUrl}/hotels/${id}`);
    const res = await req.data;
    console.log(res);
    return res;
  },
  makeBooking: async (body) => {
    const req = await axios.post(`${baseUrl}/bookings`, body);
    const res = await req.data;
    return res;
  },
  getBookings: async (id) => {
    const req = await axios.get(`${baseUrl}/bookings?userId=${id}`);
    const res = await req.data;
    return res;
  },
  deleteBooking: async (id) => {
    const req = await axios.delete(`${baseUrl}/bookings/${id}`);
    const res = await req.data;
    return res;
  },
  rescheduleBooking: async (id, body) => {
    const req = await axios.patch(`${baseUrl}/bookings/${id}`, body);
    const res = await req.data;
    return res;
  },
  makeReview: async (id, body) => {
    const hotel = (await axios.get(`${baseUrl}/hotels/${id}`)).data;
    const req = await axios.patch(`${baseUrl}/hotels/${id}`, {
      reviews: [...hotel.reviews, body.review]
    });
    const res = await req.data;
    console.log(res);
    return res;
  }
};

export default actions;