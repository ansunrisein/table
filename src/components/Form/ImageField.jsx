import React, {useMemo, useState} from 'react'
import PropTypes from 'prop-types'
import * as firebase from 'firebase'
import {Flex} from 'reflexbox'
import {nanoid} from 'nanoid'
import styles from './Form.module.css'


export const ImageField = ({register}) => {
    const storage = useMemo(() => firebase.storage(), [])
    const [image, setImage] = useState('')

    const uploadImage = async e => {
        const file = e.target.files[0]
        const name = 'products/image-' + nanoid()

        await storage.ref(name).put(file)

        const url = await storage.ref(name).getDownloadURL()
        setImage(url)
    }

    return (
        <Flex flex="1" justifyContent="flex-end" className={styles.upload_container}>
            <button className={styles.upload}>
                <label className={styles.label} htmlFor="upload-photo">
                    Browse
                </label>
            </button>
            <input hidden type="file" name="image" id="upload-photo" className={styles.file} onChange={uploadImage}/>
            <input hidden readOnly name="image" ref={register} value={image}/>
        </Flex>
    )
}

ImageField.propTypes = {
    register: PropTypes.func,
}