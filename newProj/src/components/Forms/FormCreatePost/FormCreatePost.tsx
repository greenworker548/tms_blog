import React, { FC, useContext, useState } from 'react'

import { NavLink } from 'react-router-dom'

import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import { ThemeContext } from '../../../contexts/contexts'
import './FormCreatePost.scss'
import { FileUploader } from '../../FileUploader/FileUploader'

export const FormCreatePost: FC = () => {
    const date = new Date()
    const publishAt = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
    const [postTitle, setPostTitle] = useState('')
    const [postUrl, setPostUrl] = useState('')
    const [postPublishAt, setPostPublishAt] = useState(publishAt)
    const [image, setImage] = useState(null)
    const [postDescription, setPostDescription] = useState('')
    const [postText, setPostText] = useState('')
    const { theme }: any = useContext(ThemeContext)

    return (
        <div className={`add-form add-form--${theme}`}>
            <div className='row'>
                <Input
                    className='input-text'
                    label='Title'
                    placeholder='This title post'
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <Input
                    className='input-text'
                    label='URL'
                    placeholder='iss-us-eva-79'
                    value={postUrl}
                    onChange={(e) => setPostUrl(e.target.value)}
                />
                <Input
                    className='input-text'
                    label='Publish at'
                    placeholder={postPublishAt}
                    value={postPublishAt}
                    onChange={(e) => setPostPublishAt(e.target.value)}
                />

                {/* <input
                    className='input__text'
                    type='file'
                    onChange={(e) => setImage(null)}
                /> */}

                <FileUploader />
            </div>

            <label className='add-form__desc'>
                <span>Desc</span>
                <textarea
                    className=''
                    placeholder='Add your text'
                    value={postDescription}
                    onChange={(e) => setPostDescription(e.target.value)}
                ></textarea>
            </label>
            <label className='add-form__text'>
                <span>Text</span>
                <textarea
                    placeholder='Add your text'
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                ></textarea>
            </label>
            <div className='add-form__btns'>
                <div className='add-form__btns-left'>
                    <Button className='secondary-2' children='Delete' />
                </div>
                <div className='add-form__btns-right'>
                    <NavLink to='/'>
                        <Button className='secondary' children='Cancel' />
                    </NavLink>
                    <Button className='primary' children='Add post' />
                </div>
            </div>
        </div>
    )
}