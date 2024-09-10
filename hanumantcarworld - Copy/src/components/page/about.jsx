import React, { useEffect, useState } from 'react';
import '../../styles/About.css';
import img from "../../assets/all-images/cars-img/images.png";
import footer from '../footer/footer';

const About = () => {
  const [monthlySessions, setMonthlySessions] = useState(0);

  useEffect(() => {
    // Get the current count from localStorage or initialize it to 0 if it doesn't exist
    const count = localStorage.getItem('monthlySessions') || 0;
    const newCount = parseInt(count, 10) + 1;
    // Update the count in localStorage
    localStorage.setItem('monthlySessions', newCount);
    // Update the state
    setMonthlySessions(newCount);
  }, []);

  const resetCount = () => {
    localStorage.setItem('monthlySessions', 0);
    setMonthlySessions(0);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="modal fade" id="loginmodal">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-body">
                <button className="btn btn-danger close" data-dismiss="modal">&times;</button>
                <br />
                <h5 className="modal-title">Login to CarWorld</h5>
                {/* <form action="" className="form mt-4">
                  <div className="form-group mt-4">
                    <input type="email" className="form-control" placeholder="Enter Your Email Id" required />
                  </div>
                  <div className="form-group mt-4">
                    <input type="password" className="form-control" placeholder="Enter Your Password" required />
                  </div>
                  <div className="form-group mt-4">
                    <input type="checkbox" className="coustom-control" id="form-chekbox" required />
                    <label htmlFor="form-chekbox" className="coustom-label"> &nbsp;Keep me signed in</label>
                  </div>
                  <button type="submit" className="btn btn-success">Login</button>
                  <button type="reset" className="btn btn-danger">reset</button>
                </form>*/}
                {/* <div> 
                  <h5 className="text-center">or</h5>
                </div>
                <a href="https://accounts.google.com/b/0/AddMailService" style={{ textDecoration: 'none' }}>
                  <div className="text-center text-muted border p-3">
                    <img src="images/google-logo.jpg" width="20" alt="google-logo" className="img-fluid" /> Continue With Google
                  </div>
                </a>
                <div className="text-center mt-3 p-3">
                  <span className="ml-3">Don’t have an account?</span>
                  <a href="" data-target="#loginmodal1" data-toggle="modal" id="signup"> Sign Up</a>
                </div.*/}
              </div> 
            </div>
          </div>
        </div>
        <div className="modal fade" id="loginmodal1">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-body">
                <button className="btn btn-danger close" data-dismiss="modal">&times;</button>
                <br />
                <h5 className="modal-title">Sign Up to CarWorld</h5>
                <form action="" className="form mt-4">
                  <div className="form-group mt-4">
                    <label style={{ fontSize: '13px' }} htmlFor="" className="form-label">NAME</label>
                    <input type="text" className="form-control" placeholder="Enter Your Full Name" required />
                  </div>
                  <div className="form-group mt-4">
                    <label style={{ fontSize: '13px' }} htmlFor="" className="form-label">EMAIL</label>
                    <input type="email" className="form-control" placeholder="Enter Your Email Id" required />
                  </div>
                  <div className="form-group mt-4">
                    <label style={{ fontSize: '13px' }} htmlFor="" className="form-label">MOBILE</label>
                    <input type="number" className="form-control" placeholder="Enter Your Number" />
                  </div>
                  <div className="form-group mt-4">
                    <label style={{ fontSize: '13px' }} htmlFor="" className="form-label">PASSWORD</label>
                    <input type="password" className="form-control" placeholder="Enter Your Password" required />
                  </div>
                  <button type="submit" className="btn btn-block btn-success">Sign Up</button>
                </form>
                <div className="text-center mt-3 p-3">
                  <span className="ml-3">Already have an account?</span>
                  <a href="" id="login" data-target="#loginmodal" data-toggle="modal"> Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* <div className="about-us-banner mt-n3">
        <img src="images/banner-about-us2.jpg" width="1400" className="img-fluid" alt="about us banner" />
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="mt-3 text-justify">About Us</h3>
            <p className="text-justify">
              Hanumant car world is the best dealler of second hand car dealing.
            </p>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col">
                <h3>Our Scale</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="row border m-1 p-3" id="OurScale">
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <div className="col-8">
                        <center>
                          <img src="images/MonthlySessions.svg" width="80" alt="monthly sessions" className="img-fluid" />
                        </center>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-8 mt-3" style={{ height: '100px' }}>
                        <center>
                          <h4 className="ml-n2">{monthlySessions}</h4>
                          <p className="ml-n2" style={{ fontSize: '15px' }}>Monthly Sessions</p>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="row border m-1 p-3" id="OurScale">
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <div className="col-8">
                        <center>
                          <img src="images/MonthlySessions.svg" width="80" alt="unique users" className="img-fluid" />
                        </center>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-8 mt-3" style={{ height: '100px' }}>
                        <center>
                          <h4 className="ml-n2">0</h4>
                          <p className="ml-n2" style={{ fontSize: '15px' }}>Unique Users</p>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="row border m-1 p-3" id="OurScale">
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <div className="col-8">
                        <center>
                          <img src="images/MonthlySessions.svg" width="80" alt="active subscribers" className="img-fluid" />
                        </center>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-8 mt-3" style={{ height: '100px' }}>
                        <center>
                          <h4 className="ml-n2">0</h4>
                          <p className="ml-n2" style={{ fontSize: '15px' }}>Active Subscribers</p>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="row border m-1 p-3" id="OurScale">
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <div className="col-8">
                        <center>
                          <img src="images/MonthlySessions.svg" width="80" alt="video views" className="img-fluid" />
                        </center>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-8 mt-3" style={{ height: '100px' }}>
                        <center>
                          <h4 className="ml-n2">0</h4>
                          <p className="ml-n2" style={{ fontSize: '15px' }}>Video Views</p>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="row border m-1 p-3" id="OurScale">
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <div className="col-8">
                        <center>
                          <img src="images/MonthlySessions.svg" width="80" alt="monthly leads" className="img-fluid" />
                        </center>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-8 mt-3" style={{ height: '100px' }}>
                        <center>
                          <h4 className="ml-n2">0</h4>
                          <p className="ml-n2" style={{ fontSize: '15px' }}>Monthly Leads</p>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3>Our Impact</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="row border m-1 p-3" id="OurImpact">
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <div className="col-8">
                        <center>
                          <img src="images/SellerAssurance.svg" width="80" alt="seller assurance" className="img-fluid" />
                        </center>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-8 mt-3" style={{ height: '100px' }}>
                        <center>
                          <h5 className="ml-n2">Seller Assurance</h5>
                          <p className="ml-n2" style={{ fontSize: '15px' }}>Our sellers get the right value for the car</p>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="row border m-1 p-3" id="OurImpact">
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <div className="col-8">
                        <center>
                          <img src="images/CarOwnerSatisfaction.svg" width="80" alt="car owner satisfaction" className="img-fluid" />
                        </center>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-8 mt-3" style={{ height: '100px' }}>
                        <center>
                          <h5 className="ml-n2">Car Owner Satisfaction</h5>
                          <p className="ml-n2" style={{ fontSize: '15px' }}>Delivering delight to car owners through our services</p>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="row border m-1 p-3" id="OurImpact">
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <div className="col-8">
                        <center>
                          <img src="images/CustomerSupport.svg" width="80" alt="customer support" className="img-fluid" />
                        </center>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-8 mt-3" style={{ height: '100px' }}>
                        <center>
                          <h5 className="ml-n2">Customer Support</h5>
                          <p className="ml-n2" style={{ fontSize: '15px' }}>Round the clock support for our customers</p>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <h3>Our Achievements</h3>
              </div>
            </div>
            <div className="row mt-3" id="OurAchievements">
              <div className="col-lg-4 col-md-6">
                <div className="row border m-1 p-3">
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <div className="col-8">
                        <center>
                          <img src="images/TopAutoPortal.svg" width="80" alt="top auto portal" className="img-fluid" />
                        </center>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-8 mt-3" style={{ height: '100px' }}>
                        <center>
                          <h5 className="ml-n2">Top Auto Portal</h5>
                          <p className="ml-n2" style={{ fontSize: '15px' }}>Recognized as the top auto portal in India</p>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="row border m-1 p-3">
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <div className="col-8">
                        <center>
                          <img src="images/InnovationAward.svg" width="80" alt="innovation award" className="img-fluid" />
                        </center>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-8 mt-3" style={{ height: '100px' }}>
                        <center>
                          <h5 className="ml-n2">Innovation Award</h5>
                          <p className="ml-n2" style={{ fontSize: '15px' }}>Awarded for our innovative solutions</p>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="row border m-1 p-3">
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <div className="col-8">
                        <center>
                          <img src="images/CustomerChoice.svg" width="80" alt="customer choice" className="img-fluid" />
                        </center>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-8 mt-3" style={{ height: '100px' }}>
                        <center>
                          <h5 className="ml-n2">Customer Choice</h5>
                          <p className="ml-n2" style={{ fontSize: '15px' }}>Voted as the customer choice for car portals</p>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5" id="OurGrowth">
              <div className="col-lg-6 col-md-6">
                <div className="row">
                  <div className="col">
                    <h3>Our Growth Over the Years</h3>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <ul>
                      <li><strong>2020</strong> - Launched as a startup with a mission to doing best deals of car </li>
                      <li><strong>2021</strong> - Reached 100k monthly users</li>
                      <li><strong>2022</strong> - Expanded to 2 new cities</li>
                      <li><strong>2023</strong> - Launched mobile app</li>
                      <li><strong>2024</strong> - Achieved 15k unique users and 5k monthly leads</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <img src="images/GrowthChart.svg" alt="Growth Chart" className="img-fluid" />
              </div>
            </div>
            <div className="row mt-5" id="OurFuture">
              <div className="col-lg-6 col-md-6">
                <div className="row">
                  <div className="col">
                    <h3>Our Vision for the Future</h3>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <ul>
                      <li>Continuously innovate and improve our services</li>
                      <li>Expand to more cities and countries</li>
                      <li>Enhance customer satisfaction and experience</li>
                      <li>Adopt sustainable and eco-friendly practices</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <img src="images/VisionFuture.svg" alt="Vision for the Future" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

              <div className="col-12">
                <button className="btn btn-warning" onClick={resetCount}>Reset Count</button>
              </div>
            
    </div>
  );
};

export default About;
