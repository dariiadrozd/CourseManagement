import style from './style.module.scss'
import { Input } from '@mantine/core';
import Header from '../../Components/Header/Header';
import { Button } from '@mantine/core';
import { useState } from "react";


function Navigation() {
    const [data, setData] = useState([{
        title: '',
        placeholder: 'Выберите кнопку из предложенных выше'
    }])
    return (
        <div className={style.wrapper}>
            <Header></Header>
            <div className={style.item}>
                <div className={style.name}>
                    <h3 onClick={() => setData([{
                        title: 'Курс',
                        placeholder: 'Введите название курса'
                    }, {
                        title: 'Описание',
                        placeholder: 'Введите описание курса'
                    }])}>Создание</h3>

                    <h3 onClick={() => setData([{
                        title: 'ID',
                        placeholder: 'Введите ID курса'
                    }, {
                        title: 'Курс',
                        placeholder: 'Введите название курса'
                    }, {
                        title: 'Описание',
                        placeholder: 'Введите описание курса'
                    }])}>Обновление</h3>

                    <h3 onClick={() => setData([{
                        title: 'ID',
                        placeholder: 'Введите ID курса'
                    }])}>Удаление</h3>

                </div>

                {data.map((el) =>
                    <div className={style.course}>
                        <p>{el.title}</p>
                        <Input placeholder={el.placeholder} />
                    </div>
                )}

                < Button fullWidth>Применить</Button>
            </div>
        </div >
    );
}

export default Navigation;