import styles from "./Map.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";
function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>MAP</h1>
      <h1>
        Position {lat}, {lng}
      </h1>
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 90 });
        }}
      >
        Change Position
      </button>
    </div>
  );
}

export default Map;
