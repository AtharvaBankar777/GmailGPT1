import {
  InsertPhoto as InsertPhotoIcon,
  StarOutline as StarOutlineIcon,
  SendOutlined as SendOutlinedIcon,
  InsertDriveFileOutlined as InsertDriveFileOutlinedIcon,
  DeleteOutlineOutlined as DeleteOutlineOutlinedIcon,
  MailOutlined as MailOutlinedIcon,
} from "@mui/icons-material";
import { routes1 } from "../routeF/routes";

export const SIDEBAR_DATA = [
  {
    name: "inbox",
    title: "Inbox",
    icon: InsertPhotoIcon,
    // path: routes1.emails.path,
  },
  {
    name: "starred",
    title: "Starred",
    icon: StarOutlineIcon,
  },
  {
    name: "sent",
    title: "Sent",
    icon: SendOutlinedIcon,
  },
  {
    name: "drafts",
    title: "Drafts",
    icon: InsertDriveFileOutlinedIcon,
  },
  {
    name: "bin",
    title: "Bin",
    icon: DeleteOutlineOutlinedIcon,
  },
  {
    name: "allmail",
    title: "All MAil",
    icon: MailOutlinedIcon,
  },
];
