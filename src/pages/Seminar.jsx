import React, { Component } from "react";
import Navbars from "../component/Navbars";
import BannerAcara from "../component/banner/BannerAcara";
import "../assets/css/card/personal.css";
import img from "../assets/img/12345.jpg";
import DescPersonal from "../component/card/personal/DescPersonal";
import Footer from "../component/Footer";
import TabsAcara from "../component/acara/TabsAcara";
import Sponsor from "../component/LandingPage/Sponsor";
import { Auth } from "../config/firebase/firebase";


class Seminar extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <BannerAcara
          daftar_button="Daftar Seminar"
          user={Auth.currentUser}
          linkDaftar="/seminar/register-seminar"
          title="Seminar"
          description="Acara Seminar Invofest 2023 akan di meriahkan oleh praktisi professional di bidang IT"
        />
        {/* <SusunanAcara acara="Susunan Acara" />
      <div className="row">
        <div className="col-md-6 col-sm-12 ">
          <div className="our_solution_category">
            <div className="solution_cards_box">
              <SusunanAcara
                icons={faMagento}
                name="TALKSHOW"
                desc="Acara Talkshow yang dikemas dengan suasana santai dengan tema “Prospek Kerja Industri IT Bagi Mahasiswa Vokasi"
                button="read more"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="our_solution_category">
            <div className="solution_cards_box">
              <SusunanAcara
                icons={faMagento}
                name="TALKSHOW"
                desc="Acara Talkshow yang dikemas dengan suasana santai dengan tema “Prospek Kerja Industri IT Bagi Mahasiswa Vokasi"
                button="read more"
              />
            </div>
          </div>
        </div>
      </div> */}

        <section id="team" className="pb-5">
          <div className="container">
            <h5 className="section-title h1 mt-5">Pembicara</h5>
            <div className="row">
              {/* <!-- Team member --> */}
              <div className="col">
                <DescPersonal
                  image={img}
                  name="David WijayaAAA"
                  jobdesk="Business Development Manager Training & Academy di Red Hat Indonesia"
                  names="Mohamad Khadik"
                  jobs="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis suscipit veritatis cupiditate repellendus inventore. "
                  fb="https://"
                  twiter="https://"
                  google="https://"
                />
              </div>
              <div className="col">
                <DescPersonal
                  image={img}
                  name="Romi Satria Wahono"
                  job="Enterprise Architecture & Digital Transformation Guru
                  Founder & CEO BrainCorp"
                  names="Mohamad Idham Bakhri"
                  jobs="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis suscipit veritatis cupiditate repellendus inventore. "
                />
              </div>
            </div>
          </div>
        </section>
        <TabsAcara />
        <Sponsor />
        <Footer />
      </div>
    );
  }
}

export default Seminar;
