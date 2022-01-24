import Meeting from './Meeting';
import classes from './MeetingLijst.module.css';


function MeetingLijst(props) {
  return (
    <ul className={classes.list}>
      {props.meetings.map((meeting) => (
        <Meeting
          key={meeting.id}
          id={meeting.id}
          image={meeting.image}
          title={meeting.title}
          address={meeting.address}
          description={meeting.description}
        />
      ))}
    </ul>
  );
}

export default MeetingLijst;