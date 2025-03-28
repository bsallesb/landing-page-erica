import styled from 'styled-components';

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 20px;
`;

export const Info = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Label = styled.a`
  color: var(--dark);
  text-decoration: none;
`;

export const IconBox = styled.a`
  min-width: 40px;
  min-height: 40px;
  background-color: var(--primary-alt);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: var(--light);
    width: 25px;
    height: 25px;
  }
`;
