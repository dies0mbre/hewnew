import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./profile.module.css";

import { withAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";
 
class pProfile extends React.Component {
    
    render(){
        return(
            
    <div className="container">
    


     {/* __________________________________________________________________________ */}
    <div className="row gutters-sm">
      <div className="col-md-4 d-none d-md-block">  
        <div className="card">

          <div className="card-body">
            
            <div className="avatar">
              <img className="rounded-circle" src="profile/avatar.png"/>
            </div>
            
            <div className="information fullName">Joan Stevens</div>
            <div className="information role">Photographer</div>
            
            
            <div className="information form tech">
            Tech
            <p className="fill">Canon</p>
            </div>
            
            <div className="information form for-margin">
            Styles
            <p className="fill">classNameic portret</p>
            </div>
            
            <div className="information form for-margin">
            Min.cost
            <p className="fill">100$</p>
            </div>
            
            <div className="information form for-margin">
            Experience
            <p className="fill">5 year</p>
            </div>
            
            <div className="information form for-margin">
            Website
            <a href="instagram.com/joan/" className="fill">instagram.com/joan/</a>
            </div>
            
            <div className="information form for-margin">
            <p className="loc-title">Location</p>
            <p className="fill loc">Cagayan de Oro City, Philippines, 9000</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
{/* ________________________________________________________________________________ */}

      



      
      
    <div className="col-md-8">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Portfolio</h5>
                <div className="container-fluid">
                 {/* ____________________ */}
                    <div className="row" id="portfolio" data-toggle="modal" data-target="#gallery">
                    
                        <div className="col-12 col-sm-6 col-lg-3">
                            <a className="img-portfolio" href="/">
                                <img src="choice/model.png" className="img-responsive" data-target="#carousel" data-slide-to="0"/>
                            </a>
                        </div>
                    
                        <div className="col-12 col-sm-6 col-lg-3">
                            <a className="img-portfolio" href="/">
                            <img src="profile/Rectangle-1.png" className="img-responsive" data-target="#carousel" data-slide-to="1"/>
                            </a>
                        </div>
                    
                        <div className="col-12 col-sm-6 col-lg-3">
                            <a className="img-portfolio" href="/">
                            <img src="profile/Rectangle-2.png" className="img-responsive" data-target="#carousel" data-slide-to="2"/>
                            </a>
                        </div>
                        
                        <div className="col-12 col-sm-6 col-lg-3">
                            <a className="img-portfolio" href="/">
                            <img src="profile/Rectangle-3.png" className="img-responsive" data-target="#carousel" data-slide-to="3"/>
                            </a>
                        </div>
                        
                    
                        <div className="col-12 col-sm-6 col-lg-3">
                            <a className="img-portfolio" href="/">
                                <img src="profile/Rectangle.png" className="img-responsive"/>
                            </a>
                        </div>
                        
                        <div className="col-12 col-sm-6 col-lg-3">
                            <a className="img-portfolio" href="/">
                            <img src="profile/Rectangle-1.png" className="img-responsive"/>
                            </a>
                        </div>
                        
                        <div className="col-12 col-sm-6 col-lg-3">
                            <a className="img-portfolio" href="/">
                            <img src="profile/Rectangle-2.png" className="img-responsive"/>
                            </a>
                        </div>
                        
                        <div className="col-12 col-sm-6 col-lg-3">
                            <a className="img-portfolio" href="/">
                            <img src="profile/Rectangle-3.png" className="img-responsive"/>
                            </a>
                        </div>
                    </div>
                    {/* _______________ */}
                    {/* _______________ */}
                    <div className="modal fade" id="gallery" tabindex="-1" role="dialog" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                
                                <div className="modal-header">
                                <   span className="close" aria-hidden="true" data-dismiss="modal">&times;</span>
                                </div>
                                <div className="modal-body">
                                
                                    <div className="container">
                                        <div className="row">
                                            
                                            <div className="col-md-2">
                                                <div className="img-name">
                                                    Name
                                                </div>
                                                <button type="button" className="btn btn-edit mx-auto">Edit</button>
                                            </div>
                                            
                                            <div className="col">
                                            
                                                <div id="carousel" className="carousel slide" data-ride="carousel">
                                                    <div className="carousel-inner">
                                                        <div className="carousel-item active">
                                                        <img className="d-block w-100" src="choice/model.png"/>
                                                        </div>
                                                        <div className="carousel-item">
                                                        <img className="d-block w-100" src="profile/test.jpg"/>
                                                        </div>
                                                        <div className="carousel-item">
                                                        <img className="d-block w-100" src="profile/Rectangle-2.png"/>
                                                        </div>
                                                        <div className="carousel-item">
                                                        <img className="d-block w-100" src="profile/Rectangle-3.png"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                                <div className="row d-flex justify-content-between">
                                                    <div className="col-md-3">
                                                        Desc
                                                    </div>
                                                    <div className="col">
                                                        <p className="img-desc">Marta, Philippines, 11 Feb 2016</p>
                                                    </div>
                                                </div>
                                            
                                                <div className="row d-flex justify-content-between">
                                                    <div className="col-md-3">
                                                        Tags
                                                    </div>
                                                    <div className="col">
                                                        <p className="img-tags">Cagayan de Oro City, Philippines, 9000</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ____________________ */}
                </div>
                {/* _______________container_fluid */}


                <div className="card-footer">
                <input type="file" className="account-settings-fileinput"/>
                </div>
            </div> 

            {/* <div className="card-header border-bottom mb-3 d-flex d-md-none"> */}
            {/* <ul className="nav nav-tabs card-header-tabs nav-gap-x-1" role="tablist">
                    <li className="nav-item">
                        <a href="#accset" data-toggle="tab" className="nav-link has-icon active"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></a>
                    </li>
                    <li className="nav-item">
                        <a href="#phset" data-toggle="tab" className="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></a>
                    </li>
                    <li className="nav-item">
                        <a href="#security" data-toggle="tab" className="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></a>
                    </li>
                    <li className="nav-item">
                        <a href="#notification" data-toggle="tab" className="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></a>
                    </li>
                    <li className="nav-item">
                        <a href="#logout" data-toggle="tab" className="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg></a>
                    </li>
                    </ul>
            </div> */}
          
                {/* <div className="container">
                    </div> */}
                {/* </div> */}

        </div>
        {/* _____________card_body end */} 
    </div>
    {/* ________________dov col md8 end */}
      
</div>
// _________________end

)}};

export default withAuth0(pProfile);