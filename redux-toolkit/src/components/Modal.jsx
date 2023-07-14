import { useEffect, useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask } from '../app/crudSlice';

const FormModal = ({ show, handleClose, editTask }) => {
  const [formState, setFormState] = useState({});

  /*
   * Formun state'ini belirleme
   ? Düzenlenicek task:
   * var ise FormState düzenlenicek task'ın bilgileri aktarılacak (düzenleme modu)
   * yok ise o zaman form state'in tuttuğu değerli boş string olucak (ekleme modu)
  */
  useEffect(() => {
    const stateValue = editTask
      ? editTask
      : {
          title: '',
          author: '',
          assigned_to: '',
          end_date: '',
        };

    setFormState(stateValue);
  }, [show]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // formdaki inputların değerlerine erişip
    // state'de tuttğumuz yeni eklenicek görevi güncelledik
    dispatch(addTask(formState));
  };

  return (
    <Modal
      className="text-dark"
      backdrop="static"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {!editTask ? 'Yeni Görev Ekle' : 'Görevi Düzenle'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Form Alanı */}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Başlık</Form.Label>
            <Form.Control
              value={formState.title}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  title: e.target.value,
                })
              }
              type="text"
              placeholder="Başlık Giriniz"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Yazar</Form.Label>
            <Form.Control
              value={formState.author}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  author: e.target.value,
                })
              }
              type="text"
              placeholder="Yazar Giriniz"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Kime Atanacak</Form.Label>
            <Form.Control
              value={formState.assigned_to}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  assigned_to: e.target.value,
                })
              }
              type="text"
              placeholder="Atanacak Kişiyi Giriniz"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Teslim Tarihi</Form.Label>
            <Form.Control
              value={formState.end_date}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  end_date: e.target.value,
                })
              }
              type="date"
            />
            <Form.Text>Son teslim tarihini belirleyin</Form.Text>
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Kapat
            </Button>
            <Button
              type="submit"
              variant="primary"
              onClick={handleClose}
            >
              Kaydet
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
