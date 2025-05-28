import React, { useState } from 'react';
import { makeAppointment } from '../../api/content';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const CtaForm = () => {
    const { id } = useParams();
    console.log('Current ID:', id);
    const { search } = useLocation(); // Gets the query string
    const params = new URLSearchParams(search);
    const navigate = useNavigate();
    const utmSource = params.get('utm_source');
    console.log('utm_source:', utmSource);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        branch: '',});

    const [errors, setErrors] = useState({
        name: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let formIsValid = true;
        let errors = {};

        if (!formData.name) {
            formIsValid = false;
            errors.name = 'الاسم مطلوب';
        }

        if (!formData.phone) {
            formIsValid = false;
            errors.phone = 'رقم الهاتف مطلوب';
        } else if (!/^\d{10,15}$/.test(formData.phone)) {
            formIsValid = false;
            errors.phone = 'رقم الهاتف غير صالح';
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validate()) {
            console.log('تم إرسال النموذج بنجاح:', formData);
            // You can add your reservation logic here
            makeAppointment({...formData     ,   landingPageId: id,utmSource: utmSource, createdAt: new Date().toISOString() ,isContacted: false  , clientStatus: ''
})
        .then(response => {
            navigate('/thankyou');
            console.log('تم إرسال النموذج بنجاح:', response);
            // Reset form data and errors
            setFormData({ name: '', phone: '' ,branch: ''});
            setErrors({ name: '', phone: ''});
        });
        }
    };

    return (
        <form className="cta_form" onSubmit={handleSubmit}>
            <div className="input_filled">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="الاسم الكامل*"
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="input_filled">
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="رقم الهاتف*"
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="input_filled">
                <select
                    name="branch"
                    required
                    value={formData.branch || ''}
                    onChange={handleChange}
                >
                    <option value="">اختر الفرع</option>
                    <option value="alawali">فرع العوالي</option>
                    <option value="alkhalidiyah">فرع الخالدية</option>
                    <option value="alshatee">فرع الشاطئ</option>
                    <option value="albasateen">فرع البساتين</option>
                    <option value="abhur">ابحر الشمالية</option>
                    <option value="altaif">فرع الطائف</option>
                </select>
            </div>
            {errors.service && <span className="error">{errors.service}</span>}
            <div className="input_filled">
                <button type="submit">احجزي الآن</button>
            </div>
        </form>
    );
};

export default CtaForm;
