import './App.css';
import * as React from 'react';
import Slider from 'react-slick';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import { users } from './components/usersList.js';
import { publis } from './components/publiList.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import Icons from './components/icons.js'


function App() {
  return (
    <>
    <div className="App d-flex flex-column align-items-center m-0 p-0" id='App'>
      <div class="waves-container d-none-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" alt="Wave 1" class="wave wave1"><path fill="#0099ff" fill-opacity="1" d="M0,224L80,208C160,192,320,160,480,176C640,192,800,256,960,277.3C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" alt="Wave 2" class="wave wave2"><path fill="#a2d9ff" fill-opacity="1" d="M0,32L26.7,48C53.3,64,107,96,160,101.3C213.3,107,267,85,320,101.3C373.3,117,427,171,480,170.7C533.3,171,587,117,640,90.7C693.3,64,747,64,800,74.7C853.3,85,907,107,960,144C1013.3,181,1067,235,1120,224C1173.3,213,1227,139,1280,101.3C1333.3,64,1387,64,1413,64L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
          </div> 
      <Profiles />
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-sm-12">
            <Publis />
          </div>
        </div>
      </div>
    </div>

      </>
  );
}


function Profiles() {
  return (
    <>
      <Carousel />
    </>
  )
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll:7,
  autoplay: false,
  autoplaySpeed: 0,
  arrows: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 4,
        slidesToScroll:3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll:3,
      }
    }
  ],
};

const Carousel = () => {
  const listaUsu = users.map(user => 
    
    <li key={user.name} class='user-avatar d-flex flex-column align-items-center'>
      <a href="">
        <img
        class='avatar align-center'
        src={user.imgURL}
        alt={'Foto de ' + user.name}
        style={{
          width: user.imageSize,
          heigth: user.imageSize
        }}
        />
      </a>
      <p class='user-name mt-2'>{user.name}</p>
    </li>
);


return (
<div id='nav-usu' class='container mt-3 p-0 rounded align-items-center'>

<div class="row">
  <div class="col-12">
    <Slider {...settings}>
      {listaUsu}
    </Slider>
  </div>
</div>
</div>
);
};

// function Publis() {
//   return (
//     // <div className="container position-relative my-4">
//     //   <div class="row justify-content-center">
//     //     <div class="col-6">
//     //       <video
//     //         id='video'
//     //         class='rounded video'
//     //         src={publis[1].videoURL}
//     //         alt="..."
//     //         style={{ width: '100%' }}
//     //         controls
//     //       />
//     //     </div>
//     //   </div>
//     // </div>

//       <div id='publi-carousel' className='container m-3 p-3 rounded justify-content-center'>
//         <div className="row">
//           <div className="col-12 d-flex flex-column align-items-center">
//             {publis.map(publi => (
//               <div className="card position-relative my-1" style={{ width: '35vw' }}>
//                 <div className="card-header text-start">
//                   <img
//                     className='avatar d-inline'
//                     src={publi.imgURL}
//                     alt={'Foto de ' + publi.Username}
//                     style={{
//                       width: publi.imageSize,
//                       height: publi.imageSize
//                     }}
//                   />
//                   <p className='d-inline mb-0 ms-3 fs-5 fw-bold'>{publi.Username}</p>
//                 </div>
//                 <div className="position-relative w-100">

                  
//                   {publi.publiURL.match('.mp4') ? <video className='video' src={publi.publiURL} alt="..." style={{ width: '100%' }} controls/> : <img className='imagem' src={publi.publiURL} alt="..." style={{ width: '100%' }}/>}
                  



//                 </div>
//                 <div class='row m-2'>
//                   <div className='col-12 d-flex justify-content-start gap-3'>
//                     <Icons/>
//                   </div>
//                   <div class='text-start'>
//                     <p id='curtidas'>200 Curtidas</p>
//                   </div>
//                 </div>
//                 <div className='card-body text-start'>
//                   <small>{publi.Username}</small>
//                   <p className='card-text'>{publi.publiText}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     ); 
  
//   }


let likeCount = 0

function Publis() {

  return (
    <div id='publi-carousel' className='container m-0 p-3 rounded justify-content-center'>
      <div className="row">
        <div className="col-12 col-sm-12 align-items-center">
          {publis.map(publi => (
            <div className="card position-relative my-1" key={publi.id}>
              <div className="card-header text-start">
                <div class="avatar-container">
                  <img
                    className='avatar d-inline'
                    src={publi.imgURL}
                    alt={`Foto de ${publi.Username}`}
                    style={{
                      width: publi.imageSize,
                      height: publi.imageSize
                    }}
                  />
                </div>
                <p className='d-inline mb-0 ms-3 fs-5 fw-bold'>{publi.Username}</p>
              </div>
              <div className="position-relative w-100">
                {publi.publiURL.match('mp4') ? (
                  <video className='video' alt="..." style={{ width: '100%' }} controls >
                    <source src={process.env.PUBLIC_URL + publi.publiURL} type="video/mp4"/>
                  </video>
                ) : (
                  <img className='imagem' src={publi.publiURL} alt="..." style={{ width: '100%' }}/>
                )}
              </div>
              <div className='row m-2'>
                <div className='col-12 d-flex justify-content-start gap-3'>
                  <Icons />
                </div>
              </div>
              <div className='card-body text-start'>
                <small>{publi.Username}</small>
                <p className='card-text'>{publi.publiText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




export default App;