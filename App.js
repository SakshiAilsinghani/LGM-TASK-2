import Users from "./card";
import "./style.css";
import React ,{Component} from "react";
class App extends Component{
    constructor(props){
        super(props);
        this.state = { users_data: [],loading: false};
        this.updateState = this.updateState.bind(this);
    

    }
    updateState(){
    
    this.setState({loading:true });
    
    setTimeout(
        async function (){
            const response= await fetch("https://reqres.in/api/users?page=1");
            const jsonresponse = await response.json();
            this.setState({users_data:jsonresponse["data"], loading:false});

        }.bind(this),
        2000

    );
    }
    render() {
        return (
            <>
            <nav className = "navbar">
                <div className = "navitems">
                    <h2> LET'S GROW MORE </h2>
                    <button className = "fetchusers" onClick = {this.updateState}>
                        GET USERS
                    </button>

                </div>
            </nav>
            <div className ="userdatacontainer">
                <Users loading ={this.state.loading} users={this.state.users_data} />

            </div>
            </>
        );

        
    }
}
export default App;