import { useState } from 'react';
import {Menu} from 'semantic-ui-react';

function Nav() {

    const [activeItem, setActiveItem] = useState({
        activeItem: 'home'
    })

    const handleMenuItem = ({name}) => {
        setActiveItem({activeItem: name})
    }

    return ( 
        <>
            <Menu pointing secondary>
                <Menu.Item 
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleMenuItem}
                />
                <Menu.Item 
                    name='about'
                    active={activeItem === 'about'}
                    onClick={handleMenuItem}
                />
                <Menu.Item 
                    name='skills'
                    active={activeItem === 'skills'}
                    onClick={handleMenuItem}
                />
                <Menu.Item 
                    name='projects'
                    active={activeItem === 'projects'}
                    onClick={handleMenuItem}
                />
                <Menu.Item 
                    name='resume'
                    active={activeItem === 'resume'}
                    onClick={handleMenuItem}
                />
                <Menu.Item 
                    name='contacts'
                    active={activeItem === 'contacts'}
                    onClick={handleMenuItem}
                />
            </Menu>
        </>
     );
}

export default Nav;