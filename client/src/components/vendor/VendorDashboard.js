import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Spinner from "../common/Spinner";

import Role from "./Role";

class VendorDashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let vendorDashboardContent;

    if (profile === null || loading) {
      vendorDashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        vendorDashboardContent = <Role />;
      } else {
        // User is logged in but has no profile
        vendorDashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>Market Place Links</p>
            <Link to="/newRole" className="btn btn-lg btn-info">
              Post a New Requirement
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="Vendordashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Market Place Dashboard</h1>
              {vendorDashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

VendorDashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(VendorDashboard);
