// import AppNav from "./AppNav";
import Map from "./Map";

import SideBar from "./SideBar";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
