import React from "react";
import { deleteTech } from "../../actions/techActions";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech, deleteTech }) => {
  const onDelete = () => {
    deleteTech(tech.id);
    M.toast({ html: "Technician Deleted!" });
  };

  return (
    <div>
      <li className="collection-item">
        <div>
          {tech.firstName} {tech.lastName}
          <a href="#!" className="secondary-content" onClick={onDelete}>
            <i className="material-icons grey-text">delete</i>
          </a>
        </div>
      </li>
    </div>
  );
};

export default connect(null, { deleteTech })(TechItem);
