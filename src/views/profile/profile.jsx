import React from "react";
import Axios from "axios";
import classes from "./profile.module.css";
import LogoutButton from "../../components/logout-button";
import BasicAvaPh from "./camer.png";

import { withAuth0 } from "@auth0/auth0-react";

class Profile extends React.Component {    

  constructor(props) {
    super(props);
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.fileInput = React.createRef();

    this.state = {
      whose : false,
      isPh : false,
  
      // rest belong to profile, not watcher
      fullname : '',
      avatar : '',
      id : -1,
      link : '',
      
      isPhProfile : false,
  
      tech : '',
      styles : '',
      cost : -1,
      exp : '',
      loc : '',
      portfolio : [],
  
      about : '',
      favor : []
    }
  }


  
  componentDidMount() {
    this.isMineProfile();
    this.isPhWatcher();
    this.renderProfile((this.props.location.pathname).substring(9));
  }

  isMineProfile = () => {
    const whosePage = (this.props.auth0.user.nickname === (this.props.location.pathname).substring(9));
    this.setState({
      whose : whosePage
    })
    console.log("Mine? " + whosePage);

  }


  getModelInfo = async (id) => {
    try {
      let response = await Axios.get("https://rswkks4w7c.execute-api.us-east-1.amazonaws.com/v4" + "/model/id?id=" + id);
      this.setState({
        link : response.data.link,
        about : response.data.about
      })

      this.getFavor((this.props.location.pathname).substring(9));
    }
    catch (e) {
      console.log(e);
    }
  }

  getFavor = async(login) => {
    try{
      let response = await Axios.get("https://rswkks4w7c.execute-api.us-east-1.amazonaws.com/v4" + "/favor/login?login=" + login)
      this.setState({
        favor : response.data
      })
    }
    catch (e){
      console.log(e);
    }
  }

  getPortfolio = async(login) => {
    try{
      let response = await Axios.get("https://rswkks4w7c.execute-api.us-east-1.amazonaws.com/v4" + "/photo/login?login=" + login)
      this.setState({
        portfolio : response.data
      })
    }
    catch (e){
      console.log(e);
    }
  }

  getCamInfo = async (id) => {
    try {
      let response = await Axios.get("https://rswkks4w7c.execute-api.us-east-1.amazonaws.com/v4" + "/cam/id?id=" + id);
      this.setState({
        link : response.data.cam_links,
        tech : response.data.cam_tech,
        styles : response.data.cam_styles,
        cost : response.data.cam_min_cost,
        exp : response.data.cam_experience,
        loc : response.data.cam_location,
      })

      this.getPortfolio((this.props.location.pathname).substring(9));
    }
    catch (e) {
      console.log(e);
    }
  }

  isPhWatcher = async () => {
    try {
      let response = await Axios.get("https://rswkks4w7c.execute-api.us-east-1.amazonaws.com/v4" + "/user/login?login=" + this.props.auth0.user.nickname);
      this.setState({
        isPh: !!response.data.user_isph
      });
      console.log("isPh we are?" + (!!this.state.isPh) + "   " + !!response.data.user_isph)

    } catch (err) {
      console.log(err);
    }
}

getUserInfo = async (login) => {
  try {
    let response = await Axios.get("https://rswkks4w7c.execute-api.us-east-1.amazonaws.com/v4" + "/user/login?login=" + login);
    return response.data.user_photo;

  } catch (err) {
    console.log(err);
  }
}

  getBase64(file) {
    return new Promise(function(resolve) {
      var reader = new FileReader();
      
      reader.onloadend = function() {
        resolve(reader.result);
      }
      reader.readAsDataURL(file);
    })
  }

  putInPortfolio = async() => {
    try {
      if (this.fileInput.current.files[0].size < 4000000){

        let response = await Axios.post("https://rswkks4w7c.execute-api.us-east-1.amazonaws.com/v4" + "/photo", {
          login : this.props.auth0.user.nickname,
          name : this.fileInput.current.files[0].name,
          file : await this.getBase64(this.fileInput.current.files[0])
        });
        if (response.status === 200) {
          console.log(response);
        }
      }
      else {
        alert("Size of the image must be less than 4Mb.")
      }
      
    }
    catch (error){
      console.log(error + " from putIntPortfolio");
    }
  }

