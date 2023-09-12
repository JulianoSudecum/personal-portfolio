import './App.css'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { MdWavingHand } from "react-icons/md"

function App() {
  

  return (
    <>
      <div className='first_div'>
        <p className='main_text'>
        <span className='my_name'>OI, EU SOU O JULIANO <MdWavingHand id='handle_icon' /></span><br/>
        <span className='my_stack'>Web
        <a id='linkedin' target="_blank" href='https://www.linkedin.com/in/julianosudecum/' className='button_social'> <AiFillLinkedin size={32} /></a>
        <a id='github' target="_blank" href='https://github.com/JulianoSudecum' className='button_social'> <AiFillGithub size={32} /></a>
        <br/>
        DEVELOPER</span><br/>
        <span className='my_desc'>Tenho 19 anos,<br/> sou atualmente desenvolvedor <span id='full_stack_id'>Full-Stack</span><br/> com 1 ano de experiencia trabalhando em projetos.</span>
        </p>
      </div>
      <div className='slide_project'>
        <div className='div_project'>
          <h1 className='project_title'>Loja de Hamburguer <a target="_blank" href="https://github.com/Kenzie-Academy-Brasil-Developers/kenzie-burguer-v2-template_JulianoSudecum"><AiFillGithub size={32}/></a></h1>
          <div className='div_img'>
            <a target="_blank" href="https://kenzie-burguer-v2-template-juliano-sudecum.vercel.app">
              <img className='img_desk' src="hambDesktop.png"/>
              <img className='img_mobile' src="hambMobile.png"/>
            </a>
          </div>
        </div>
        <div className='div_project'>
          <h1 className='project_title'>Administrador de Tecnologias <a target="_blank" href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub_JulianoSudecum"><AiFillGithub size={32} /></a></h1>
          <div className='div_img'>
            <a target="_blank" href="https://react-entrega-kenzie-hub-juliano-sudecum.vercel.app">
              <img className='img_desk' src="hubDesktop.png"/>
              <img className='img_mobile' src="hubMobile.png"/>
            </a>
          </div>
        </div>
        <div className='div_project'>
          <h1 className='project_title'>Controle de Estoque (Meta IC) <a target="_blank" href="https://github.com/META-Inventory-control/META-Inventory-control-front"><AiFillGithub size={32} /></a></h1>
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
