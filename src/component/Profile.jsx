
//
export default function Profile(props) {
  return (
      <div className="profile-box">
        <img 
            src={props.img}
            alt="avatar"
            className="photo"
        />
        {
            props.isNew && <span className="new">New</span>
        }
        <h1>{props.name}</h1>
        <h2>{props.title}</h2>
      </div>
  );
}
