import ModalAdd from "./modalAdd.jsx";
export default function Content({
  lstStudents,
  showModalAdd,
  showModal,
  hideModalAdd,
  addStudent,
}) {
  return (
    <>
      {showModal && (
        <ModalAdd hideModalAdd={hideModalAdd} addStudent={addStudent} />
      )}

      <button className="btn btn-primary" onClick={showModalAdd}>
        Thêm học sinh
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {lstStudents.map((student, index) => (
            <tr key={index}>
              <th scope="row">{student.name}</th>
              <td>{student.phone}</td>
              <td>{student.email}</td>
              <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-warning">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
