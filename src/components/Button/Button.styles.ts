import styled, { css } from 'styled-components';

type ActionProps = {
  $shadow?: boolean;
  $border?: 'rounded' | 'pill';
  color?: 'primary' | 'success';
  $animated?: boolean;
};

export const Action = styled.button<ActionProps>`
  color: var(--light);
  padding: 15px 20px;
  border: none;
  border-radius: ${({ $border }) => ($border === 'pill' ? 40 : 20)}px;
  font-weight: 900;
  font-size: 20px;
  width: fit-content;
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;

  svg {
    height: 25px;
    width: 25px;
  }

  ${({ color }) => {
    if (color === 'primary') {
      return css`
        background: linear-gradient(
          to right,
          var(--primary-alt),
          var(--primary)
        );
      `;
    }

    if (color === 'success') {
      return css`
        background-color: green;
      `;
    }
  }}

  &:hover {
    transform: scale(1.05);
  }

  ${({ $shadow }) =>
    $shadow &&
    css`
      box-shadow: 3px 3px 8px var(--primary);
    `}

  @media (max-width: 700px) {
    font-weight: 800;
    font-size: 18px;
  }

  @keyframes pulsar {
    0% {
      box-shadow: 0 0 10px -5px var(--primary);
    }
    50% {
      box-shadow: 0px 0px 0px 16px transparent;
    }
    100% {
      box-shadow: 0px 0px 0px 0px transparent;
    }
  }

  ${({ $animated }) =>
    $animated &&
    css`
      animation: pulsar 1.5s infinite;
    `}
`;
