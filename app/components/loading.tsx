// "use client";
// import animejs from 'animejs';
// import { useEffect } from 'react';

// const Loading = () => {

//     useEffect(() => {
//         animejs({
//             targets: '#appLoadingLogo',
//             height: '60px',
//             translateY: [-100, 0], // from 100 to 250
//             easing: 'easeInOutQuad',
//             duration: 500,
//             direction: 'alternate',
//             loop: true
//         });
//         animejs({
//             targets: '#logoShadow',
//             height: '60px',
//             duration: 500,
//             translateY: [0, -10], // from 100 to 250
//             translateX: [0, -90], // from 100 to 250
//             easing: 'easeInOutQuad',
//             direction: 'alternate',
//             loop: true
//         });
//     }, []);

//     return (
//         <>        
//         <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '50%x' }}>
//                 <img id='appLoadingLogo' alt="portfolio-logo" src="/logo.png" style={{ width: '100px', height: '100px', zIndex: '99', imageResolution: '20dpi' }} />
//                 <h3>Loading</h3>
//                 <div id='logoShadow' style={{ background: 'rgba(0,0,0,.1)', height: '105px', width: '105px', borderRadius: '50%' }}></div>
//             </div>
//         </div>
//         </>
//     )
// };

// export default Loading;