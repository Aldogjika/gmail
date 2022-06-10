import React from "react";
import "./EmailRow.css";
import Checkbox from "@material-ui/core/Checkbox";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import IconButton from "@material-ui/core/IconButton";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMailDetails } from "./../features/mailSlice";

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  function openMail() {
    const emailDetails = {
      id: id,
      title: title,
      subject: subject,
      description: description,
      time: time,
    };
    dispatch(getMailDetails(emailDetails));
    history.push("/mail");
  }

  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow__options">
        <Checkbox />

        <IconButton>
          <StarOutlineIcon />
        </IconButton>

        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>

      <h3 className="emailRow__title">{title}</h3>

      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description"> - {description}</span>
        </h4>
      </div>

      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
