import React from 'react'
import {useForm} from 'react-hook-form'
import {Button} from 'antd'
import {Flex} from 'reflexbox'
import {ImageField} from './ImageField'
import {withFirebaseDatabaseMutation} from '../../hocs'


const withProductsMutation = withFirebaseDatabaseMutation({type: "push", path: "ScentHunt/products"})


export const Form = withProductsMutation(({runMutation}) => {
    const {register, handleSubmit} = useForm({shouldUnregister: true})

    return (
        <Flex as="form" onSubmit={handleSubmit(runMutation)} justifyContent="space-between">
            <ImageField register={register}/>
            <input placeholder="name" name="name" ref={register}/>
            <input placeholder="brand" name="brand" ref={register}/>
            <input placeholder="price" name="price" ref={register}/>
            <input placeholder="uniqueness" name="uniqueness" ref={register}/>
            <input placeholder="longevity" name="longevity" ref={register}/>
            <input placeholder="ingredients" name="ingredients" ref={register}/>
            <Button type="primary" htmlType="submit">
                Add
            </Button>
        </Flex>
    )
})