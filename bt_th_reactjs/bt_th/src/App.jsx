import { useState } from "react";
import ShowName from "./components/th_showName";
import ShowListHoaQua from "./components/th_showListHoaQua";
import ShowTime from "./components/th_showTime";

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
      default:
        return <ShowName />;
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
        <button onClick={() => setPage("showName")}>Hiển thị tên</button>
        <button onClick={() => setPage("showListFruit")}>
          Hiển thị danh sách hoa quả
        </button>
        <button onClick={() => setPage("showTime")}>Hiển thị thời gian</button>
      </nav>

      <div style={{ marginTop: "30px" }}>{renderPage()}</div>
    </div>
  );
}

export default App;
