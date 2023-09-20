// import AppNav from "./AppNav";
import Map from "./Map";

import SideBar from "./SideBar";
import styles from "./AppLayout.module.css";
import User from "./User";
function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
