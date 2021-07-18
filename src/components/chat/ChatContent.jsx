import React from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

const ChatInputMessage = () => {
    const [value, setValue] = React.useState('');

    return (
        <div style={{display: 'flex',flexDirection: 'row'}}>
            <div style={{flex: 1}}>
            <InputText id="in" value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <Button label="Send" icon="pi pi-send" />
        </div>
    )
}

const ChatContent = () => {
    return (
        <div style={{backgroundColor: '#ddd', height: '400px', position: 'relative'}}>
            <div style={{position: 'absolute', bottom: '10px'}}>
            <ChatInputMessage />
            </div>
        </div>
    )
}

export default ChatContent