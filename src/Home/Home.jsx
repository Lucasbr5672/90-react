import Header from './Header/HomeH'
import {Div,Input} from './home'

const Home = () => {
    return(
        <>
          <Header/>
          <Div>
            <h1>AVISOS</h1>
            <br />
            <Input list='Turmas/todas as turmas'
            type="text" 
            placeholder=' TURMA / TODAS AS TURMAS'
            />
            <datalist id = "Turmas/todas as turmas">
            <option value="6°A"></option>
            <option value="6°B"></option>
            <option value="7°A"></option>
            <option value="7°B"></option>
            <option value="8°A"></option>
            <option value="8°B"></option>
            <option value="9°A"></option>
            <option value="9°B"></option>
            <option value="1°A Ensino Médio"></option>
            <option value="1°B Ensino Médio"></option>
            <option value="2°A Ensino Médio"></option>
            <option value="2°B Ensino Médio"></option>
            <option value="3°A Ensino Médio"></option>
            <option value="3°B Ensino Médio"></option>
            <option value="Todas as Turmas"></option>
            </datalist>
            
          </Div>
        </>
    )
}
export default Home;
