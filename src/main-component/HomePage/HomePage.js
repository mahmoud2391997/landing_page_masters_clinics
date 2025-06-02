import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import AppointmentSection from '../../components/AppointmentSection/AppointmentSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import About from '../../components/about/about';
import ProcessSection from '../../components/ProcessSection/ProcessSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import CtaSection from '../../components/CtaSection/CtaSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import FunFact from '../../components/FunFact/FunFact';
import BlogSection from '../../components/BlogSection/BlogSection';
import CtafromSection from '../../components/CtafromSection/CtafromSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/masters Logo.png'
import ContactBar from '../../components/Navbar/socialMedia';
import Product from '../ProductSinglePage/product';
import ProductGrid from '../offers/index.tsx';
import { useLocation, useParams } from 'react-router-dom';
import { fetchContent } from '../../api/content.js';
import SocialMedia from '../../components/whatsAppFloating/index.js';
// const tours = [
//     {
//       image:
//         "https://medically-react.wpolive.com/static/media/1.f83d52cba0c04965b7cd.png",
//       name: "Mountain Tour",
//       price: 99,
//       description: "Explore the majestic mountains with our guided tour.",
//     },
//     {
//       image:
//         "https://medically-react.wpolive.com/static/media/1.f83d52cba0c04965b7cd.png",
//       name: "Beach Vacation",
//       price: 129,
//       description: "Relax on the beautiful beaches with our exclusive package.",
//     },
//     {
//       image:
//         "https://medically-react.wpolive.com/static/media/1.f83d52cba0c04965b7cd.png",
//       name: "City Explorer",
//       price: 89,
//       description: "Discover the hidden gems of the city with our expert guides.",
//     },
//   ];
// // Simple circular progress indicator
// const CircularProgress = () => (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
//         <svg width="50" height="50" viewBox="0 0 50 50">
//             <circle
//                 cx="25"
//                 cy="25"
//                 r="20"
//                 fill="none"
//                 stroke="#1976d2"
//                 strokeWidth="5"
//                 strokeDasharray="100"
//                 strokeDashoffset="60"
//                 strokeLinecap="round"
//             >
//                 <animateTransform
//                     attributeName="transform"
//                     type="rotate"
//                     from="0 25 25"
//                     to="360 25 25"
//                     dur="1s"
//                     repeatCount="indefinite"
//                 />
//             </circle>
//         </svg>
//     </div>
// );

// const Teams = [
//     {
//         id: '1',
//         title: 'Marlene Henry',
//         subtitle: 'Surgeon',
//         slug: 'Marlene-Henry',
//         timg:         "https://medically-react.wpolive.com/static/media/1.f83d52cba0c04965b7cd.png",

//     },
//     {
//         id: '2',
//         title: 'Dianne Russell',
//         subtitle: 'Cardiologist',
//         slug: 'Dianne-Russell',
//         timg:         "https://medically-react.wpolive.com/static/media/1.f83d52cba0c04965b7cd.png",

//     },
//     {
//         id: '3',
//         title: 'Jerome Bell',
//         subtitle: 'Pet Specialist',
//         slug: 'Jerome-Bell',
//         timg:         "https://medically-react.wpolive.com/static/media/1.f83d52cba0c04965b7cd.png",

//     },
//     {
//         id: '4',
//         title: 'Leslie Alexander',
//         subtitle: 'Surgeon',
//         slug: 'Leslie-Alexander',
//         timg:         "https://medically-react.wpolive.com/static/media/1.f83d52cba0c04965b7cd.png",

//     },
//     {
//         id: '5',
//         title: 'Alexander Leslie ',
//         subtitle: 'Cardiologist',
//         slug: 'Alexander-Leslie',
//         timg:         "https://medically-react.wpolive.com/static/media/1.f83d52cba0c04965b7cd.png",

//     },
//     {
//         id: '6',
//         title: 'Cody Fisher',
//         subtitle: 'Surgeon',
//         slug: 'Cody-Fisher',
//         timg:         "https://medically-react.wpolive.com/static/media/1.f83d52cba0c04965b7cd.png",

//     },


// ]
// const HomePage = () => {
//     const { id } = useParams();
//     console.log('Current ID:', id); // Log the current ID to the console
//     const [loading, setLoading] = useState(false);
//     const [content, setContent] = useState({});
//     const [error, setError] = useState(null);
// const { search } = useLocation(); // Gets the query string
//   const params = new URLSearchParams(search);

