/* eslint-disable react/prop-types */
import { objToString } from '../Geral/objToString';
import axios from 'axios';
import { URL_DELETE_ID } from '../Geral/url.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const deleteItem = async (e)=>{
    e.preventDefault();
    const id = e.target.id;
    try {
        const response = await axios.delete(`${URL_DELETE_ID}/${id}`)
        if (response.status==204) {
            toast.success("Tubo excluído com sucesso!");
        }else{
            toast.error("Erro ao apagar tubo. Por favor, tente novamente.");
        }
    } catch (error) {
        console.error("Error delete data:", error.message);
    }
}

const btnEditar = (item, id) => (
    <td key={"x" + item} className="align-middle">
        <button id={id} className="btn btn-outline-danger w-100 mt-2" onClick={e=>deleteItem(e)}>Excluir</button>
    </td>
);

const renderizarPropriedades = (obj, dados) => {
    return dados.map((k, id) => {
        const isString = typeof obj[k] == "string";
        const isNumber = typeof obj[k] == "number";
        return isString || isNumber ? (
            <td key={id}>{obj[k]}</td>
        ) : (
            <td key={id}>{objToString(obj[k])}</td>
        );
    });
};

const renderizarObjetos = (obj, item) => {
    item = item + 1;
    const {id,...objFiltered} = obj
    let dados = Object.keys(objFiltered);
    return (
        <tr key={item}>{[...renderizarPropriedades(obj, dados), btnEditar(item, id)]}</tr>
    );
};

export const Tbody = (props) => {
    let body_table = props.data.map((obj, item) => {
        const dados = objToString(obj).toLowerCase();
        const filtro = props.filter.toLowerCase();
        const finded = dados.includes(filtro);

        return finded ? renderizarObjetos(obj, item) : null;
    });

    
    return( <tbody>{body_table}<div> <ToastContainer /></div>
    </tbody>);
};

