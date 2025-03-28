import styled from 'styled-components';

export const Wrapper = styled.header`
  border-bottom: 1px solid var(--dark);
  position: fixed;
  width: 100%;
  z-index: 10;
  background: var(--light);
  /* height: 103px; */
`;

export const Content = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
  width: 100%;

  @media (max-width: 700px) {
    padding: 5px 0px;
    justify-content: center;

    button {
      display: none;
    }
  }

  @media (max-width: 600px) {
    img {
      width: 110px;
    }
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;

  @media (max-width: 1090px) {
    display: none;
  }
`;

export const Item = styled.li`
  padding-bottom: 5px;
`;
