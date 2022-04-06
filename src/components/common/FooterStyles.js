import styled from "styled-components";

export const Box = styled.div`
  padding: 80px 60px;
  background: #eaf7f8;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 120px;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 5px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: grey;
  margin-bottom: 10px;
  font-size: 12px;
  text-decoration: none;
`;

export const Heading = styled.p`
  font-size: 12px;
  color: grey;
  margin-bottom: 40px;
  font-weight: bold;
`;
