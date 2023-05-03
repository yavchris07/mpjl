import React,{
    useState,
    useEffect
} from 'react'
import axios from 'axios'

export function Agent() {

    const [inputs,setInputs] = useState({})
    const [agents,setAgents] = useState([])

    const handleChange=(event)=>{
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost/mpjl/controller/agents/create_agent.php', inputs)
        .then((response)=>{
            console.log(response.data)
            //setAgents(response.data)
        })
        .catch((err) => {
            console.log(err)})
        
        //using of useNavigate
        //const navigate = useNavigate()
        //.then(catch)
        //navigate('/dashboard')
        console.log(inputs)
    }

    const getData =()=>{
        axios.get('http://localhost/mpjl/controller/agents/read_all_agents.php')
        .then((res)=>{
            console.log(res.data)
            setAgents(res.data)
        })
    }

    useEffect(()=>{
        getData()
    },[])

    return (
       
        <div>
            <h1>Agent</h1>
            <form onSubmit={handleSubmit}>
                <label>Noms</label>
                <input type='text' name='noms' required onChange={handleChange}/>
                <br />
                <label>Mot de passe </label>
                <input type='password' name='password' required onChange={handleChange}/>
                <br />
                <label>Role</label>
                <input type='text'  name='role' required onChange={handleChange}/>
                <br />
                <button>Ajouter</button>
            </form>

            <h3> La liste des agents</h3>
            <table>
                <thead>
                    <tr>
                        <th>Noms</th><th>Mot de passe</th><th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        agents.map((ag,key)=>
                            <tr key={key}>
                                <td>{ag.noms}</td>
                                <td>{ag.passwords}</td>
                                <td>{ag.roles}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}
