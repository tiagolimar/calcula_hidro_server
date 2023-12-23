/* eslint-disable react/prop-types */
export const Thead = (props) => {
    let keys = Object.keys(props.data[0]);
    keys.push('Editar');
    let head_table = keys.map((k, i) => <th key={i} className="text-primary">{k.toUpperCase()}</th>);
    return (
        <thead>
            <tr>{head_table}</tr>
        </thead>
    );
};
