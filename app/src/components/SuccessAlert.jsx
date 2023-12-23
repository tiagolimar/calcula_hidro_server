/* eslint-disable react/prop-types */

function SuccessAlert({ message }) {
    return (
        <div
            className="alert alert-success alert-dismissible fade show mt-4"
            role="alert"
        >
            {message}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
        </div>
    );
}

export default SuccessAlert;
