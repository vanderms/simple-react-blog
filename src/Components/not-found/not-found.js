import { Link } from 'react-router-dom';


export default function NotFound(){
  return (
    <div class='section-container'>
      <h2>Ops...</h2>
      <p>A página que você procura não foi encontrada.</p>
      <Link to='/'>Voltar para a homepage</Link>
    </div>
  );
}