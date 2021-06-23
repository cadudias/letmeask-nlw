import { useHistory } from 'react-router-dom';

import illustrationImage from '../assets/images/illustration.svg';
import logoImage from '../assets/images/logo.svg';
import googleImage from '../assets/images/google-icon.svg';

import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {

  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateNewRoom() {
    if(!user){
      await signInWithGoogle();
    }

    history.push('/rooms/new')
  }

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
          <button onClick={handleCreateNewRoom} className="create-room">
            <img src={googleImage} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input 
              type="text" 
              placeholder="Digite o código da sala"
            />

            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}