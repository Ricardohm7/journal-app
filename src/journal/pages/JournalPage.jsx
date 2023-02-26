import Typography from "@mui/material/Typography";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant="h1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempore possimus debitis in suscipit. Tenetur, impedit. Voluptatem magnam corrupti tempora similique itaque amet nulla eaque debitis! Aliquid vitae suscipit architecto?</Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  )
}
