import {Link, Outlet} from "react-router-dom"
import { MdOutlineLastPage } from "react-icons/md";


const Home = () => {
    return (
        <section className="section-01">
        <div className="a-item">
          <h2 className="a-item-01">
            Şarjlanmayla ilgili sıkıntı mı yaşıyorsunuz?
          </h2>
          <div className="a-item-02">
            <img className="a-item-02-A" src="/images/vale-görsel.png" alt="" />
          </div>
        </div>
        <div className="b-item">
          <div className="b-item-01">
            <img src="/images/soket-1.png" alt="" />
            <img src="/images/soket-2.png" alt="" />
            <img src="/images/soket-3.png" alt="" />
          </div>
          <div className="b-item-02">
            <Link className="b-item-02-A" to="/instructions" >Talimatları Tamamladınız Mı? <MdOutlineLastPage /></Link>
            <Link className="b-item-02-A" to="/current">ValeŞarj Uygulamanız Güncel Mi? <MdOutlineLastPage /></Link>
            <Link className="b-item-02-A" to="/socket" style={{ textDecoration: 'none' }}>Soketi Doğru Taktığınızdan Emin Misiniz? <MdOutlineLastPage /></Link>
            <Link className="b-item-02-A" to="/carLocked">Aracınız Kilitli Mi? <MdOutlineLastPage /></Link>
            <Link className="b-item-02-A" to="/carInformation">Araç Bilgilerinizi Girdiniz mi? <MdOutlineLastPage /></Link>
            <Link className="b-item-02-A" to="/qrCode">Karekodu Okumuyor Mu? <MdOutlineLastPage /></Link>
            <Link className="b-item-02-A" to="/emergencyStop">Acil Stpo Kapalı Mı? <MdOutlineLastPage /></Link>
            <Link className="b-item-02-A" to="/content">Cihazın Çalışmadığını mı Düşünüyorsunuz? <MdOutlineLastPage /></Link>
          </div>
        </div>
      </section>
    )
}

export default Home;