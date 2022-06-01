import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'



export const useChat = () => {
    const [info, setInfo] = useState({
        static:0,
        car:0
    })

    const socketRef = useRef(null)

    useEffect(() => {
        socketRef.current = io(process.env.SERVER_URL)

        socketRef.current.emit('interaction')

        socketRef.current.on('interaction', (messages) => {
            const res = JSON.parse(messages)
            setInfo(prevState => ({...prevState,...res}))
        })

        return () => {
            socketRef.current.disconnect()
        }
    }, [])

    return info
}
