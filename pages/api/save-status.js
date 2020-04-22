import { db } from "../../lib/db";
const admin = require('firebase-admin')
import auth0 from '../../lib/auth0'

const SaveStatus = async(req, res) => {
    const session = await auth0.getSession(req)
    const today = new Date()
    const currentDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate()
    if (session) {
        const dados = req.body
        await db
            .collection('markers')
            .doc(currentDate)
            .collection('checks')
            .doc(session.user.sub)
            .set({ 
                status: dados.status,
                user: session.user.sub,
                coordinates: new admin.firestore.GeoPoint(dados.coords.lat, dados.coords.long) 
            })        
    }
    
        console.log(req.body, session)
        res.send({ ok: true })
}

export default SaveStatus