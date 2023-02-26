import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant="h1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempore possimus debitis in suscipit. Tenetur, impedit. Voluptatem magnam corrupti tempora similique itaque amet nulla eaque debitis! Aliquid vitae suscipit architecto?</Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}
      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ':hover': { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}>
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
