// import './Profile.css'
import logo from "../../images/students.avif";
function TrialProfile() {
  return (
    <div className="profilepage">
      <div className="upp">
        <div className="box1">
          <img src={logo} alt="logo" className="userr" />
          <div className="name">Rahul Negi</div>
          <div className="desig">Student</div>
          <div className="desig">Information Technology</div>
          <div className="desig">rahulnegi@gmail.com</div>
        </div>
        <div className="rightt">
          <div className="box2">
            <div className="red-box">
              <div className="leaves">
                Pending Leaves
                <h6>15</h6>
              </div>
            </div>
            <div className="blue-box">
              <div className="leaves">
                <h6>Approved Leaves</h6>
                <h6>8</h6>
              </div>
            </div>
            <div className="green-box">
              <div className="leaves">
                <h6>Rejected Leaves</h6>
                <h6>7</h6>
              </div>
            </div>
          </div>
          <div className="box3">
            <div className="detail">
              Full name
              <span className="ans">Rahul Negi</span>
            </div>
            <hr />
            <div className="detail">
              Id Number
              <span className="ans">55114</span>
            </div>
            <hr />
            <div className="detail">
              Department
              <span className="ans">Information Technology</span>
            </div>
            <hr />
            <div className="detail">
              Advisor Code
              <span className="ans">TITAK</span>
            </div>
            <hr />
            <div className="detail">
              Phone Number
              <span className="ans">9873457620</span>
            </div>
            <hr />
            <div className="detail">
              Parent's Number
              <span className="ans">7654457620</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrialProfile;
