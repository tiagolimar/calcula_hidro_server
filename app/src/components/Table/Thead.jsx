/* eslint-disable react/prop-types */
export const Thead = (props) => {
    // eslint-disable-next-line no-unused-vars
    const {id, ...firstObj} = props.data[0];
    const keys = Object.keys(firstObj);
    keys.push('Editar');

    const head_table = keys.map((k, i) => <th key={i} className="text-primary">{k.toUpperCase()}</th>);
    return (
        <thead>
            <tr>{head_table}</tr>
        </thead>
    );
};
