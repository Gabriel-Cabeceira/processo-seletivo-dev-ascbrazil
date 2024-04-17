import { Layout } from './Shared/Layout/layout';
import "normalize.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from './Pages/Home/Home';
import { CadastroContatos } from './Pages/cadastroContatos/CadastroContatos';


function App() {
  return (
    <Router>
      <Routes>
        {/* Envolve todas as rotas que incluem o Layout principal */}
        <Route path='/*' element={
            <Layout>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cadastrar-contatos' element={<CadastroContatos />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
