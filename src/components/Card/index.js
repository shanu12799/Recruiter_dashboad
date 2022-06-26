import "./card.css";
export const Card = ({ item, handelChange }) => {
  return (
    <div className="card" key={item.id}>
      <h5>{item.title}</h5>
      <p>{item.description}</p>
      <div className="card_footer">
        <span>
          <img src="./Icon material-location-on.png" alt="location" />
          {item.location}
        </span>
        <div className="card_button">
          <a href="#login" onClick={() => handelChange(item.id)}>
            View Applications
          </a>
        </div>
      </div>
    </div>
  );
};
