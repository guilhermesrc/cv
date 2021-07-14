import '../styles/notfound.scss'
import  astroImg from '../assets/images/astronaut.svg'


export function NotFound() {
    return (
        <div id="page-notfound">
            <img src={astroImg} alt="Astronaut lost in space" />
            <h1>Não encontrada essa URL</h1>
            <h1>Volte para a <a href="/">página inicial</a></h1>
            
        </div>
    )
}