import {
  Dialog,
  Box,
  Typography,
  InputBase,
  TextField,
  Button,
} from "@mui/material";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

import { API_GMAIL } from "../services/api.js";
import {
  Close,
  DeleteOutlineTwoTone as DeleteOutlineTwoToneIcon,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";

const dialogStyle = {
  maxHeight: "100%",
  maxWidth: "100%",
  height: "90%",
  width: "80%",
  borderRadius: "10px 10px 0 0",
};

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  background: "#f2f6fc",
  padding: "10px 15px",
});

const RecipientsWraper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "& > div ": {
    fontSize: 14,
    borderBottom: "1px solid #F5F5F5",
    marginTop: 10,
  },
});

const Footer = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  align-items: center;
`;

const SendButton = styled(Button)({
  background: "#0b57d0",
  color: " #fff",
  fontWeight: 500,
  textTransform: "none",
  borderRadius: 18,
  width: 100,
  "&:hover": {
    background: "#0b57d0",
    color: "#fff",
  },
});

const ComposeMail = ({ setCreateCompose, CreateCompose }) => {
  const [data1, setData] = useState({});

  const sentEmailService = useApi(API_URLS?.saveSentEmail);
  const saveDraftService = useApi(API_URLS.saveDraftEmails);

  const onCloseClick = (e) => {
    e.preventDefault();
    const payLoad = {
      to: data1.to,
      from: "astayami95292@gmail.com",
      subject: data1.subject,
      text: data1.body,
      date: new Date().toISOString(),
      image: "",
      name1: "code for interview",
      starred: false,
      type: "drafts",
    };

    saveDraftService.call(payLoad);

    setCreateCompose(false);
  };

  const sendMail = async (e) => {
    e.preventDefault();
    const payLoad = {
      to: data1.to,
      from: "astayami95292@gmail.com",
      subject: data1.subject,
      text: data1.body,
      date: new Date().toISOString(),
      image: "",
      name1: "code for interview",
      starred: false,
      type: "sent",
    };
    // const urlObject=API_URLS.saveSentEmail;
    // API_GMAIL(payLoad);
    sentEmailService.call(payLoad);
    // getEmail.call(payLoad);

    return setCreateCompose(false);
  };

  const onValueChange = (e) => {
    setData({ ...data1, [e.target.name]: e.target.value });
  };
  const img = async () => {
    console.log("data1", data1);

    const res = await axios.post(`http://localhost:8001/gpt/getDataFromGPT`, {
      subject: data1.subject,
    });

    if (res) {
      console.log("back data", res.data.data);

      setData({...data1,body:res.data.data})
    }
  };

  return (
    <>
      <Dialog open={CreateCompose} PaperProps={{ sx: dialogStyle }}>
        <Header>
          <Typography>New Message</Typography>
          <Close onClick={(e) => onCloseClick(e)} />
        </Header>
        <RecipientsWraper>
          <InputBase
            placeholder="Recipients"
            onChange={(e) => onValueChange(e)}
            name="to"
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <InputBase
              placeholder="Subject"
              onChange={(e) => onValueChange(e)}
              name="subject"
            />
            <img
              id="11"
              width="30"
              height="30"
              src="https://img.icons8.com/ios/50/chatgpt.png"
              alt="chatgpt"
              onClick={img}
            />
          </div>
        </RecipientsWraper>
        <TextField
          multiline
          rows={18}
          sx={{ "&.MuiOutlinedInput-notchedOutline": { border: "none" } }}
          onChange={(e) => onValueChange(e)}
          name="body"
          value={data1.body}
        />
        <Footer>
          <SendButton onClick={sendMail}>Send</SendButton>
          <DeleteOutlineTwoToneIcon onClick={() => setCreateCompose(false)} />
        </Footer>
      </Dialog>
    </>
  );
};
export default ComposeMail;
