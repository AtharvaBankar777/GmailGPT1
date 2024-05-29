import { useLocation, useOutletContext } from "react-router-dom";
import { Box, Typography, styled } from "@mui/material";
import { ArrowBack, Delete } from "@mui/icons-material";
import { emptyProfilePic } from "../constants/constant";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

const IconWrapper = styled(Box)({
  padding: 15,
});
const Subject = styled(Typography)({
  fontSize: 22,
  margin: "10px 0 20px 75px",
  display: "flex",
});
const Indicator = styled(Box)`
  font-size: 12px !important;
  background: #ddd;
  color: #222;
  border-radius: 4px;
  margin-left: 6px;
  padding: 2px 4px;
  align-self: center;
`;
const Image = styled("img")({
  borderRadius: "50%",
  width: 40,
  height: 40,
  margin: "5px 10px 0 10px",
  backgroundColor: "#cccccc",
});
const Container = styled(Box)({
  marginLeft: 15,
  width: "100%",
  "& > div": {
    display: "flex",
    "& > p > span": {
      fontSize: 12,
      color: "#5E5E5E",
    },
  },
});
const Date = styled(Typography)({
  margin: "0 50px 0 auto",
  fontSize: 12,
  color: "#5E5E5E",
});

const Viewemail = () => {
  const { openDrawer } = useOutletContext;
  const { state } = useLocation();
  const { item } = state;
  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);

  const deleteEmail = () => {
    moveEmailsToBinService.call([item._id]);
    window.history.back();
  };

  return (
    <>
      <Box style={{ paddingTop: 60 }}>
        <IconWrapper>
          <ArrowBack
            onClick={() => window.history.back()}
            color="action"
            fontSize="small"
          />
          <Delete
            fontSize="small"
            color="action"
            style={{ marginLeft: 10 }}
            onClick={() => deleteEmail()}
          />
        </IconWrapper>
        <Subject>
          {item.subject} <Indicator component="span">Inbox</Indicator>
        </Subject>
        <Box style={{ display: "flex" }}>
          <Image src={emptyProfilePic} alt="profile" />
          <Container>
            <Box>
              <Typography>
                {item.name1}
                <Box component="span">&nbsp;&#60;{item.to}&#62;&nbsp;</Box>
              </Typography>
              <Date>
                {new window.Date(item.date).getDate()}&nbsp;
                {new window.Date(item.date).toLocaleString("default", {
                  month: "long",
                })}
                &nbsp;
                {new window.Date(item.date).getFullYear()}
              </Date>
            </Box>
            <Typography>{item.text}</Typography>
          </Container>
        </Box>
      </Box>
      {console.log("from view file")}
    </>
  );
};

export default Viewemail;
