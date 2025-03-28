import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: var(--dark);
  padding-block: 20px;

  > div {
    flex-direction: column;
    gap: 10px;
  }

  img {
    max-width: 150px;
  }

  span {
    color: var(--secondary-alt);
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 985px) {
    span {
      display: none;
    }
  }
`;

export const References = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  p {
    display: none;
  }

  @media (max-width: 985px) {
    margin-top: 15px;

    p {
      display: flex;
      color: var(--secondary-alt);
    }
  }

  a {
    padding-inline: 10px;
    text-decoration: none;
    color: var(--light);
  }
`;

export const Icon = styled.div`
  display: flex;
  gap: 10px;

  svg {
    color: var(--light);
    height: 30px;
    width: 30px;
  }

  div {
    cursor: pointer;
  }
`;
