import { Button } from "semantic-ui-react";
import aaron_circle from '../media/aaron_circle.png'

function Header() {
    return ( 
        <div id='header-container'>
            <div id='header-child-div-1'>
                <div>
                    <h1 className='header-h1'>Hi I'm Aaron David <br/>and I'm a Web <br/>Developer</h1>
                    <Button>Contact</Button>
                </div>
            </div>
            <div>
                <img id='circle_photo' src={aaron_circle} alt='aaron david'/>
            </div>
        </div>
     );
}

export default Header;