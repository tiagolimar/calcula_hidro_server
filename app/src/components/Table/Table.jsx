/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Thead } from "./Thead";
import { Tbody } from "./Tbody";

export const Table = (props) => {
    let [data, setData] = useState([]);
    let [strainer, setStrainer] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(props.url);
            const data_ = await response.json();
            
            let data = [];
            for (let d of data_) {
                // eslint-disable-next-line no-unused-vars
                const { id, createdAt, updatedAt, ...dataFiltered } = d;
                data.push(dataFiltered);
            }
            setData(data);
        };
        fetchData();
    }, [props.url]);

    return data.length > 0 ? (
        <div className="container table-responsive mt-4">
            <h2>Listagem de Tubos</h2>
            <input
                type="text"
                className="form-control border-primary-subtle"
                placeholder="Pesquisar"
                value={strainer}
                onChange={(e) => {
                    setStrainer(e.target.value);
                }}
            />
            <table className="table table-striped border border-primary-subtle mt-4">
                <Thead data={data} />
                <Tbody data={data} filter={strainer} />
            </table>
        </div>
    ) : null;
};
