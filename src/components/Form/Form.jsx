import React from 'react'
import {useForm} from 'react-hook-form'
import {Flex} from 'reflexbox'
import {withFirebaseDatabaseMutation} from '../../hocs'
import {ImageField} from './ImageField'
import styles from './Form.module.css'
import {Button, Disclaimer, Input, Logo} from '../../ui'


const withProductsMutation = withFirebaseDatabaseMutation({type: 'push', path: 'ScentHunt/products'})


export const Form = withProductsMutation(({runMutation}) => {
    const {register, handleSubmit} = useForm({shouldUnregister: true})

    return (
        <Flex as="form" flexDirection="column" justifyContent="space-between" alignItems="center"
              className={styles.container}
              onSubmit={handleSubmit(runMutation)}
        >
            <Logo className={styles.logo}/>
            <Disclaimer className={styles.disclaimer}/>
            <Flex justifyContent="space-around" width="100%">
                <Flex flexDirection="column">
                    <span className={styles.name}>IMAGE</span>
                    <ImageField register={register}/>
                </Flex>
                <Flex flexDirection="column">
                    <span className={styles.name}>NAME</span>
                    <Input name="name" ref={register}/>
                </Flex>
                <Flex flexDirection="column">
                    <span className={styles.name}>BRAND</span>
                    <Input name="brand" ref={register}/>
                </Flex>
                <Flex flexDirection="column">
                    <span className={styles.name}>PRICE</span>
                    <Input name="price" ref={register}/>
                </Flex>
                <Flex flexDirection="column">
                    <span className={styles.name}>UNIQUENESS</span>
                    <Input name="uniqueness" ref={register}/>
                </Flex>
                <Flex flexDirection="column">
                    <span className={styles.name}>LONGEVITY</span>
                    <Input name="longevity" ref={register}/>
                </Flex>
                <Flex flexDirection="column">
                    <span className={styles.name}>INGREDIENTS</span>
                    <Input name="ingredients" ref={register}/>
                </Flex>
            </Flex>
            <Button type="submit" className={styles.button}>Upload</Button>
        </Flex>
    )
})