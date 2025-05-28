import React from 'react';
import './css.css'; // Styling file

const ThankYouPage = () => {
  return (
    <div className="thank-you-container-arabic">
      <div className="thank-you-card-arabic">
        <div className="logo-container">
          <img src="https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/dEYvd/lBmMUm3zZyt94KtrsYYdL6UrUEOoncu4UJnK9VhR.png" alt="عيادات ماسترز لوجو" className="clinic-logo" />
        </div>
        
        <h1 className="arabic-text">شكراً لتسجيلكم</h1>
        <p className="arabic-text">سوف يتم التواصل معكم في أقرب وقت</p>
        
        <div className="clinic-info-arabic">
          <p className="arabic-text">عيادات ماسترز</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;