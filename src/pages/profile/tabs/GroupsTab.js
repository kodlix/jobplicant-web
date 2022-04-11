const groups = [
  {
    name: "Jane Doe",
    ratings: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    name: "Jane Doe",
    ratings: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Jane Doe",
    ratings: 4.5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
  },
  {
    name: "Jane Doe",

    ratings: 3.5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
  },
  {
    name: "Jane Doe",

    ratings: 4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const GroupsTab = () => (
  <>
    {/* <div className="p-card p-4 mt-1">
      <h3>Groups</h3>
    </div> */}
    <div className="mt-1">
      {groups.map(({ name, ratings, description }, index) => (
        <div
          className="p-card p-4 mt-2 d-flex justify-content-between"
          key={index}
        >
          <div className="d-flex">
            <img
              src="https://source.unsplash.com/random/50x50"
              className="rounded circle"
              alt="image"
            />
            <div className="p-2"></div>
            <div>
              <ul>
                <li className="d-flex">
                  <h4>{name}</h4>
                  <span className="p-1"></span>
                  <span>
                    <div
                      className="stars"
                      style={{ "--rating": ratings }}
                    ></div>
                  </span>
                </li>

                <li className="d-flex">{description}</li>
              </ul>
            </div>
          </div>
          <div className="">
            <a href="/" style={{ color: "black", marginLeft: "5px" }}>
              Audio Call{" "}
            </a>
            <a href="/" style={{ color: "black", marginLeft: "5px" }}>
              Video Call{" "}
            </a>
            <a href="/" style={{ color: "black", marginLeft: "5px" }}>
              Message{" "}
            </a>
            <a href="/" style={{ color: "black", marginLeft: "5px" }}>
              Delete{" "}
            </a>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default GroupsTab;
