/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'
import { objToString } from '../Geral/objToString';

const btnEditar = (item) => (
    <td key={"x" + item} className="align-middle">
        <Link className="btn btn-outline-danger w-100 mt-2" to={`/usuarios/${item}`}>Excluir</Link>
    </td>
);

const renderizarDados = (obj, dados) => {
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

const renderizarUsuario = (obj, item) => {
    item = item + 1;
    let dados = Object.keys(obj);
    return (
        <tr key={item}>{[...renderizarDados(obj, dados), btnEditar(item)]}</tr>
    );
};

export const Tbody = (props) => {
    let body_table = props.data.map((obj, item) => {
        const dados = objToString(obj).toLowerCase();
        const filtro = props.filter.toLowerCase();
        const finded = dados.includes(filtro);

        return finded ? renderizarUsuario(obj, item) : null;
    });

    return <tbody>{body_table}</tbody>;
};
