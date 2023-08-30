import React from 'react';
import Select from 'react-select';
import { themeOptions } from '../../Utils/theme';
import { useTheme } from '../../Context/ThemeContext.jsx';
import './Header.css'; // Import the external CSS file

const Header = () => {
    const { theme, setTheme, defaultTheme } = useTheme();

    const handleThemeChange = (selectedOption) => {
        const newTheme = selectedOption.value;
        setTheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
    };

    return (
        <header className="header-container">
            <nav className="navbar">
                <a href="/" className="logo">
                    GitHub Explorer
                </a>

                <ul className="nav-links">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="https://bento.me/yohannes">About</a>
                    </li>
                    <li>
                        <a href="https://bento.me/yohannes">Contact Us</a>
                    </li>
                    <li>
                        <div className="themes">
                            <Select
                                options={themeOptions}
                                onChange={handleThemeChange}
                                menuPlacement="top"
                                defaultValue={{ value: defaultTheme, label: defaultTheme.label }}
                                styles={{
                                    control: (styles) => ({
                                        ...styles,
                                        backgroundColor: theme.background,
                                        border: 'none',
                                        boxShadow: 'none',
                                        width: '160px', // Adjust width as needed
                                    }),
                                    menu: (styles) => ({
                                        ...styles,
                                        backgroundColor: theme.background,
                                    }),
                                    option: (styles, { isFocused }) => ({
                                        ...styles,
                                        backgroundColor: isFocused ? theme.background : theme.textColor,
                                        color: isFocused ? theme.textColor : theme.typeBoxText,
                                        cursor: 'pointer',
                                    }),
                                    singleValue: (styles) => ({ ...styles, color: theme.title }),
                                }}
                            />
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
