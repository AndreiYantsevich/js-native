import React,{MouseEvent} from 'react';


export const User = () => {

const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
    alert(event.currentTarget.name)
}

const saveUser = () => {
    alert('save user')
}

const onNameChanged = () => {
    console.log('name changed')
}

const focusLost = () => {
    console.log('focus lost')
}

    return <div>
        <textarea onChange={onNameChanged} onBlur={focusLost}>Andrei</textarea>
        <button name={'delete'} onClick={deleteUser}>x</button>
        <button name={'save'} onClick={saveUser}>x</button>
    </div>
}