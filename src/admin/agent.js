import React,{
    useEffect
} from 'react'
import axios from 'axios'
 
 

export function Agent() {

    const [inputs,setInputs] = React.useState({})
    const [agents,setAgents] = React.useState([])

    //const URL = 'http://localhost/mpjl/controller/'
    const BASEURL = 'http://localhost:5001/api/'

    const handleChange=(event)=>{
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit= async (e)=>{
        e.preventDefault()
        try{
          
            //const response = await axios.post(URL+'  agents/create_agent.php', inputs)
            const insertData = await axios.post(BASEURL+'members', inputs)
            console.log(insertData.data)
            console.log(inputs)
        }
        catch(err){
            console.log(err)
        }
        //return response.data
    }

 
    const getData = async () =>{

        try{
            // //const fromApi = await axios.get(URL+'agents/read_all_agents.php')
            // // const fromApi = await fetch(URL+'agents/read_all_agents.php')

            axios.get(BASEURL+'members').then(res=>{
                const ag = res.data
                setAgents(ag)
                console.log(agents)
            })
        }
        catch(error){ 
            console.log('Error is ', error)
        }
    }
  
     
    useEffect(()=>{
        // axios.get(BASEURL+'members').then(res=>{
        //     const ag = res.data
        //     setAgents(ag)
        //     console.log(agents)
        // })
        getData()
    },[])

    console.log(agents)
    function agentList( ){
        return (
            <div>
                {
                    agents.length > 0 ? (
                        <ul>
                        {
                            agents.map((agent,index)=>
                            <li key={index}>{agent.name} = {agent.email}</li>
                            )
                        }
                        </ul>)
                    :(<p>Fetching failed</p>)
                }
                    
            </div>
            
        )
    }
   // console.log('Our data ',agents)
    return (
       
        <div>
            <h1>Agent</h1>
            <form onSubmit={handleSubmit}>
                <label>Noms</label>
                <input 
                    type='text' 
                    name='name' 
                    required 
                    onChange={handleChange}
                />
                <br />
                <label>Mot de passe </label>
                <input 
                    type='email' 
                    name='email' 
                    required 
                    onChange={handleChange}
                />
                <br />
                <label>Role</label>
                <input 
                    type='text'  
                    name='role' 
                    required 
                    onChange={handleChange}
                />
                <br />
                <button>
                    Ajouter
                </button>
            </form>

            <h3> La liste des agents</h3>
            {agentList()}
            {/* {console.log(agents)} */}
          
        </div>
    )
}



