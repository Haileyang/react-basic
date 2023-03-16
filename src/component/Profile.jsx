import Avatar from "./Avatar";

//
export default function Profile(props) {
  return (
      <div className="profile-box">
        <Avatar img={props.img} isNew={props.isNew}/>
        <h1>{props.name}</h1>
        <h2>{props.title}</h2>
      </div>
  );
}
