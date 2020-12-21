import React from "react";
import exp from "./model.png"
import styles from "./board.module.css"

import { withAuth0 } from "@auth0/auth0-react";
import Axios from "axios";

class Board extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            board : []
        }
    }

    componentDidMount() {
        this.getBoard();
    }

    getBoard = async () => {
        try {
            let response = await Axios.get("https://rswkks4w7c.execute-api.us-east-1.amazonaws.com/v4" + "/board")
            this.setState({
                board : response.data
            })
        }
        catch (error){
            console.log(error);
        }       
    }

    render (){
        
        const { user } = this.props.auth0;
        
        return(
            <>
            <header>
            <div className='container'>
                    <div className="row">
                        
                        {this.state.board.map((item, index) => (
                        <div key={index} className="col-md-3">
                            <div className="card">
                                <a className="img-portfolio" href={`/profile/${item.login}`}>
                                    <img src={`data:image/jpeg;base64,${item.file}`} className={styles.imgResponsive}/>
                                </a>
                            </div>
                        </div>
                        ))}
                        
                    </div>
            </div>
            </header>
            </>
        )
    }
};

export default withAuth0(Board);