  putInFavor = async () => {
    try {
      let response = await Axios.post("https://rswkks4w7c.execute-api.us-east-1.amazonaws.com/v4" + "/favor/", 
      {
        model_login: this.props.auth0.user.nickname,
        cam_login: (this.props.location.pathname).substring(9)
      })
      if (response.status === 200){
        console.log("put in favor success");
      }
    }
    catch(error){
      console.log(error);
    }
  }

  favorHandler = (event) => {
    event.preventDefault();
    this.putInFavor();
  }

  uploadPhoto = (event) => {
    event.preventDefault();
    try{
      this.putInPortfolio();
    }
    catch(error){
      console.log(error);
    }
  }
  
  renderProfile = async (login) => {
    try {
      let response = await Axios.get("https://rswkks4w7c.execute-api.us-east-1.amazonaws.com/v4" + "/user/login?login=" + login);
      // let posts = res.data;

      // this will re render the view with new data
      // this.setState({
      //   Posts: posts.map((post, i) => (
      //     <li key={i} className="list-group-item">{post.text}</li>
      //   ))
      // });

      this.setState({
        fullname : response.data.user_fullname,
        id : response.data.user_id,
        isPhProfile : !!response.data.user_isph
      });

      !!response.data.user_isph ? (
        this.setState({
          avatar : "https://i.ibb.co/CwyRCKd/camer.png"})) 
        :
        (
        this.setState({
          avatar : "https://i.ibb.co/4RnHtFW/model.png"      // response.data.user_photo
        }))

      this.state.isPhProfile ? this.getCamInfo(this.state.id): this.getModelInfo(this.state.id) ;



    } catch (err) {
      console.log(err);
    }
}


