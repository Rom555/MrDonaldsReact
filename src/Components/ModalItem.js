import styled from 'styled-components';
import { ButtonCheckout } from './ButtonCheckout';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 20;
`;

const Modal = styled.div`
  width: 600px;
  height: 600px;
  background-color: white;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-position: center center;
  background-size: cover;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 30px 40px;
  height: calc(100% - 200px);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {
  const closeModal = (e) => {
    if (e.target.id === 'overlay') setOpenItem(null);
  };

  if (!openItem) return null;

  return (
    <Overlay id='overlay' onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <ModalContent>
          <ModalHeader>
            <h3>{openItem.name}</h3>
            <h3>
              {openItem.price.toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
              })}
            </h3>
          </ModalHeader>
          <ButtonCheckout>Добавить</ButtonCheckout>
        </ModalContent>
      </Modal>
    </Overlay>
  );
};
