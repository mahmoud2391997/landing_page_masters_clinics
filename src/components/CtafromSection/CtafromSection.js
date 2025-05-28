import React from 'react';
import CtaForm from './CtaForm';

const CtafromSection = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="cta_wrap">
                    <div className="content">
                        <h2>احصلي على موعد فورا </h2>
                        <p>تواصلي معنا الآن! فريقنا متواجد على مدار الساعة للرد على جميع استفساراتك وحجز موعدك بكل سهولة.</p>
                    </div>
                    <CtaForm />
                </div>
            </div>
        </section>
    );
};

export default CtafromSection;
