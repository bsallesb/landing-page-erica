import styled from 'styled-components';

export const Section = styled.div`
  background-color: var(--primary);
  padding-block: 40px 60px;
  border-radius: 0 0 30px 30px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

export const Wrapper = styled.section`
  background-color: var(--dark);
`;

export const HelpBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
