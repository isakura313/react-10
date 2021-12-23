import './Home.sass';
import Carusel from '../Carusel';

function Home() {
    return (
        <div className='pt-20 text-center h-screen'>
            <h2 className='text-2xl'> Добро пожаловать</h2>
            <h5> Сервис для статей и просмотра картинок</h5>
            <Carusel className="h-400" />
        </div >
    )
}


export default Home;