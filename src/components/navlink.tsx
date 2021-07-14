import { ButtonHTMLAttributes, useEffect, useState } from 'react'
import  menuImg from '../assets/images/icon_menu.svg'

import '../styles/curriculum.scss'


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>


export function Button(props : ButtonProps) {
    const [active, setActive] = useState(false)  
    const handleClick = () => {
        setActive(current => !current)
      }
      useEffect( () => {
        }, [active]);
    
    return (
        <button  type='button' className={
            active ? 'active icon' : 'icon'
        }
        onClick={ handleClick }
        ><img src={menuImg} alt="Menu" /></button> 
    )
    
}

