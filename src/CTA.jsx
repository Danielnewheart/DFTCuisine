import './Home.css';

function CTA({ children, go, target, type, filterTag }) {

    const linkClass = `cta-button__link cta-${type}`;
    const targetHref = `${target}`

    return (
        <div className="cta-button">
            <a className={linkClass} href={targetHref} onClick={(e) => go(e, target, filterTag)}>
                {children}
            </a>
        </div>
    );
}
export default CTA;