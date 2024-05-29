import { Box, Typography, Checkbox, styled } from "@mui/material";
import { StarBorder, Star } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { routes1 } from "../routeF/routes.js";
import useApi from "../hooks/useApi.jsx";
import { API_URLS } from "../services/api.urls.js";

const Wrapper = styled(Box)({
  padding: "0 0 0 10px",
  background: "#f2f6fc",
  display: "flex",
  cursor: "pointer",
  "& > div": {
    display: "flex",
    width: "100%",
    "& > p": {
      fontSize: 14,
    },
  },
});
const Indicator = styled(Typography)`
  font-size: 12px !important;
  background: #ddd;
  color: #222;
  border-radius: 4px;
  margin-right: 6px;
  margin-bottom: 8px;
  padding: 0 4px;
`;

const Date = styled(Typography)({
  marginLeft: "auto",
  marginRight: 20,
  display: "flex",
  fontSize: 12,
  color: "#5F6368",
  // backgroundColor: "",
});

const Email = ({
  item,
  selectedEmails,
  setRefreshScree,
  setSelectedEmails,
}) => {
  const navigate = useNavigate();

  const toggleStarredService = useApi(API_URLS.toggleStarredMails);

  const toggleStarredMails = () => {
    toggleStarredService.call({ id: item._id, value: !item.starred });
    setRefreshScree((prevState) => !prevState);
  };

  // console.log("navigate", navigate);
  const onValueChange = () => {
    if (selectedEmails.includes(item._id)) {
      setSelectedEmails((prevState) =>
        prevState.filter((id) => id !== item._id)
      );
    } else {
      setSelectedEmails((prevState) => [...prevState, item._id]);
    }
  };

  return (
    <>
      <Wrapper style={{ padding: 10 }}>
        <Checkbox
          size="small"
          style={{ marginRight: 10, marginTop: -7 }}
          checked={selectedEmails.includes(item._id)}
          onChange={() => onValueChange()}
        />
        {item.starred ? (
          <Star
            fontSize="small"
            style={{ marginRight: 10, color: "#FFF200" }}
            onClick={() => toggleStarredMails()}
          />
        ) : (
          <StarBorder
            fontSize="small"
            style={{ marginRight: 10 }}
            onClick={() => toggleStarredMails()}
          />
        )}
        {/* <StarBorderIcon fontSize="small" style={{ marginRight: 10 }} onClick={()=>toggleStarredMails()}  /> */}
        <Box
          onClick={() => navigate(routes1.view.path, { state: { item: item } })}
        >
          <Typography style={{ width: 200, overflow: "hidden" }}>
            {item.name1}
          </Typography>
          <Indicator>Inbox</Indicator>
          <Typography>
            {item.subject} {item.text && "-"} {item.text}{" "}
          </Typography>
          <Date>
            {new window.Date(item.date).getDate()}&nbsp;
            {new window.Date(item.date).toLocaleString("default", {
              month: "long",
            })}
          </Date>
        </Box>
      </Wrapper>
    </>
  );
};

export default Email;
