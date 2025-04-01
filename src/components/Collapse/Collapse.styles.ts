import styled, { css } from 'styled-components';

type WrapperType = {
  $isOpen?: boolean;
};

export const Wrapper = styled.div<WrapperType>`
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      background-color: var(--light);
      border-radius: 15px;
    `}

  &:active {
    svg {
      transform: rotate(180deg);
    }
  }
`;

export const Content = styled.div`
  background-color: var(--primary-alt);
  cursor: pointer;
  padding: 20px;
  border-radius: 15px;
  color: var(--light);
  display: flex;
  gap: 10px;
  align-items: center;

  span {
    font-weight: 500;
    font-size: 20px;
  }
`;

export const Paragraph = styled.div`
  padding: 40px 0 0 40px;
  color: var(--secondary);

  p {
    font-size: 18px;
    padding-right: 40px;
    margin-bottom: 10px;
  }
`;

type IconType = {
  $isOpen?: boolean;
};

export const Icon = styled.div<IconType>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  min-width: 30px;
  min-height: 30px;
  border-radius: 30px;
  transition: transform 0.3s ease-in-out;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: end;
`;

export const Button = styled.button`
  display: flex;
  border: none;
  padding-inline: 15px;
  height: 40px;
  background-color: var(--primary);
  border-radius: 15px 0 14px 0;
  gap: 8px;
  align-items: center;
  cursor: pointer;

  svg {
    color: var(--light);
  }
`;

export const Label = styled.span`
  color: var(--light);
  font-weight: 700;
`;
