import './navbar.scss'
import {NavLink} from 'react-router-dom'

const items = [
    {
        id:1,
        icon:'Home',
        path:'/'
    },
    {
        id:2,
        icon:'Homee',
        path:'/'
    },
    {
        id:3,
        icon:'Jeunesse',
        path:'/'
    },
    {
        id:4,
        icon:'Ecodim',
        path:'/'
    },
]

function navBar(){
    const activeLink='#d20000'
    const normal=''
    return(
        <nav className='navbar'>
            {
                items.map((item,index) => {return(
                <ul>
                    <li key={index}>
                        <NavLink to={item.path}
                        className={({isActve}) =>
                        isActve? activeLink :normal
                        }
                        >
                            {item.icon}
                        </NavLink>
                    </li>
                </ul>)})
            }
        </nav>
    )
}

export default navBar