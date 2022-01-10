import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';

import {
  FormContainer, Form, Title, InputContainer, ErrContainer, Input, Select,
} from './styles';

const validation = yup.object({
  hotelName: yup.string(),
  startDate: yup.date().required(),
  endDate: yup.date().required(),
  noOfPersons: yup.number().required().min(1).max(5),
  noOfRooms: yup.number().required().min(1).max(3),
  roomType: yup.string(),
})

const BookingForm = (props) => {
  const { onGetHotel, user, onMakeBooking } = props;

  const { name } = useParams();
  const navigate = useNavigate();
  
  const [hotel, setHotel] = useState({})

  useEffect(() => {
    onGetHotel(name).then(data => {
      setHotel(data);
    });
  }, [name, onGetHotel])

  useEffect(() => {}, [hotel])

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      startDate: new Date(),
      endDate: new Date(),
      noOfPersons: undefined,
      noOfRooms: undefined,
      roomType: '',
    },
    onSubmit: (values, actions) => {
      const { startDate, endDate } = values;
      if (startDate > endDate) {
        actions.setFieldError('endDate', 'end date must be on or after start date');
        return;
      }
      
      onMakeBooking({
        ...values,
        user: user.id,
        hotelId: hotel.id,
        hotelName: hotel.hotelName,
      }).then(data => {
        if (data.hotelId) {
          alert('Booking was successful');
          navigate('/bookings');
        } else {
          alert('something went wrong');
        }
      })
    },
  });

  return (
    <FormContainer width="100%" height="100%">
      <Form onSubmit={formik.handleSubmit}>
        <Title>Book A Room</Title>
        <InputContainer>
          <label htmlFor="startDate">Start Date:</label>
          {formik.errors.startDate && <ErrContainer>{formik.errors.startDate}</ErrContainer>}
          <Input
            id="startDate"
            name="startDate"
            type="date"
            value={formik.values.startDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="endDate">End Date:</label>
          {formik.errors.endDate && <ErrContainer>{formik.errors.endDate}</ErrContainer>}
          <Input
            id="endDate"
            name="endDate"
            type="date"
            value={formik.values.endDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="noOfPersons">No of Persons</label>
          {formik.errors.noOfPersons && <ErrContainer>{formik.errors.noOfPersons}</ErrContainer>}
          <Input
            id="noOfPersons"
            name="noOfPersons"
            type="number"
            value={formik.values.noOfPersons}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="noOfRooms">No of Rooms</label>
          {formik.errors.noOfRooms && <ErrContainer>{formik.errors.noOfRooms}</ErrContainer>}
          <Input
            id="noOfRooms"
            name="noOfRooms"
            type="number"
            value={formik.values.noOfRooms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="roomType">Type of Room:</label>
          {formik.errors.roomType && formik.touched.roomType && <ErrContainer>{formik.errors.roomType}</ErrContainer>}
          <Select
            id="roomType"
            name="roomType"
            value={formik.values.roomType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value=''>-- Select Room Type --</option>
            <option value='AC'>AC</option>
          </Select>
        </InputContainer>

        <div>
          <button type="submit">Book</button>
        </div>
      </Form>
    </FormContainer>
  );
}

export default BookingForm;