import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Loader = styled.div`
  margin: 50px 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px dotted #299b01;
  animation: 2s infinite spin;
  @keyframes spin {
    from {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(1.5);
    }
    to {
      transform: rotate(360deg) scale(1);
    }
  }
`;

export const Preloader = () => (
  <LoaderWrapper>
    <Loader />
  </LoaderWrapper>
);
