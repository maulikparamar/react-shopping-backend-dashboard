import not from "../image/404.jpg";

function NotFound() {
  return (
    <div>
      <img
        style={{ maxHeight: "100vh", width: "100%", position: "absolute" }}
        src={not}
        alt=""
      />
      <h1 style={{ position: "absolute", left: "60%", top: "60%" }}>
        Page Not Found
      </h1>
    </div>
  );
}

export default NotFound;
