import styled from 'styled-components';

type LabelProps = {
  $isTextWhite?: boolean;
};

export const Label = styled.h2<LabelProps>`
  font-size: 66px;
  font-weight: 800;
  color: ${({ $isTextWhite }) =>
    $isTextWhite ? 'var(--light)' : 'var(--primary)'};
  text-align: center;

  span {
    color: var(--primary);
  }

  @media (max-width: 1440px) {
    font-size: 60px;
  }

  @media (max-width: 1270px) {
    font-size: 52px;
  }

  @media (max-width: 1068px) {
    font-size: 42px;
  }

  @media (max-width: 580px) {
    font-size: 34px;
  }
`;
