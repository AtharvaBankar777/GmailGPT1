import { Box, Button, styled, List, ListItem } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { SIDEBAR_DATA } from "../config/sidebar.config";
// import { routes1 } from "../routeF/routes";
import { useParams, NavLink } from "react-router-dom";
import ComposeMail from "./ComposeMail";
import { useState } from "react";
import { routes1 } from "../routeF/routes";

const ComposeButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  padding: 15,
  borderRadius: 16,
  border: "none",
  minWidth: 140,
  textTransform: "none",
  "&:hover": {
    background: "#c2e7ff",
    color: "#001d35",
  },
});

const Container = styled(Box)({
  padding: 8,
  "& > ul": {
    padding: "10px 0 0 5px",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    "& > a": {
      textDecoration: "none",
      color: "inherit",
    },
  },
  "& >ul > a >li>svg": { marginRight: 20 },
});
const Sidebarcontent = () => {
  const [CreateCompose, setCreateCompose] = useState(false);

  const onComposeClick = () => {
    return setCreateCompose(true);
  };
  const { type } = useParams();
  return (
    <Container>
      <ComposeButton onClick={onComposeClick}>
        <ModeEditIcon style={{ paddingRight: 5 }} /> Compose
      </ComposeButton>
      <List>
        {SIDEBAR_DATA.map((data) => (
          <NavLink key={data.name} to={`${routes1.emails.path}/${data.name}`}>
            <ListItem
              style={{
                backgroundColor:
                  type === data.name.toLowerCase() ? "#d3e3fd" : "transparent",
                borderRadius:
                  type === data.name.toLowerCase() ? "0 16px 16px 0" : "0",
              }}
            >
              {/* {console.log(type)} */}
              {/* {console.log(data.path)} */}
              <data.icon />
              {data.title}
            </ListItem>
          </NavLink>
        ))}
      </List>
      <ComposeMail
        CreateCompose={CreateCompose}
        setCreateCompose={setCreateCompose}
      />
    </Container>
  );
};
export default Sidebarcontent;

// import { Box, Button, styled, List, ListItem } from "@mui/material";
// import ModeEditIcon from "@mui/icons-material/ModeEdit";
// import { SIDEBAR_DATA } from "../config/sidebar.config";
// import { useParams } from "react-router-dom";
// import ComposeMail from "./ComposeMail";
// import { useState } from "react";

// const ComposeButton = styled(Button)({
//   background: "#c2e7ff",
//   color: "#001d35",
//   padding: 15,
//   borderRadius: 16,
//   border: "none",
//   minWidth: 140,
//   textTransform: "none",
//   "&:hover": {
//     background: "#c2e7ff",
//     color: "#001d35",
//   },
// });

// const Container = styled(Box)({
//   padding: 8,
//   "& > ul": {
//     padding: "10px 0 0 5px",
//     fontSize: 14,
//     fontWeight: 500,
//     cursor: "pointer",
//   },
//   "& > ul > li > svg": { marginRight: 20 },
// });

// const Sidebarcontent = () => {
//   const [CreateCompose, setCreateCompose] = useState(false);
//   const { type } = useParams();

//   const onComposeClick = () => {
//     return setCreateCompose(true);
//   };

//   return (
//     <Container>
//       <ComposeButton onClick={onComposeClick}>
//         <ModeEditIcon style={{ paddingRight: 5 }} /> Compose
//       </ComposeButton>
//       <List>
//         {SIDEBAR_DATA.map((data) => {
//           return (
//             <ListItem key={data.name} className={type === data.name.toLowerCase() ? "inbox-highlighted" : ""}>
//               <data.icon />
//               {data.title}
//             </ListItem>
//           );
//         })}
//       </List>
//       <ComposeMail
//         CreateCompose={CreateCompose}
//         setCreateCompose={setCreateCompose}
//       />
//     </Container>
//   );
// };

// export default Sidebarcontent;
