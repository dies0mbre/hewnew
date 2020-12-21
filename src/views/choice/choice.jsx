import React from 'react';
import styles from "./choice.module.css"
import camer_img from "./camer.png";
import model_img from "./model.png";
import main_png from "./main.png";

import Axios from "axios";
import {  BrowserRouter as Router,  Switch,  Route,  Link } from 'react-router-dom';

import { withAuth0 } from "@auth0/auth0-react";

// id does not matter at all

class Choice extends React.Component{
    
    constructor(props) {
        super(props);
        this.choiceHandler = this.choiceHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.doesUserExist = this.doesUserExist.bind(this);
        this.putInCamerists = this.putInCamerists.bind(this);
        this.putInModels = this.putInModels.bind(this);
        
        this.state = {
            choiceMade : false,
            choice : false
        }
    }
    
    doesUserExist = async (login) => {
        let response = await Axios.get("https://rswkks4w7c.execute-api.us-east-1.amazonaws.com/v4" + "/user/login?login=" + login);
        if (response.status === 204) {
            console.log("There is no such user")
        }
        else {
            // redirect to profile
            console.log( response.data.user_isph)
            this.props.history.push("/profile/" + this.props.auth0.user.nickname);
        }
    }

    putInCamerists = async (fullname, cost, exp, tech, style, links, loc) => {
        // putInUsers 
        let response = await Axios.post("https://rswkks4w7c.execute-api.us-east-1.amazonaws.com/v4" + "/user",
            {
                login : this.props.auth0.user.nickname,
                email : this.props.auth0.user.email,
                fullname : fullname,
                url_photo : this.props.auth0.user.picture
            }
        );
        if (response.status === 200) {
            // response = JSON.parse(response.data);
            console.log(response);
        }

        response = await Axios.post("https://rswkks4w7c.execute-api.us-east-1.amazonaws.com/v4" + "/cam",
        {
            email : this.props.auth0.user.email,
            cost : parseInt(cost),
            exp : exp,
            tech : tech, 
            styles : style,
            links : links,
            loc : loc
        })

        if (response.status === 200){
            console.log(response);
            this.props.history.push("/profile/" + this.props.auth0.user.nickname);
        }
        


    }

    putInModels = async (fullname, about, link) => {
        // putInUsers 
        let response = await Axios.post("https://rswkks4w7c.execute-api.us-east-1.amazonaws.com/v4" + "/user",
            {
                login : this.props.auth0.user.nickname,
                email : this.props.auth0.user.email,
                fullname : fullname,
                url_photo : this.props.auth0.user.picture
            }
        );
        if (response.status === 200) {
            console.log(response);
        }

        response = await Axios.post("https://rswkks4w7c.execute-api.us-east-1.amazonaws.com/v4" + "/model",
            {
                email : this.props.auth0.user.email,
                about : about,
                links : link,
            }
        );
        if (response.status === 200) {
            // response = JSON.parse(response.data)
            console.log(response)
            this.props.history.push("/profile/" + this.props.auth0.user.nickname);
        }
        

    }

    choiceHandler = (value) => {
        
        this.doesUserExist(this.props.auth0.user.nickname);

        this.setState( state => ({
            choiceMade : true, 
            choice : value
        }));
    }

    submitHandler =(e) => {
        e.preventDefault();
        // 1 : camerist, 2: model
        this.state.choice ? 
        (
            this.putInCamerists(
                e.target.elements.c_fullname.value,
                e.target.elements.mincost.value,
                e.target.elements.exp.value,
                e.target.elements.tech.value,
                e.target.elements.styles.value,
                e.target.elements.c_links.value,
                e.target.elements.loc.value)
        ) 
            : 
        (
            this.putInModels(e.target.elements.m_fullname.value, 
                e.target.elements.about.value, 
                e.target.elements.link.value)
        );
        console.log("success put profile info");

    };

