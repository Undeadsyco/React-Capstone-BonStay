import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 10%;
  display: flex;
  padding: 0 50px;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(119, 86, 88);
  color: white;
`;

const Title = styled.h2`
  margin: 0px;
  font-size: 2rem;
  font-weight: 400;
`;

const Nav = styled.nav`
  display: ${props => props.display};
  height: 100%;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 10px;
  color: white;
`;

const Header = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Title>BonStay</Title>
      <Nav display={isLoggedIn ? 'flex' : 'none'}>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/hotels'>Hotels</StyledLink>
        <StyledLink to='/bookings'>Bookings</StyledLink>
        <StyledLink to='/login'><button onClick={() => logout()}>Logout</button></StyledLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;