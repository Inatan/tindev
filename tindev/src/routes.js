import {createAppContainer, createSwitchNavegator} from 'react-navigation'

import Login from './Pages/Login'
import Main from './Pages/Main'

export default createAppContainer{
    createSwitchNavegator({
        Login,
        Main
    })
}