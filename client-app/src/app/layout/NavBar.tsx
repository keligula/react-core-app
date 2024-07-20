import { Container, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
                    React-Core-App
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Activities List' />
                <Menu.Item as={NavLink} to='/createActivity' content='Create Activity' />
            </Container>
        </Menu>
    )
}