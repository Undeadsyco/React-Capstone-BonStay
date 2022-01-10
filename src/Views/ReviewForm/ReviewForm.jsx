import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from 'yup';

import { ReviewContainer } from './styles';

const validation = yup.object({ review: yup.string().required() });

const ReviewForm = ({ onMakeReview }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const formik = useFormik({
    validationSchema: validation,
    initialValues: { review: '' },
    onSubmit: (values) => {
      onMakeReview(state.id, values);

      alert('review was successfully posted!');
      setTimeout(() => {
        navigate('/reviews', { state: { id: state.id } });
      }, 250)
    }
  });

  return (
    <ReviewContainer height='100%'>
      <form onSubmit={formik.handleSubmit}>
        <h2>Your Reviews Means A Lot For Us</h2>
        <div className="inputContainer">
          <label htmlFor="review">Add your Review</label>
          <textarea
            id="review"
            name="review"
            type="text"
            value={formik.values.review}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
          </textarea>
        </div>
        <div className="btnContainer">
          <button type="submit">Add Review</button>
        </div>
      </form>
    </ReviewContainer>
  );
};

export default ReviewForm;
