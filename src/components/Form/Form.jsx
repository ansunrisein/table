import React from 'react'
import {useForm} from 'react-hook-form'
import {useMedia} from 'react-use'
import c from 'classnames'
import {Flex} from 'reflexbox'
import {CloseOutlined} from '@ant-design/icons'
import {withFirebaseDatabaseMutation} from '../../hocs'
import {ImageField} from './ImageField'
import {Button, Disclaimer, Input, Logo} from '../../ui'
import styles from './Form.module.css'


const withProductsMutation = withFirebaseDatabaseMutation({type: 'push', path: 'ScentHunt/newProducts'})


export const Form = withProductsMutation(({runMutation, showForm}) => {
    const {register, handleSubmit} = useForm({shouldUnregister: true})
    const isDesktop = useMedia('(min-width: 768px)')

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
            <Flex width="100%" className={styles.mobile}>
                <Flex flex="3" className={c(styles.margin, styles.parent)} margin={!isDesktop && '1rem 0'}>
                    <Flex flexDirection="column" flex="1" className={c(styles.margin, styles.child)}>
                        <span className={styles.name}>IMAGE</span>
                        <ImageField register={optionRegister}/>
                    </Flex>
                    <Flex flexDirection="column" flex="1" className={c(styles.margin, styles.child)}>
                        <span className={styles.name}>NAME</span>
                        <Input name="name" ref={optionRegister}/>
                    </Flex>
                    <Flex flexDirection="column" flex="1" className={c(styles.margin, styles.child)}>
                        <span className={styles.name}>BRAND</span>
                        <Input name="brand" ref={optionRegister}/>
                    </Flex>
                </Flex>
                <Flex flex="3" className={c(styles.margin, styles.parent)} marginBottom={!isDesktop && '1rem !important'}>
                    <Flex flexDirection="column" flex="1" className={c(styles.margin, styles.child)}>
                        <span className={styles.name}>PRICE</span>
                        <Input name="price" ref={optionRegister}/>
                    </Flex>
                    <Flex flexDirection="column" flex="1" className={c(styles.margin, styles.child)}>
                        <span className={styles.name}>UNIQUENESS</span>
                        <Input name="uniqueness" ref={optionRegister}/>
                    </Flex>
                    <Flex flexDirection="column" flex="1" className={c(styles.margin, styles.child)}>
                        <span className={styles.name}>LONGEVITY</span>
                        <Input name="longevity" ref={optionRegister}/>
                    </Flex>
                </Flex>
                <Flex flexDirection="column" flex="1" className={c(styles.margin, styles.ingredients)}>
                    <span className={styles.name}>INGREDIENTS</span>{
                    isDesktop
                        ? <Input name="ingredients" ref={optionRegister}/>
                        : <textarea rows={4} name="ingredients" className={styles.textarea} ref={optionRegister}/>
                }</Flex>
            </Flex>
            <Button type="submit" className={styles.button}>Upload</Button>
            <button className={styles.close} onClick={() => showForm(false)}>
                <CloseOutlined/>
            </button>
        </Flex>
    )
})