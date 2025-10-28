import { useState } from "react";
import ShowName from "./components/th_showName";
import ShowListHoaQua from "./components/th_showListHoaQua";
import ShowTime from "./components/th_showTime";
import ShowInfoBrower from "./components/bt_showInfoBrowers";
import ShowStudent from "./components/bt_showInfoStudent";
import ShowProfile from "./components/bt_showProfile";
import ShowFormLogin from "./components/bt_login";
import Welcome from "./components/th_welcome";
import AddComponent from "./components/th_classComponent";
import AddComponent1 from "./components/th_function_componenent";
import ButtonTangGiam from "./components/th_button_tang_giam";
import DoiMauNen from "./components/th_doi_mau_mau_nen";
import ThongBao from "./components/th_thong_bao";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginLogout from "./components/th_user_login_logout/th_user_login_logout";
import TodoApp from "./components/bt_crud_hs/todoApp";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "show name":
        return <ShowName />;
      case "showListFruit":
        return <ShowListHoaQua />;
      case "showTime":
        return <ShowTime />;
      case "ShowInfoBrower":
        return <ShowInfoBrower />;
      case "showstudents":
        return <ShowStudent />;
      case "showProfile":
        return <ShowProfile />;
      case "showFormLogin":
        return <ShowFormLogin />;
      case "welcome":
        return <Welcome name="Admin" />;
      case "th_classComponent":
        return <AddComponent firstNumber={1} secondNumber={2} />;
      case "th_functionComponent":
        return <AddComponent1 firstNumber={4} secondNumber={4} />;
      case "buutton_tang_giam":
        return <ButtonTangGiam />;
      case "doiMauNen":
        return <DoiMauNen />;
      case "thongBao":
        return <ThongBao />;
      case "loginLogout":
        return <LoginLogout />;
      case "crud_hs":
        return <TodoApp />;
      default:
        return <TodoApp />;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Cột bên trái */}
        <div
          className="col-2 bg-light"
          style={{
            minHeight: "100vh",
            padding: "20px",
            borderRight: "1px solid #ccc",
          }}
        >
          <h5 className="text-center mb-4">Danh mục chức năng</h5>
          <div className="d-flex flex-column gap-2">
            <button
              className="btn btn-primary"
              onClick={() => setPage("crud_hs")}
            >
              CRUD học sinh
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setPage("showName")}
            >
              Hiển thị tên
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setPage("showListFruit")}
            >
              Hiển thị danh sách hoa quả
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setPage("showTime")}
            >
              Hiển thị thời gian
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setPage("ShowInfoBrower")}
            >
              Show Info Brower
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setPage("showstudents")}
            >
              Show students
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setPage("showProfile")}
            >
              Show profile
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setPage("showFormLogin")}
            >
              Show form login
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setPage("welcome")}
            >
              Show welcome
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setPage("th_classComponent")}
            >
              Class component
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setPage("th_functionComponent")}
            >
              Function component
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setPage("buutton_tang_giam")}
            >
              Button tăng giảm
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setPage("doiMauNen")}
            >
              Đổi màu nền
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setPage("thongBao")}
            >
              Thông báo
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setPage("loginLogout")}
            >
              User Login Logout
            </button>
          </div>
        </div>

        {/* Cột bên phải */}
        <div className="col-10 p-4">{renderPage()}</div>
      </div>
    </div>
  );
}

export default App;
