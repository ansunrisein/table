import React from 'react'
import {useForm} from 'react-hook-form'
import c from 'classnames'
import {Flex} from 'reflexbox'
import {CloseOutlined} from '@ant-design/icons'
import {withFirebaseDatabaseMutation} from '../../hocs'
import {ImageField} from './ImageField'
import {Button, Disclaimer, Input, Logo} from '../../ui'
import styles from './Form.module.css'


const withProductsMutation = withFirebaseDatabaseMutation({type: 'push', path: 'ScentHunt/products'})


export const Form = withProductsMutation(({runMutation, showForm}) => {
    const {register, handleSubmit} = useForm({shouldUnregister: true})

    const optionRegister = register({
        required: true,
    })

    return (
        <Flex as="form" flexDirection="column" justifyContent="space-between" alignItems="center"
              className={c(styles.container, styles.relative)}
              onSubmit={handleSubmit(runMutation)}
        >
            <Logo className={styles.logo}/>
            <Disclaimer className={styles.disclaimer}/>
            <Flex justifyContent="space-around" width="100%">
                <Flex flexDirection="column">
                    <span className={styles.name}>IMAGE</span>
                    <ImageField register={optionRegister}/>
                </Flex>
                <Flex flexDirection="column">
                    <span className={styles.name}>NAME</span>
                    <Input name="name" ref={optionRegister}/>
                </Flex>
                <Flex flexDirection="column">
                    <span className={styles.name}>BRAND</span>
                    <Input name="brand" ref={optionRegister}/>
                </Flex>
                <Flex flexDirection="column">
                    <span className={styles.name}>PRICE</span>
                    <Input name="price" ref={optionRegister}/>
                </Flex>
                <Flex flexDirection="column">
                    <span className={styles.name}>UNIQUENESS</span>
                    <Input name="uniqueness" ref={optionRegister}/>
                </Flex>
                <Flex flexDirection="column">
                    <span className={styles.name}>LONGEVITY</span>
                    <Input name="longevity" ref={optionRegister}/>
                </Flex>
                <Flex flexDirection="column">
                    <span className={styles.name}>INGREDIENTS</span>
                    <Input name="ingredients" ref={optionRegister}/>
                </Flex>
            </Flex>
            <Button type="submit" className={styles.button}>Upload</Button>
            <button className={styles.close} onClick={() => showForm(false)}>
                <CloseOutlined/>
            </button>
        </Flex>
    )
})