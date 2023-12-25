import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Thead } from "./Thead";
import { Tbody } from "./Tbody";
import Loading from "../Loading";

export const Table = (props) => {
    let [data, setData] = useState([]);
    let [strainer, setStrainer] = useState("");
    let [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch(props.url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data_ = await response.json();
            let data = data_.map((obj) => {
                // eslint-disable-next-line no-unused-vars
                const { createdAt, updatedAt, ...dataFiltered } = obj;
                return dataFiltered;
            });

            setData(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };

    useEffect(() => {
        fetchData()
        const id = setInterval(() => {
            fetchData()
        }, 5000);

        return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.url]);

    return loading ? (
        <Loading />
    ) : (
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
    );
};

Table.propTypes = {
    url: PropTypes.string.isRequired,
};
