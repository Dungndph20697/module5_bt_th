export default function ShowProfile() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card--header" />
          <img
            className="avatar"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="avatar"
          />
          <div className="card--body">
            <div>
              <p className="text-header">Nguyễn Đức Dụng</p>
              <p className="text-sub">
                Sinh năm 2003, đến từ Bắc Ninh. Hiện đang là sinh viên
                trường Đại học Công Nghệ - ĐHQGHN. Đam mê lập trình web và mobile
                app.
              </p>
              <button className="btn third">FOLLOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
