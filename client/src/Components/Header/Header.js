import style from '../Header/style.module.scss'
// import { Link } from 'react-router-dom'

function Header() {
    return (<div className={style.wrapper}>
        <div className={style.item}>
            <h1>CoursesRUD.</h1>
            <div className={style.admin}></div>
            <p className={style.headerAdmin}>Администрирование</p>
            <p className={style.headerWitch}>Просмотр</p>
        </div>
    </div>);
}

export default Header;