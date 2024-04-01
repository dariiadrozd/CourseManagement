import style from "./style.module.scss";
import Header from "../../Components/Header/Header";
import { Input } from '@mantine/core';
import { Button } from '@mantine/core';
import { useState } from "react";
import { useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation } from "../../services/course";

function Navigation() {
    const [activBtn, setActivBtn] = useState('Создание')
    const [createCourse] = useCreateCourseMutation()
    const [updateCourse] = useUpdateCourseMutation()
    const [deleteCourse] = useDeleteCourseMutation()
    const [data, setData] = useState([{
        titleRu: 'Курс',
        place: 'Введите название курса',
    }, {
        titleRu: 'Описание',
        place: 'Введите описание курса'
    }, {
        titleRu: 'Город', place: "введите город",
        titleEn: 'city'
    }])

    const [inp, setInp] = useState({ id: '', title: '', info: '', city: '' })




    const changeLayoutInputs = (event) => {
        if (event.target.textContent == "Создание") {
            setData([{
                titleRu: 'Курс',
                place: 'Введите название курса',
                titleEn: 'title',

            }, {
                titleRu: 'Описание',
                place: 'Введите описание курса',
                titleEn: 'info'
            }, {
                titleRu: 'Город', place: "введите город",
                titleEn: 'city'
            }])
            setActivBtn(event.target.textContent)
        } else if (event.target.textContent == "Обновление") {
            setData([{
                titleRu: 'ID',
                place: 'Введите ID курса',
                titleEn: 'id'
            }, {
                titleRu: 'Курс',
                place: 'Введите название курса',
                titleEn: 'title',
            }, {
                titleRu: 'Описание',
                place: 'Введите описание курса',
                titleEn: 'info'
            }, {
                titleRu: 'Город', place: "введите город",
                titleEn: 'city'
            }])
            setActivBtn(event.target.textContent)
        } else if (event.target.textContent == "Удаление") {
            setData([{
                titleRu: 'ID',
                place: 'Введите ID курса',
                titleEn: 'id'
            }])
            setActivBtn(event.target.textContent)
        }
    }



    const sendRequest = async () => {
        switch (activBtn) {
            case 'Создание':
                const result = await createCourse(inp)
                console.log(result);
                break;
            case 'Обновление':
                const resultPut = await updateCourse(inp)
                console.log(resultPut);
                break;
            case 'Удаление':
                const result3 = await deleteCourse(inp)
                console.log(result3);
                break;

            default:
                break;
        }
    }

    const changeStateInp = (e) => {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }


    return (<div>
        <Header />
        <div className={style.wrapper}>
            <div className={style.name}>
                <h3 onClick={changeLayoutInputs}>Создание</h3>

                <h3 onClick={changeLayoutInputs}>Обновление</h3>

                <h3 onClick={changeLayoutInputs}>Удаление</h3>
            </div>

            {data.map((el) => <div className={style.course}><p>{el.titleRu}</p>  <Input name={el.titleEn} onChange={changeStateInp} placeholder={el.place} /></div>)}

            <Button style={{ marginTop: '10px' }} onClick={sendRequest} fullWidth>Button</Button>
        </div>
    </div>);
}

export default Navigation;