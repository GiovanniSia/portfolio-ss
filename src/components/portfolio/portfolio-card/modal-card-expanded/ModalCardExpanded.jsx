import './ModalCardExpanded.css';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';

const ModalCardExpanded = ({ title, description, imgs, tecnologies, show, handleCloseModalCardExpanded }) => {
  const handleCloseModal = (e) => {
    if (e === undefined) {
      return handleCloseModalCardExpanded();
    }
  }

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    console.log("imagenes:");
    console.log(imgs[0]);
  }, [])

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={(e) => handleCloseModal(e)}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {description}
        </p>

        <Carousel activeIndex={index} onSelect={handleSelect} >
          {imgs.map(i => (
            <Carousel.Item interval={10000}>
              {i.startsWith('http') ?
              <iframe width="560" height="315" src="https://www.youtube.com/embed/YawYgWzxTy0?si=eZBYDMz9Nx4My7R9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                : <img src={i} />}

            </Carousel.Item>
          ))}
        </Carousel>



      </Modal.Body>
      <Modal.Footer>
        {tecnologies.map(t => (
          <button className='modal-button-tecnology'>{t}</button>
        ))}
      </Modal.Footer>
    </Modal>
  );
}
export default ModalCardExpanded;

/*

*/