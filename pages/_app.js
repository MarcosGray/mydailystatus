import React from 'react'
import '../styles/styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AuthProvider } from '../lib/AuthContext'



const App = ({ Component, pageProps }) => {
    return (
        <AuthProvider>
            <div>
                <Header />
                <div className='min-h-screen bg-red-100 container mx-auto px-32' >
                    <Component {... pageProps} />
                </div>
                <Footer />
            </div>
        </AuthProvider>
    )
}

export default App