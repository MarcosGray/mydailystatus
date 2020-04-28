import React, { useState, useContext } from 'react'
import auth0 from '../lib/auth0'
import axios from "axios";
import router from 'next/router'
import { AuthContext } from '../lib/AuthContext'

const CreateStatus = () => {
    const auth = useContext(AuthContext)
    const [dados, setDados] = useState({
        status: 'bem',
        coords: {
            lat: null,
            long: null
        }
    })
    if (auth.isAuthReady && !auth.isAuth) {
        router.push('/')
    }
    const getMyLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position)
                setDados(old => {
                    return{
                        ...old,
                        coords: {
                            lat: position.coords.latitude,
                            long: position.coords.longitude
                        }
                    }
                })
            })
        }
    }

    const onStatusChange = evt => {
        const value = evt.target.value
        setDados(old => {
            return{
                ...old,
                status: value
            }
        })
    }

    const save = async() => {
        await axios.post('/api/save-status', dados)
    }
    return(
        <div className="py-20 container mx-auto text-center" >

            <h1 className="font-bold" >Informe abaixo o seu status de hoje.</h1>
            <div className="grid grid-cols-3 gap-4 py-20" >
                <div><label><input type="radio" name="status" value="bem" onClick={onStatusChange} />Estou bem e sem sintomas.</label></div>
                <div><label><input type="radio" name="status" value="gripe" onClick={onStatusChange}  />Estou com sintomas de gripe.</label></div>
                <div><label><input type="radio" name="status" value="covid" onClick={onStatusChange} />Estou com sintomas da COVID-19.</label></div>
            </div>

            <p className="py-20" >Sua posição atual {JSON.stringify(dados)} </p>

            <button 
                className="py-4 px-2 rounded bg-pink-900 text-gray-200 font-bold shadow-lg hover:bg-pink-800 block w-1/4 text-center mx-auto"
                onClick={getMyLocation} >Pegar minha localização
            </button>
            <button 
                className="py-4 m-5 px-2 rounded bg-pink-900 text-gray-200 font-bold shadow-lg hover:bg-pink-800 block w-1/4 text-center mx-auto"
                onClick={save} >Salvar minha localização
            </button>
            <pre> {JSON.stringify(auth)} </pre>
        </div>
    )
}

export default CreateStatus

export async function getServerSideProps({ req, res }){

    const session = await auth0.getSession(req)

    if (session) {
        return{
            props: {
                isAuth: true,
                user: session.user
            }
        }
    }

    return{
        props: {
            isAuth: false,
            user: {}
        }
    }
}