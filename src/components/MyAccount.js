import React, { Component } from "react";
import "../styles/MyAccount.css";
import { Button, ButtonToolbar } from 'react-bootstrap';
import { EditPhotoModal } from './EditPhotoModal';
import Profile from './images/profilepic.png';
import Profile1 from './images/profile1.jpg';
import Profile2 from './images/profile2.jpg';
import Profile3 from './images/profile3.jpg';
import Profile4 from './images/profile4.jpg';
import Profile5 from './images/profile5.jpg';
import Profile6 from './images/profile6.jpg';
import Profile7 from './images/profile7.jpg';
import Profile8 from './images/profile8.jpg';
import Profile9 from './images/profile9.jpg';
import Profile10 from './images/profile10.jpg';

function ChangePhoto() {
  function handleClick(e) {
    e.preventDefault();
    document.getElementById("profile-pic-myA").src = { Profile10 };
    console.log('The button was clicked.');
  }

}

export class MyAccount extends Component {

  constructor(props) {
    super(props);
    this.state = { editPhotoShow: false }
  }



  render() {
    let editModalClose = () => this.setState({ editPhotoShow: false });
    let changeProfilePic = () => { document.getElementById('profile-pic-myA').src = Profile1; }
    return (
      <body>


        <div class='content-container'>
          <div class='content-grid-myA'>
            <div class=' main-myA'>
              <div class="profile-container-myA">
                <div class="profile-pic-buffer-myA">
                  <div class="profilepic">
                    <img class="responsive" id="profile-pic-myA" src={Profile} alt="city" width="100" height="80" />
                  </div>
                  <div class="edit-pic">
                    <ButtonToolbar>
                      <Button variant="primary" onClick={() => this.setState({ editPhotoShow: true })}>
                        Change Photo
      </Button>

                      <EditPhotoModal
                        show={this.state.editPhotoShow}
                        onHide={editModalClose}
                        onClick={changeProfilePic}
                      />
                    </ButtonToolbar>


                  </div>
                </div>
                <div class="buffer"></div>
                <div class="profile-text-buffer">


                  <div class="profile-text">
                    <label for="full-name">NAME</label>
                    <input type="text" />
                    <button>UPDATE</button>

                    <label for="email">EMAIL</label>
                    <input type="text" />
                    <button>UPDATE</button>

                    <form>
                      <div class="phone">
                        <label for="telNo">PHONE NUMBER </label>
                        <input id="telNo" name="telNo" type="tel" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="XXX-XXX-XXXX"></input>
                        <span class="validity"></span>
                      </div>
                      <div>
                        <button>UPDATE</button>
                      </div>
                    </form>
                    <div class="container">
                      <div class="panel panel-primary">
                        <div class="panel-heading">
                          <h3 class="panel-title">Address</h3>
                        </div>
                        <div class="panel-body">
                          <input id="autocomplete" placeholder="Enter your address" onFocus="geolocate()" type="text" class="form-control"></input>
                          <br></br>
                          <div id="address">
                            <div class="row">
                              <div class="col-md-6">
                                <label class="control-label">Stress Address</label>
                                <input class="form-control" id="stress_number" placeholder="Enter your street number and street name"></input>
                              </div>
                              <div class="col-md-6">
                                <label class="control-label">Apt Number</label>
                                <input class="form-control" id="apt_number" placeholder="Enter your Apartment number"></input>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <label class="control-label">City</label>
                                <input class="form-control field" id="locality" placeholder="Enter your city"></input>
                              </div>
                              <div class="col-md-6">
                                <label class="control-label">State</label>
                                <input class="form-control" id="administrative_area_level_1" placeholder="Enter your State"></input>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <label class="cotrol-label">Zip Code</label>
                                <input class="form-control" id="postal_code" placeholder="Enter your Zip Code"></input>
                              </div>
                              <div class="col-md-6">
                                <label class="control-label">Country</label>
                                <input class="form-control" id="country" placeholder="Enter your country"></input>
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


          </div>

        </div>


        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&libraries=places&callback=initAutocomplete" async defer></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
        <script src="auto-complete.js"></script>
      </body>
    );
  }
}

/* var modal = document.getElementById("myModal");
var btn = document.getElementById("trigger");
var span = document.getElementByClassName("close")[0];
 
btn.onclick = function () {
      modal.style.display = "block";
  }
  
span.onclick = function () {
      modal.style.display = "none";
  }
  
window.onclick = function (event) {
if (event.target == modal) {
      modal.style.display = "none";
  }
} */


export default MyAccount;

