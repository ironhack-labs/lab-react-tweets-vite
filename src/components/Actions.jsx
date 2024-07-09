const Actions = () => {
  const actions = [
    {
      id: 1,
      className: "far fa-comment",
      dataTestid: "comment-icon",
    },
    {
      id: 2,
      className: "fas fa-retweet",
      dataTestid: "retweet-icon",
    },
    {
      id: 3,
      className: "far fa-heart",
      dataTestid: "heart-icon",
    },
    {
      id: 4,
      className: "fas fa-share",
      dataTestid: "share-icon",
    },
  ];

  return (
    <>
      {actions.map((action) => (
        <i
          key={action.id}
          className={action.className}
          data-testid={action.dataTestid}
        ></i>
      ))}
    </>
  );
};

export default Actions;
