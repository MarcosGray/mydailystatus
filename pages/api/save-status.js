import auth0 from '../../lib/auth0'
import { setStatus } from '../../model/markers'

const SaveStatus = async(req, res) => {
    const session = await auth0.getSession(req)
    if (session) {
        const dados = req.body
        await setStatus(session.user.sub, dados)      
    }    
    // console.log(req.body, session)
    res.send({ ok: true })
}

export default SaveStatus