import '../styles/curriculum.scss'
import  perfilImg from '../assets/images/foto_de_perfil.jpg'
import  githubImg from '../assets/images/github.svg'
import  reactImg from '../assets/images/react.svg'
import  arrowRightImg from '../assets/images/arrow_right.svg'

import  gemsImg from '../assets/images/gems.png'


import { Button } from '../components/navlink'
import Scrollspy from 'react-scrollspy'


export function Home() {
    

    
    return (
        
        <div id="page-curriculum">
            <Button ></Button>
            <aside>
                <Scrollspy items={ ['section-home', 'section-about', 'section-skills','section-projects'] } 
                currentClassName="is-current" 
                >
                    <li><a href="#section-home">Home</a></li>
                    <li><a href="#section-about">Sobre</a></li>
                    <li><a href="#section-skills">Habilidades</a></li>
                    <li><a href="#section-projects">Projetos</a></li>
                    <li><a href="">Contato</a></li>
                </Scrollspy>

            </aside>
            <main>
                <section  className="section" id="section-home">
                    <img src={perfilImg} alt="Guilherme Alves da Silva" />
                    <h1>Olá , eu sou o Guilherme Alves da Silva</h1>
                    <p>Estudante do Instituto Federal do Rio Grande do Sul</p>
                    <p>Vacaria-RS</p>
                    <p>Desenvolvedor Full Stack</p>
                    <div className="card-group">
                        <div className="card">
                            <img src={githubImg} alt="Github" />
                        </div>
                        <div className="card">
                                da
                        </div>
                        <div className="card">
                            sdsd
                        </div>
                    </div>
                </section>
                <section className="section" id="section-about">
                    <h1 className="title">Sobre</h1>
                    <p>
                    Trabalho com programação e marketing em mídias digitais desde 2019, eu desenvolvi múltiplos sites que estão online hoje, em marketing tenho experiências com publicações como banners, vídeos promocionais, anúncios, no Facebook, Instagram. Sempre me preocupo com a experiência do usuário e  também gosto de aprender.

                    </p>
                    
                </section>
                <section className="section" id="section-skills">
                    <h1 className="title">Habilidades</h1>
                    <div className="skill-group">
                        <div className="skill">
                            <img src={reactImg} alt="" />
                        </div>
                        
                    </div>
                    
                </section>
                <section className="section" id="section-projects">
                    <a className='titlehref' href="">
                        <h1 className="title">Projetos</h1> 
                        <div className="see-all">Ver todos</div>
                        <img src={arrowRightImg} alt="" />
                    </a>
                    <div className="project-group">
                        <div className="project">
                            <div className="project-informations">
                                <img src={gemsImg} alt="" />
                                <div className="informations">
                                    <h1>Gems</h1>
                                    <p>
                                        Projeto feito para auxiliar processos internos do ifrs campus Vacaria
                                        como por exemplo listar projetos, editais, alunos e oportunidades do campus

                                    </p>
                                </div>
                            </div>
                            <div className="project-technologies">
                                <img alt="Django" src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"/>
                                <img alt="jQuery" src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"/>
                                <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"/>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-informations">
                                <img src={gemsImg} alt="" />
                                <div className="informations">
                                    <h1>Gems</h1>
                                    <p>
                                        Projeto feito para auxiliar processos internos do ifrs campus Vacaria
                                        como por exemplo listar projetos, editais, alunos e oportunidades do campus

                                    </p>
                                </div>
                            </div>
                            <div className="project-technologies">
                                <img alt="Django" src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"/>
                                <img alt="jQuery" src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"/>
                                <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"/>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-informations">
                                <img src={gemsImg} alt="" />
                                <div className="informations">
                                    <h1>Gems</h1>
                                    <p>
                                        Projeto feito para auxiliar processos internos do ifrs campus Vacaria
                                        como por exemplo listar projetos, editais, alunos e oportunidades do campus

                                    </p>
                                </div>
                            </div>
                            <div className="project-technologies">
                                <img alt="Django" src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"/>
                                <img alt="jQuery" src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"/>
                                <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"/>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </main>    
        </div>
    )
}