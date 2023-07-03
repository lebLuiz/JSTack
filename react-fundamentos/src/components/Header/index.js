import React, { useContext } from "react";
import PropTypes from "prop-types";

import Title from "../Title";
import Button from "../Button";
import styles from "./Header.scss";

import { ThemeContext } from "../../context/ThemeContext";

export default function Header({ title, children }) {
    const { onToggleTheme } = useContext(ThemeContext);

    return (
        <>
            <Title className={styles.title}>{ title }</Title>
            <Button onClick={onToggleTheme}>
                Mudar tema
            </Button>
            { children }
        </>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

Header.defaultProps = {
    title: `JStack's Blog`,
};