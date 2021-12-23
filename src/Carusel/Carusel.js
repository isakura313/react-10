import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import "./Carusel.css"

function Carusel() {
        return (
            <Carousel className="h-400">
                <div className="h-400">
                    <img classname="min-h-0" src="https://images.pexels.com/photos/6210931/pexels-photo-6210931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/6087668/pexels-photo-6087668.jpeg?cs=srgb&dl=pexels-koolshooters-6087668.jpg&fm=jpg" />
            
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/6102369/pexels-photo-6102369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                
                </div>
            </Carousel>
        );
        }

export default Carusel;