import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./carusel.sass";

function Carusel() {
        return (
            <Carousel className="h-20">
                <div className="h-20">
                    <div className="img_wrap" style={{backgroundImage: `url(https://images.pexels.com/photos/6210931/pexels-photo-6210931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`}}>
                    {/* <img className="min-h-0" src="https://images.pexels.com/photos/6210931/pexels-photo-6210931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
                    </div>
                </div>
                <div>
                    <div className="img_wrap">   
                    <img src="https://images.pexels.com/photos/6087668/pexels-photo-6087668.jpeg?cs=srgb&dl=pexels-koolshooters-6087668.jpg&fm=jpg" />
                    </div>
                </div>
                <div>
                    <div className="img_wrap">
                    <img src="https://images.pexels.com/photos/6102369/pexels-photo-6102369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </div>
                </div>
            </Carousel>
        );
        }

export default Carusel;