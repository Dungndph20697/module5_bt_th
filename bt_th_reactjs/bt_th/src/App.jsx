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
      default:
        return <Welcome name="Admin" />;
    }
  };

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "10px",
          background: "#eee",
        }}
      >
        <button class="btn btn-primary" onClick={() => setPage("showName")}>
          Hiển thị tên
        </button>
        <button
          class="btn btn-primary"
          onClick={() => setPage("showListFruit")}
        >
          Hiển thị danh sách hoa quả
        </button>
        <button class="btn btn-primary" onClick={() => setPage("showTime")}>
          Hiển thị thời gian
        </button>
        <button
          class="btn btn-primary"
          onClick={() => setPage("ShowInfoBrower")}
        >
          ShowInfoBrower
        </button>
        <button class="btn btn-primary" onClick={() => setPage("showstudents")}>
          Show students
        </button>
        <button class="btn btn-primary" onClick={() => setPage("showProfile")}>
          Show profile
        </button>
        <button
          class="btn btn-primary"
          onClick={() => setPage("showFormLogin")}
        >
          Show form login
        </button>
        <button class="btn btn-primary" onClick={() => setPage("welcome")}>
          Show welcome
        </button>
        <button
          class="btn btn-primary"
          onClick={() => setPage("th_classComponent")}
        >
          Class component
        </button>
        <button
          class="btn btn-primary"
          onClick={() => setPage("th_functionComponent")}
        >
          Function component
        </button>
        <button
          class="btn btn-primary"
          onClick={() => setPage("buutton_tang_giam")}
        >
          Button tăng giảm
        </button>
        <button class="btn btn-primary" onClick={() => setPage("doiMauNen")}>
          Đổi màu nền
        </button>
        <button class="btn btn-primary" onClick={() => setPage("thongBao")}>
          Thông báo
        </button>
        <button class="btn btn-primary" onClick={() => setPage("loginLogout")}>
          User Login Logout
        </button>
      </nav>

      <div style={{ marginTop: "30px" }}>{renderPage()}</div>
    </div>
  );
}

export default App;
