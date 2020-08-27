import React, {useMemo, useState} from 'react'
import PropTypes from 'prop-types'
import * as firebase from 'firebase'
import {nanoid} from 'nanoid'


export const ImageField = ({register, style}) => {
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
        <>
            <input style={style} placeholder="image" type="file" onChange={uploadImage}/>
            <input hidden readOnly name="image" ref={register} value={image}/>
        </>
    )
}

ImageField.propTypes = {
    register: PropTypes.func,
    style: PropTypes.object,
}