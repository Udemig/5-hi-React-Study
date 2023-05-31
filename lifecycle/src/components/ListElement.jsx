const ListElement = ({ user }) => {
  // yeniden oluşturm (deconstruct)
  // obje içerisndeki verilere erişme
  const { name, phone, email, address } = user;

  return (
    <li className="userli">
      {name}
      <br />
      {phone}
      <br />
      {address?.zipcode}
    </li>
  );
};

export default ListElement;
