import { Link,Outlet} from "react-router-dom"
import { RiBattery2ChargeLine } from "react-icons/ri";
import { TbHomeHand } from "react-icons/tb";


const Layout = () => {
  return (
    <div>
      <header className="header-01">
        <div className="c-wrapper">
          <div className="a-item">
            <img src={"/images/vLogo.png"} />
            <h1>VALEYE HOŞGELDİNİZ</h1>
          </div>
        </div>
      </header>
      <div className="icon-item">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <TbHomeHand className="icon-item-A" /> <span>Anasayfa</span>
        </Link>
        <Link style={{ textDecoration: 'none' }}
        >
          <RiBattery2ChargeLine className="icon-item-A" /> <span>İstasyonlarımız</span>
        </Link >
          </div>
      <main><Outlet/></main>
    </div>
  );
};

export default Layout;
