import { Link } from 'react-router-dom';

import illustrationImage from '../assets/images/illustration.svg';
import logoImage from '../assets/images/logo.svg';
import googleImage from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

import { Button } from '../components/Button';
//import { useAuth } from '../hooks/useAuth';

export function NewRoom() {
  //const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImage} alt="Ilustração" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImage} alt="Logo" />
          <button className="create-room">
            <img src={googleImage} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input 
              type="text" 
              placeholder="Nome da sala"
            />

            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}