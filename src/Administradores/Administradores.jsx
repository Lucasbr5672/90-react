import { Input, Button, Div,H2,Textarea} from "./administradores"
import Adm from "./Header/HeaderADM";
const Administradores = () => {
    return(
    
         <>
         <Adm/>
        <Div>
            <br />
            <H2>Adicionar Aviso</H2>
            <br />
            <br />
            <Textarea placeholder="Digite seu aviso aqui!"  cols="34" rows="5" required></Textarea>
        <Input type="date"
        />
        <Input list="turmas"
        type="text"
        placeholder="TURMA/TODAS AS TURMAS"
        />
        <datalist id = "turmas">
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
        <Button>ENVIAR</Button>
        </Div>
        </>
    )
}
export default Administradores;