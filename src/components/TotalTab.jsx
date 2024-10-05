const TotalTab = ({ total }) => {
  return (
    <li className="my-2 ">
      <p>
        $ <span className="font-bold">{total}</span>
      </p>
    </li>
  );
};

export default TotalTab;
