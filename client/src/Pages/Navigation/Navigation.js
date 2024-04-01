import style from './style.module.scss'
import { Input } from '@mantine/core';
import Header from '../../Components/Header/Header';
import { Button } from '@mantine/core';



function Navigation() {
    return (<>
        <div className={style.name}>
            <h1>Создание </h1>
            <h3>Обновление</h3>
            <h3>Удаление</h3>
        </div>
        <div className={style.course}>
            <p>Курс</p>
            <Input placeholder="Input component" />
        </div>
        <div className={style.direction}>
            <p>Описание</p>
            <Input placeholder="Input component" />
        </div>
        <Button variant="filled">Button</Button>

    </>);
}

export default Navigation;