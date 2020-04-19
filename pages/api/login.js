const Login = async(request, response) => {
    return(
        response.send(
            {
                name: 'Marcos Gray',
                age: '48 anos',
                Degree: 'Nivel Superior',
                formation: 'Analise e Desenvolvimento de Sistemas',
            }
        )
    )
}

export default Login