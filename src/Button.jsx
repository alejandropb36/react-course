import PropTypes from 'prop-types';

export function Button({text, name}) {
    if (!text) {
        console.error("El texto es requerido")
    }
    console.log(text);
    return (
        <button onClick={ function () {
            console.log("Diste click en el boton mi prro!")
        } }>
            {text} - {name}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string
};

Button.defaultProps = {
    name: "Some user"
};
