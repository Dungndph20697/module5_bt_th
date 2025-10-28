import React, { useState } from "react";
export default function ModalAdd({ hideModalAdd, addStudent }) {
  const [newStudent, setNewStudent] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleSubmit = () => {
    if (!newStudent.name || !newStudent.phone || !newStudent.email) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    addStudent(newStudent);
    setNewStudent({ name: "", phone: "", email: "" }); // reset form
  };
  return (
    <>
      <div
        className="modal show fade"
        style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thêm học sinh mới</h5>
              <button
                type="button"
                className="btn-close"
                onClick={hideModalAdd}
              ></button>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Tên học sinh</label>
                <input
                  type="text"
                  name="name"
                  value={newStudent.name}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Số điện thoại</label>
                <input
                  type="text"
                  name="phone"
                  value={newStudent.phone}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={newStudent.email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={hideModalAdd}>
                Hủy
              </button>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
