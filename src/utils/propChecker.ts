import PropTypes from "prop-types";

function propChecker<P = any, T = any, D = any>(
    props: P,
    propTypes: T,
    defaultProps: D,
    name: string
): any {
    for (let prop in defaultProps) {
        if (!(prop in props) || typeof props[prop] === "undefined") {
            props[prop] = defaultProps[prop];
        }
    }
    PropTypes.checkPropTypes(propTypes, props, "prop", name);
    return props;
}

export default propChecker;