//   const utmSource = params.get('utm_source');
//   console.log('utm_source:', utmSource);
//     useEffect(() => {
//         if (!id) return;
//         setLoading(true);
//         setError(null);
//         fetchContent(id)
//             .then((data) => {
//                 console.log('Fetched content:', data);
//                 setContent(data);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 setError('Failed to load product.');
//                 setLoading(false);
//             });
//     }, [id]);
// if (loading) {
//         return <CircularProgress />;        
//     }
// if (error) {
//     // Show a 404-style message if product not found
//     return (
//         <div style={{ textAlign: 'center', marginTop: 40 }}>
//             <h1 style={{ fontSize: 48, color: '#1976d2' }}>404</h1>
//             <h2>Page Not Found</h2>
//             <p>{error}</p>
//         </div>
//     );
// }
//      return (
//         <Fragment>
//             <ContactBar />
//             {/* <Navbar hclass={'wpo-site-header'}  Logo={Logo} /> */}
//              <Hero hclass={'static-hero'}/> 
//             {/* <Navbar hclass={'wpo-site-header'} Logo={Logo} /> */}
//             <CtafromSection hclass={'ctafrom_section'}/>
//             <SocialMedia />
//          {/* <ProductGrid hclass={'product_grid_section section-padding'} />  */}
//             {/* <CtaSection tClass={'cta_section'} /> */}
//             {/* <ServiceSection hclass={"service_section section-padding"} /> */}
//             {/* <About hclass={'about_section section-padding'}/> */}
//             {/* <ProcessSection hclass={"work_section section-padding"}/> */}
//         {/* <TeamSection hclass={'team_section section-padding'} Teams={content.doctors}/>  */}
//             {/* <FunFact hclass={'funfact_section'} /> */}
//             {/* <BlogSection tClass={'blog_section section-padding'}/> */}
//             {/* <AppointmentSection hclass={'appointment_section'}/> */}
//             {/* <ProjectSection hclass={'project_section section-padding'}/> */}
//             {/* <Testimonial tClass={'testimonial_section testimonial_section_slider'} /> */}
//             <Footer hclass={'wpo-site-footer'}/>
//             <Scrollbar />
//         </Fragment>
//     )
// };
// export default HomePage;
// import React, { Fragment, useState, useEffect } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import {
//     Navbar,
//     Hero,
//     AppointmentSection,
//     ServiceSection,
//     About,
//     ProcessSection,
//     ProjectSection,
//     Testimonial,
//     CtaSection,
//     TeamSection,
//     FunFact,
//     BlogSection,
//     CtafromSection,
//     Footer,
//     Scrollbar,
//     ContactBar,
// } from '../../components'; // Assuming you organize imports like an index.js barrel file
// import Logo from '../../images/masters Logo.png';
// import SocialMedia from '../../components/whatsAppFloating/index.js';
// import { fetchContent } from '../../api/content.js';

// Spinner component
const CircularProgress = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
        <svg width="50" height="50" viewBox="0 0 50 50">
            <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="#1976d2"
                strokeWidth="5"
                strokeDasharray="100"
                strokeDashoffset="60"
                strokeLinecap="round"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="1s"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    </div>
);

// Error Message component
const ErrorMessage = ({ message }) => (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
        <h1 style={{ fontSize: 48, color: '#1976d2' }}>404</h1>
        <h2>Page Not Found</h2>
        <p>{message}</p>
    </div>
);

const HomePage = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState(null);
    const [error, setError] = useState(null);

    const { search } = useLocation();
    const utmSource = new URLSearchParams(search).get('utm_source');

    useEffect(() => {
        if (!id) return;

        setLoading(true);
        setError(null);

        fetchContent(id)
            .then((data) => {
                console.log('Fetched content:', data);  
                
                setContent(data);
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to load product.');
                setLoading(false);
            });
    }, [id]);

    if (loading) return <CircularProgress />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <Fragment>
            <ContactBar />
            <Hero hclass={'static-hero'} />
            <CtafromSection hclass={'ctafrom_section'} />
            <SocialMedia />
  {/* <ProductGrid hclass={'product_grid_section section-padding'}  />  */}
//             {/* <CtaSection tClass={'cta_section'} /> */}
//             {/* <ServiceSection hclass={"service_section section-padding"} /> */}
//             {/* <About hclass={'about_section section-padding'}/> */}
//             {/* <ProcessSection hclass={"work_section section-padding"}/> */}
//         {/* <TeamSection hclass={'team_section section-padding'} Teams={content.doctors}/>  */}
//             {/* <FunFact hclass={'funfact_section'} /> */}
//             {/* <BlogSection tClass={'blog_section section-padding'}/> */}
//             {/* <AppointmentSection hclass={'appointment_section'}/> */}
//             {/* <ProjectSection hclass={'project_section section-padding'}/> */}
//             {/* <Testimonial tClass={'testimonial_section testimonial_section_slider'} /> */}
//            
            {/* Future content driven by fetch */}
            {/* {content && content.doctors && (
                <TeamSection hclass={'team_section section-padding'} Teams={content.doctors} />
            )} */}

            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
        </Fragment>
    );
};

export default HomePage;
