import './Button.css';

function Button({ type, visual, onClick, children, status, otherClass }) {
    const className = `button button-${visual} ${status ? status : ""} ${otherClass ? otherClass : ""}`;

    return (
        <button onClick={onClick} type={type} className={className}>{children}</button>
    );
}

export default Button;