import { useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URLS } from "../services/api.urls";
import useApi from "../hooks/useApi";
import Email from "./Email";
import { Box, List, ListItem, Checkbox } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
// import NoMails from "./common/NoMails";
// import { EMPTY_TABS } from "../constants/constant";
import axios from "axios";

const Emails = () => {
  const { openDrawer } = useOutletContext();

  const { type } = useParams();

  const getEmailsService = useApi(API_URLS.getEmailFromType);
  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
  const deleteEmailsService = useApi(API_URLS.deleteEmails);

  // useEffect;
  // () => {
  //   getEmailsService.call({}, type);
  // },
  //   [type];

  // get email type==sent

  const [emailData, setEmailData] = useState([]);
  const [selectedEmails, setSelectedEmails] = useState([]);
  // const [bin, setBin] = useState([]);

  const [refreshScreen, setRefreshScree] = useState(false);

  const getEmail = async (type) => {
    const data = await axios.get(`http://localhost:8001/emails/${type}`);
    // console.log("data", data.data);
    if (data.data) {
      setEmailData(data.data);
    }
  };
  // const getEmail = async (type) => {
  //   const data = await axios.get(`http://localhost:8001/emails/${type}`);
  //   console.log("data", data.data);
  //   if (data.data) {
  //     const filteredEmails = data.data.filter((email) => !email.bin);
  //     setEmailData(filteredEmails);
  //   }
  // };

  useEffect(() => {
    getEmail(type);
    
  }, [type, refreshScreen]);

  const selectAllEmails = (e) => {
    if (e.target.checked) {
      const selectedEmailIds = emailData.map((email) => email._id);
      setSelectedEmails(selectedEmailIds);

      console.log("Selected all emails", selectedEmailIds);
    } else {
      setSelectedEmails([]);
    }
  };
  // const selectAllEmails = (e) => {
  //   if (e.target.checked) {
  //     const selectedEmailIds = emailData
  //       .filter((email) => !email.bin)
  //       .map((email) => email._id);
  //     setSelectedEmails(selectedEmailIds);
  //     console.log("Selected all emails", selectedEmailIds);
  //   } else {
  //     setSelectedEmails([]);
  //   }
  // };

  const deleteSelectedEmails = (e) => {
    if (type === "bin") {
      deleteEmailsService.call(selectedEmails);
    } else {
      moveEmailsToBinService.call(selectedEmails);
    }
    setRefreshScree((prevState) => !prevState);
    
  };
  // const deleteSelectedEmails = (e) => {
  //   moveEmailsToBinService.call(selectedEmails);
  //   setRefreshScreen((prevState) => !prevState);
  // };
  return (
    <>
      <Box
        style={
          !openDrawer
            ? { paddingTop: "60px", width: "100%" }
            : { paddingTop: "60px", width: "80%" }
        }
      >

        <Box
          style={{
            display: "flex",

            alignItems: "start",
            justifyContent: "space-between",
          }}
        >
          <Checkbox
            style={{ padding: "0 20px ", alignItems: "center" }}
            onChange={(e) => selectAllEmails(e)}
          />
          <DeleteOutline
            style={{ alignItems: "center" }}
            onClick={(e) => deleteSelectedEmails(e)}
          />
        </Box>
        <List>
          {emailData.length > 0 ? (
            emailData.map((item, index) => (
              <Email
                key={index}
                item={item}
                selectedEmails={selectedEmails}
                setRefreshScree={setRefreshScree}
                setSelectedEmails={setSelectedEmails}
              />
            ))
          ) : (
            <h1 style={{ textAlign: "center" }}>No Data Found</h1>
          )}
        </List>
        {/* {emailData.length === 0 && <NoMails message={EMPTY_TABS[type]} />} */}
      </Box>
    </>
  );
};
export default Emails;