    render() {
        
        const { user } = this.props.auth0;
        const { name, picture, email } = user;
        return(
            <>
            { !this.state.choiceMade && (
            <div className={styles.section}>
                {/* <section className="mt-60"> */}
                    <div className='container'>
                        <div className="row">
                            <div className="col">
                                <p className={styles.question}> 
                                You are
                                </p>
                            </div>
                        </div>
                        <div className="row">

                            <div className="offset-md-2 col-md-3">
                                <img src={camer_img} className={`img-fluid ${styles.imgfluid}`} alt="camerist"/>
                                <button onClick={() => this.choiceHandler(true)} type="button" className={`btn btn-light ${styles.btnchoice}`}>
                                    <p className={styles.choice}>a photographer</p>
                                </button>
                            
                            </div>

                            <div className="offset-md-2 col-md-3">
                            <img src={model_img} className={`img-fluid ${styles.imgfluid}`} alt="model"/>
                                <button onClick={() => this.choiceHandler(false)} type="button" className={`btn btn-light ${styles.btnchoice}`}>
                                    <p className={styles.choice}>a model</p>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                {/* </section> */}
            </div>)
            }

            {/* 1 : camerist, 2 : model */}

            { this.state.choiceMade ? ( this.state.choice && (
            <div>
                <header>
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-4 ml-auto">
                                <form className={styles.formSignin} onSubmit = {this.submitHandler} >
                                
                                <label className="sr-only">Fullname</label>
                                <input type="text" name="c_fullname" id="inputFullname" className={styles.formControl} placeholder="Fullname" required autoFocus/>

                            
                                <label className="sr-only">Minim.cost</label>
                                <input type="text" name="mincost" id="inputAbout" className={styles.formControl} placeholder="Minim.cost" required/>

                                
                                <label className="sr-only">Experience</label>
                                <input type="text" name="exp" id="inputLink" className={styles.formControl} placeholder="Experience" required/>
                            
                                <label className="sr-only">Tech</label>
                                <input type="text" name="tech" id="inputAbout" className={styles.formControl} placeholder="Tech" required/>

                                
                                <label className="sr-only">Styles</label>
                                <input type="text" name="styles" id="inputLink" className={styles.formControl} placeholder="Styles" required/>
                                                                
                                <label className="sr-only">Link</label>
                                <input type="text" name="c_links" id="inputAbout" className={styles.formControl} placeholder="Link" required/>

                                
                                <label className="sr-only">Location</label>
                                <input type="text" name="loc" id="inputLink" className={styles.formControl} placeholder="Location" required/>

                                {/* <Link to="/profile" onClick={this.submitHandler} style={{marginTop : '20px'}} className="btn-lg btn-light btn-block">Continue</Link> */}
                                <button className="btn-lg btn-light btn-block" style={{marginTop : '20px'}}>Continue</button>
                                </form>

            
                            </div>
                            <div className="offset-md-1 col-md-6 ml-auto">
                                <img src={main_png} className="img-fluid" alt="img"/>
                            </div>
                        </div>
                    </div>
                </header>
            </div>)
            ) : (<></>)  
            }
            
            { this.state.choiceMade ? ( !this.state.choice && (
                <div>
                    <header>
                        <div className='container'>
                            <div className="row">
                                <div className="col-md-4 ml-auto">
                                    <form className={styles.formSignin} onSubmit = {this.submitHandler} >
                                    
                                    <label className="sr-only">Fullname</label>
                                        <input type="text" name="m_fullname" id="inputFullname" className={styles.formControl} placeholder="Fullname" required autoFocus/>

                                
                                    <label className="sr-only">About</label>
                                    <input type="text" name="about" id="inputAbout" className={styles.formControl} placeholder="About" required/>

                                    
                                    <label className="sr-only">Link</label>
                                        <input type="text" name="link" id="inputLink" className={styles.formControl} placeholder="Link" required/>
                                    
                                    {/* <Link to="/profile" style={{marginTop : '20px'}} className="btn-lg btn-light btn-block">Continue</Link> */}
                                    <button className="btn-lg btn-light btn-block" style={{marginTop : '20px'}}>Continue</button>
                                    </form>
    
                
                                </div>
                                <div className="offset-md-1 col-md-6 ml-auto">
                                    <img src={main_png} className="img-fluid" alt="img"/>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>)
                ) : (<></>) 
            }
            
            
            </>
        );
    }
};

export default withAuth0(Choice);