import { Menu } from 'semantic-ui-react';
import React from 'react';
import './styles.css';

const NavigationMenu = () => {
    return (
        <Menu className="menu">
            <Menu.Item
                name='forecast'
            >
            Forecast
            </Menu.Item>

            <Menu.Item
            name='reviews'
            >
            UV Index
            </Menu.Item>

            <Menu.Item
            name='reviews'
            >
                Search By Location
            </Menu.Item>
      </Menu>
    )
}

export default NavigationMenu;