  render() {
    const { user } = this.props.auth0;
    // const { name, picture, email, nickname } = user;

    return (
<div className="container">

  <div className="row gutters-sm" style={{
    marginTop: "50px"
  }}>
    <div className="col-md-4 d-none d-md-block">  
      <div className="card">

        <div className="card-body" style={{
        flex: "1 1 auto",
        minHeight: "1px",
        height: "735px",
        paddingTop: "20px",
        
        background: "#FFFFFF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "4px",
      }}>

        {this.state.isPhProfile ? 
        
        // left side for camerist 

        (<>
  
          <div className={classes.avatar}>
            <img className="rounded-circle" 
            style={{
              maxWidth: "170px",
              maxHeight: "170px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block"
          }}
            src={this.state.avatar}/>
          </div>
          
          <div className={`${classes.information} ${classes.fullName}`}>{this.state.fullname}</div>
          <div className={`${classes.information} ${classes.role}`}>Photographer</div>
          
          
          <div className={`${classes.information} ${classes.form} ${classes.tech}`}>
          Tech
          <p className="fill">{this.state.tech}</p>
          </div>
          
          <div className={`${classes.information} ${classes.form} ${classes.forMargin}`}>
          Styles
          <p className={classes.fill}>{this.state.styles}</p>
          </div>
          
          <div className={`${classes.information} ${classes.form} ${classes.forMargin}`}>
          Min.cost
          <p className={classes.fill}>{this.state.cost}$</p>
          </div>
          
          <div className={`${classes.information} ${classes.form} ${classes.forMargin}`}>
          Experience
          <p className={classes.fill}>{this.state.exp}</p>
          </div>
          
          <div className={`${classes.information} ${classes.form} ${classes.forMargin}`}>
          Website
          <a href={this.state.link} className={classes.fill}>{this.state.link}</a>
          </div>
          
          <div className={`${classes.information} ${classes.form} ${classes.forMargin}`}>
          <p className={classes.locTitle}>Location</p>
          <p className={`${classes.fill} ${classes.loc}`}>{this.state.loc}</p>
          </div>
          
          {this.state.whose ?  <LogoutButton/> : ( this.state.isPh ? (<></>) 
          : (<button onClick={this.putInFavor} className="btn mx-auto">Favor</button> ) )
          }

        </>)
        : 


        // left side for model 
        (
          <>
  
          <div className={classes.avatar}>
            <img className="rounded-circle" 
            style={{
              maxWidth: "170px",
              maxHeight: "170px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block"
          }}
          src={this.state.avatar}/>
          </div>
          
          <div className={`${classes.information} ${classes.fullName}`}>{this.state.fullname}</div>
          <div className={`${classes.information} ${classes.role}`}>Model</div>
          
          
          <div style={{textAlign : "center !important" }} className={`${classes.information} ${classes.about}`}>
            {this.state.about}
          </div>
          
          <hr/>
          
          
          <div className={`${classes.information} ${classes.link}`}>
          Website
          <a href={this.state.link} className="link">{this.state.link}</a>
          </div>
      
          {this.state.whose ?  <LogoutButton/> : (<></>)
          }

        </>
        ) 


         }



        {/* ___________________________left side done */}

      </div>
  </div>
</div>







        {/* right side from here_____________________ */}


  <div className="col-md-8">
    <div className="card">
      <div className="card-body" style={{
        flex: "1 1 auto",
        minHeight: "1px",
        height: "735px",
        paddingTop: "20px",
        
        background: "#FFFFFF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "4px",
      }}>
        
        {this.state.isPhProfile ? 
        
        // right side for camerist
        (<>


                <h5 className="card-title">Portfolio</h5>
                <div className="container-fluid">
                 {/* ____________________ */}
                    <div className="row" id="portfolio" data-toggle="modal" data-target="#gallery">

                    {this.state.portfolio.map((item, index) => (
                      <div key={index}>
                        
                        <div className="col-12 col-sm-6 col-lg-3">
                        <p className={classes.imgPortfolio} style={{
                            height: "178px",
                            width: "140px",
                            display: "block",
                            position: "relative"
                        }}>
                            <img src={`data:image/jpeg;base64,${item.file}`} 
                            className={classes.imgResponsive} 
                            data-target="#carousel" 
                            data-slide-to={index}
                            style ={{
                              maxWidth: "140px",
                              maxHeight: "140px",
                              position: "absolute",
                              left: 0,
                              right: 0,
                              top: 0,
                              bottom: 0,
                              margin: "auto"
                            }} />
                        </p>
                        </div>

                        <div className="modal fade" id="gallery" tabIndex="-1" role="dialog" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    
                                    <div className="modal-header">
                                    <span className="close" aria-hidden="true" data-dismiss="modal">&times;</span>
                                    </div>
                                    <div className="modal-body">
                                    
                                        <div className="container">
                                            <div className="row">
                                                
                                                <div className="col-md-2">
                                                    <div className={classes.imgName}>
                                                        {item.name}
                                                    </div>
                                                    {/* <button type="button" className="btn btn-edit mx-auto">Edit</button> */}
                                                </div>
                                                
                                                <div className="col">
                                                
                                                    <div id="carousel" className="carousel slide" data-ride="carousel">
                                                        <div className="carousel-inner">
                                                            <div className={"carousel-item" + !(!!index) ? "active" : "" }>
                                                            <img className="d-block w-100" src={`data:image/jpeg;base64,${item.file}`}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    <div style={{marginTop: "10px"}} className="row d-flex justify-content-between">
                                                        <div className="col-md-3">
                                                            Desc
                                                        </div>
                                                        <div className="col">
                                                            <p className={classes.imgDesc}
                                                            style = {{
                                                                      fontWeight: "400",
                                                                      fontSize: "15px",
                                                                      lineHeight: "20px",
                                                                      letterSpacing: "0.05em",
                                                                      color: "rgba(0, 0, 0, 0.5)"
                                                            }} >In development</p>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="row d-flex justify-content-between">
                                                        <div className="col-md-3">
                                                            Tags
                                                        </div>
                                                        <div className="col">
                                                            <p className={classes.imgTags}
                                                            style = {{
                                                              fontWeight: "400",
                                                              fontSize: "15px",
                                                              lineHeight: "20px",
                                                              letterSpacing: "0.05em",
                                                              color: "rgba(0, 0, 0, 0.5)"
                                                            }}>In development</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    ))}

                    </div>                    
                    {/* ____________________ */}
                </div>
                {/* _______________container_fluid */}

                {this.state.whose ? (
                <div className="card-footer">
                  <form onSubmit={this.uploadPhoto}>
                  <label><input type="file" ref={this.fileInput}/>
                  </label>
                  <button>Upload</button>
                 </form>
                </div>) : (<></>)}


        
        </>)
        : 


        // right side for model 
        (<>
        
        <h5 className="card-title">Favors</h5>
              <div className="container-fluid">
                <div className="row">
                  {this.state.favor.map((item, index) => (
                      <div key={index} className="col-md-3">
                        <a href={`${item.login}`}>
                          {/* {this.getUserInfo(item.login)} */}
                          <img src={BasicAvaPh} className="img-fluid"/>
                        </a>
                      </div>
                    ))}
                </div>
              </div>
        
        </>) }

        </div> 
      </div>
    </div>




  </div>
        

</div>
    );
  }
}

export default withAuth0(Profile);
// export default Profile;
