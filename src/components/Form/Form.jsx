import React from 'react'
import {useForm} from 'react-hook-form'
import {FirebaseDatabaseMutation} from '@react-firebase/database'
import {Input, Button} from 'antd'
import styles from './Form.module.css'

const style = {
    width: '200px'
}

export const Form = () => {
    const {register, handleSubmit} = useForm()

    const registerAntdInput = ({input}) => register(input)

    return (
        <FirebaseDatabaseMutation type="push" path="ScentHunt/products">{
            ({runMutation}) => (
                <form onSubmit={handleSubmit(runMutation)} className={styles.form}>
                    <Input style={style} placeholder="name" name="name" ref={registerAntdInput}/>
                    <Input style={style} placeholder="image" name="image" ref={registerAntdInput}/>
                    <Input style={style} placeholder="brand" name="brand" ref={registerAntdInput}/>
                    <Input style={style} placeholder="price" name="price" ref={registerAntdInput}/>
                    <Input style={style} placeholder="uniq" name="uniq" ref={registerAntdInput}/>
                    <Input style={style} placeholder="long" name="long" ref={registerAntdInput}/>
                    <Input style={style} placeholder="ingredient" name="ingredient" ref={registerAntdInput}/>
                    <Button type="primary" htmlType="submit">
                        Add
                    </Button>
                </form>
            )
        }</FirebaseDatabaseMutation>
    )
}