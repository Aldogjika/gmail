import React, { useState, useEffect } from "react";
import "./Mail.css";
import { useSelector, useDispatch } from "react-redux";
import { selectMail } from "./../features/mailSlice";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Mail() {
  const mailDetails = useSelector(selectMail);
  const history = useHistory();

  useEffect(() => {
    if (!mailDetails) {
      goToInbox();
    }
  }, []);

  function goToInbox() {
    history.push("/");
  }

  return (
    <div className="mail">
      <div className="mail__tool">
        <div className="mail__toolsLeft">
          <IconButton onClick={goToInbox}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <MoveToInboxIcon />
          </IconButton>

          <IconButton>
            <ErrorIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>

          <IconButton>
            <WatchLaterIcon />
          </IconButton>

          <IconButton>
            <CheckCircleIcon />
          </IconButton>

          <IconButton>
            <LabelImportantIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>

          <IconButton>
            <PrintIcon />
          </IconButton>

          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>

      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{mailDetails?.subject}</h2>
          <LabelImportantIcon className="mail__important" />
          <p>{mailDetails?.title}</p>
          <p className="mail__time">{mailDetails?.time}</p>
        </div>

        <div className="mail__message">
          <p>{mailDetails?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
