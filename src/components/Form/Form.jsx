import React from 'react'
import {useForm} from 'react-hook-form'
import {FirebaseDatabaseMutation} from '@react-firebase/database'
import {Button, Input} from 'antd'
import {Flex} from 'reflexbox'
import {ImageField} from './ImageField'


const style = {
    width: '10vw'
}

export const Form = () => {
    const {register, handleSubmit} = useForm({shouldUnregister: true})

    const registerAntdInput = ({input}) => register({
        required: true,
    })(input)

    return (
        <FirebaseDatabaseMutation type="push" path="ScentHunt/products">{
            ({runMutation}) => (
                <Flex as="form" onSubmit={handleSubmit(runMutation)} justifyContent="space-between">
                    <ImageField register={register} style={style}/>
                    <Input style={style} placeholder="name" name="name" ref={registerAntdInput}/>
                    <Input style={style} placeholder="brand" name="brand" ref={registerAntdInput}/>
                    <Input style={style} placeholder="price" name="price" ref={registerAntdInput}/>
                    <Input style={style} placeholder="uniqueness" name="uniqueness" ref={registerAntdInput}/>
                    <Input style={style} placeholder="longevity" name="longevity" ref={registerAntdInput}/>
                    <Input multiple style={style} placeholder="ingredients" name="ingredients" ref={registerAntdInput}/>
                    <Button type="primary" htmlType="submit">
                        Add
                    </Button>
                </Flex>
            )
        }</FirebaseDatabaseMutation>
    )
}