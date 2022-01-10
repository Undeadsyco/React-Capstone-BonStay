import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useUtils = (props) => {
  const { onRegister, onLogin } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  const authorize = () => {
    if(props.isLoggedIn) {
      if (!currentUser && !props.user) {
        dispatch({ type: 'LOGOUT' });
      }
    }
  }

  const register = async (body) => {
    const user = await onRegister(body);

    if (user.password !== body.password) {
      console.log(user)
      alert('something went wrong');
      return;
    }

    localStorage.setItem('user', JSON.stringify(user));
    alert("registration was successful");
    dispatch({ type: 'LOGIN', data: {...user} });
    navigate('/');
  }

  const login = async (body) => {
    const user = await onLogin(body.email);
    if (!user) return alert('user not found')
    console.log(user)
    if (user.password !== body.password) return alert('password is incorrect');

    localStorage.setItem('user', JSON.stringify(user));
    alert('Login was successful');
    dispatch({ type: 'LOGIN', data: {...user} });
    navigate('/');
  }

  return { authorize, register, login }
}

export default useUtils;