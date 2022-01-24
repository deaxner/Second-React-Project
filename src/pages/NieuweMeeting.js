import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetings/NewMeetupForm";
function NieuweMeetingPage() {
    const navigate = useNavigate
  function addMeetupHandler(meetupData) {
    fetch(
      "..",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate.replace("/");
    });
  }

  return (
    <section>
      <h1>Nieuwe Meetings - Pagina</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NieuweMeetingPage;
