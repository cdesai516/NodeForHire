import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addRole } from "../../actions/roleActions";

class Role extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      roleName: "",
      endClient: "",
      location: "",
      roleDesc: "",
      qualifications: "",
      preferredSkills: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newRole = {
      date: this.state.date,
      roleName: this.state.roleName,
      endClient: this.state.endClient,
      location: this.state.location,
      roleDesc: this.state.roleDesc,
      qualifications: this.state.qualifications,
      preferredSkills: this.state.preferredSkills
    };

    this.props.addRole(newRole);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="role">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">
                New Role {"&"} Requirements Upload
              </h1>
              <p className="lead text-center">
                Please Enter the Following infomation for new roles and a
                summary of the requirements
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <label htmlFor="roleName" className="text-primary">
                  * Role Name
                </label>
                <TextFieldGroup
                  placeholder="Role Name"
                  name="roleName"
                  value={this.state.roleName}
                  onChange={this.onChange}
                  error={errors.roleName}
                  info="Role Title 1-3 words"
                />

                <label htmlFor="roleDesc" className="text-primary">
                  Role Description
                </label>
                <TextAreaFieldGroup
                  placeholder="Role Description"
                  name="roleDesc"
                  value={this.state.roleDesc}
                  onChange={this.onChange}
                  error={errors.roleDesc}
                  info="Enter Role Descirption"
                />
                <label htmlFor="Location" className="text-primary">
                  Location
                </label>
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="City or city & state suggested (eg. Boston, MA)"
                />
                <label htmlFor="qualifications" className="text-primary">
                  Qualifications
                </label>
                <TextFieldGroup
                  placeholder="* qualifications"
                  name="qualifications"
                  value={this.state.qualifications}
                  onChange={this.onChange}
                  error={errors.qualifications}
                  info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP"
                />
                <label htmlFor="preferredSkills" className="text-primary">
                  "Nice to Have" Skills
                </label>
                <TextFieldGroup
                  placeholder="Prefered Skills"
                  name="preferredSkills"
                  value={this.state.preferredSkills}
                  onChange={this.onChange}
                  error={errors.preferredSkills}
                  info="If you want your latest repos and a Github link, include your username"
                />
                <button
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Role.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addRole: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addRole }
)(withRouter(Role));
