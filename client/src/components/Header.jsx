import styled from "styled-components";

// Start Styled Components
const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  position: sticky;
  top: 0;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const Img = styled.img`
  width: 150px;
  cursor: pointer;
`;
// Start Styled Components

const Header = () => {
  return (
    <Container>
      <Img
        onClick={() => window.location.reload()}
        src="https://www.tribepost.co.uk/wp-content/uploads/2018/06/Nagwa-Logo.png"
        alt="logo"
      />
    </Container>
  );
};

export default Header;
