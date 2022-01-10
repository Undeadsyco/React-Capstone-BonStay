import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';

import { RescheduleContainer, Form, InputContainer, BtnBox } from "./styles";

const validation = yup.object({
  startDate: yup.date().required(),
  endDate: yup.date().required(),
})

const Reschedule = ({ onRescheduleBooking }) => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      startDate: state.startDate,
      endDate: state.endDate,
    },
    onSubmit: (values) => {
      console.log(values);
      onRescheduleBooking(id, values).then(res => {
        const startMatch = res.startDate === values.startDate;
        const endMatch = res.endDate === values.endDate;
        if (startMatch && endMatch) {
          alert('your booking has been rescheduled');
          navigate('/bookings');
        } else {
          alert('something went wrong, please try again or contact us for assisstince')
        }
      });

    }
  });

  return (
    <RescheduleContainer height="100%">
      <Form onSubmit={formik.handleSubmit}>
        <h2>Book A Room</h2>
        <InputContainer>
          <label htmlFor="startDate">Start Date</label>
          {formik.errors.startDate && formik.touched.startDate && <div>{formik.errors.startDate}</div>}
          <input
            id="startDate"
            name="startDate"
            type="date"
            value={formik.values.startDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputContainer>
        
        <InputContainer>
          <label htmlFor="endDate">End Date</label>
          {formik.errors.endDate && formik.touched.endDate && <div>{formik.errors.endDate}</div>}
          <input
            id="endDate"
            name="endDate"
            type="date"
            value={formik.values.endDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </InputContainer>

        <BtnBox>
          <button>Reschedule</button>
        </BtnBox>
      </Form>
    </RescheduleContainer>
  );
};

export default Reschedule;
