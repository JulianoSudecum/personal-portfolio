import './App.css'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { MdWavingHand } from "react-icons/md"

function App() {
  

  return (
    <>
      <div className='first_div'>
        <p className='main_text'>
        <span className='my_name'>OI, EU SOU O JULIANO <MdWavingHand id='handle_icon' /></span><br/>
        <span className='my_stack'>REACT
        <a id='linkedin' target="_blank" href='https://www.linkedin.com/in/julianosudecum/' className='button_social'> <AiFillLinkedin size={32} /></a>
        <a target="_blank" href='https://github.com/JulianoSudecum' className='button_social'> <AiFillGithub size={32} /></a>
        <br/>
        DEVELOPER</span><br/>
        <span className='my_desc'>Tenho 19 anos,<br/> sou atualmente desenvolvedor front-end<br/> com 6 meses de experiencia trabalhando em projetos.</span>
        </p>
      </div>
      <div className='slide_project'>
        <div className='div_project'>
          <h1>Loja de Hamburguer</h1>
          <div className='div_img'>
            <a target="_blank" href="https://kenzie-burguer-v2-template-juliano-sudecum.vercel.app">
              <img className='img_desk' src="hambDesktop.png"/>
              <img className='img_mobile' src="hambMobile.png"/>
            </a>
          </div>
        </div>
        <div className='div_project'>
          <h1>Administrador de Tecnologias</h1>
          <div className='div_img'>
            <a target="_blank" href="https://react-entrega-kenzie-hub-juliano-sudecum.vercel.app">
              <img className='img_desk' src="hubDesktop.png"/>
              <img className='img_mobile' src="hubMobile.png"/>
            </a>
          </div>
        </div>
        <div className='div_project'>
          <h1>Controle de Estoque (Meta IC)</h1>
          <div className='div_img'>
            <img className='img_desk' src="metaDesk.png"/>
            <img className='img_mobile' src="metaMobile.png"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
