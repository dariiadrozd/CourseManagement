import style from './style.module.scss'

function Header() {
    return (<div className={style.wrapper}>
        <h1>CoursesRUD</h1>
        <p className={style.headerAdmin}>Администрирование</p>
        <p className={style.headerWitch}>Просмотр</p>

    </div>);
}

export default Header;