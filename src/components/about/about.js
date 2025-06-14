import React from 'react';
import CountUp from 'react-countup';

// Replace with real imports or use actual URLs if using from online source
import Abd1 from '../../images/doctors/1.jpg';
import Abd2 from '../../images/doctors/2.jpg';
import Abd3 from '../../images/doctors/3.jpg';
import Abd4 from '../../images/doctors/4.jpg';
import sine from '../../images/signeture.png';

const About = (props) => {
  return (
    <section className={props.hclass || ""} dir="rtl">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="about_left">
              <div className="image position-relative">
                <img
                  src="https://medically-react.wpolive.com/static/media/1.f83d52cba0c04965b7cd.png"
                  alt="عيادة ماسترز"
                  style={{ maxWidth: "100%", borderRadius: "10px" }}
                />
                <span className="round-on"></span>
                <span className="round-two"></span>
                <div className="award">
                  <div className="icon">
                    <i className="flaticon-cup"></i>
                  </div>
                  <div className="text">
                    <h2>
                      <CountUp end={25} enableScrollSpy />+
                    </h2>
                    <p>سنوات من الخبرة</p>
                  </div>
                </div>
                <div className="doctors">
                  <ul>
                    <li><img src={Abd1} alt="دكتور 1" /></li>
                    <li><img src={Abd2} alt="دكتور 2" /></li>
                    <li><img src={Abd3} alt="دكتور 3" /></li>
                    <li><img src={Abd4} alt="دكتور 4" /></li>
                    <li><span>+95</span></li>
                  </ul>
                  <h4>عدد الأطباء المتوفرين</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="content">
              <h2>ماسترز خبراء لجمالك وصحتك</h2>
              <h3>اهتمي ببشرتك... مع أفضل أطباء الجلدية والتجميل في عيادات ماسترز</h3>
              <p>
                جلسات نضارة، علاج لحب الشباب، تساقط الشعر، تقشير، بوتوكس، فيلر، ليزر، وكل ما يخص العناية بجمالك.
              </p>
              <p>
                نحن نؤمن أن الجمال يبدأ من الصحة. لذلك، في عيادات ماسترز نقدم خدمات متكاملة باستخدام أحدث التقنيات وأفضل الكفاءات.
              </p>
              <div className="ceo d-flex align-items-center justify-content-between">
                <div>
                  <h4>سافانا نغوين</h4>
                  <span>المدير التنفيذي ومؤسس عيادات ماسترز</span>
                </div>
                <div>
                  <img src={sine} alt="توقيع المدير" style={{ maxHeight: "50px" }} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
