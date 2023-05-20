import { NavLink } from "react-router-dom";
import s from './navigation.module.scss';

export default function Navigation() {
    return (<nav className={s.navigation}>
    <NavLink className={({isActive}) => isActive ? `${s.active} ${s.link}` : s.link} to="/">
    Задание 1 "Таблица"</NavLink>
    <NavLink className={({isActive}) => isActive ? `${s.active} ${s.link}` : s.link} to="/diagram">Задание 2 "Диаграмма"</NavLink>
    </nav>)
}