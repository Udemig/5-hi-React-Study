import { useState } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import FormModal from '../components/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../app/crudSlice';

const CrudPage = () => {
  //   store'a abone olma
  const state = useSelector((store) => store.crudReducer);

  // eleman ekleme modal state'i
  const [showModal, setShowModal] = useState(false);

  // düzenlenicek elemenı tuttuğumuz state
  const [editTask, setEditTask] = useState(null);

  //   modal'I kapatıcak fonksiyon
  const handleClose = () => {
    // düzenlenicek eleman sıfırla
    setEditTask(null);
    // modal'ı kapatır
    setShowModal(false);
  };

  const dispatch = useDispatch();

  return (
    <div className="px-3">
      <FormModal
        editTask={editTask}
        show={showModal}
        handleClose={handleClose}
      />

      <Button
        onClick={() => setShowModal(true)}
        variant="success"
        className="my-3"
      >
        Yeni Görev Ekle
      </Button>

      <Table variant="dark" hover bordered striped>
        <thead>
          <tr>
            <th>id</th>
            <th>Görev</th>
            <th>Yazar</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {state.tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeTask(task.id))}
                  >
                    Sil
                  </Button>
                  <Button
                    onClick={() => {
                      // düzenlenicek task'ı state'e aktar
                      setEditTask(task);

                      // modal'ı aç
                      setShowModal(true);
                    }}
                  >
                    Düzenle
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudPage;
