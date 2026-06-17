import "../css/Loader.css";
import logoBg from "../assets/bg.png"; // your image

function Loader() {
  return (
    <div
      className="loader-container"
      style={{
        backgroundImage: `url(${logoBg})`,
      }}
    >
      <div className="loader-overlay"></div>

      <div className="loader-content">
        <h1>{"<NM />"}</h1>

        <div className="loader-bar">
          <div className="loader-fill"></div>
        </div>

        <p>Loading...</p>
      </div>
    </div>
  );
}

export default Loader;