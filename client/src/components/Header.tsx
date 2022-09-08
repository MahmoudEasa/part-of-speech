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
  width: 100px;
  cursor: pointer;
  border-radius: 50%;
`;
// Start Styled Components

const Header = () => {
  return (
    <Container>
      <Img
        onClick={() => window.location.reload()}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEWj9HFaw1BRmAN809eKfq0XPPQoivsrj9A&usqp=CAU"
        alt="logo"
      />
    </Container>
  );
};

export default Header;
