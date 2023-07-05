import { useSelector } from 'react-redux';

const ListUsers = () => {
  // store'a abone olma
  const storeData = useSelector((store) => store.userReducer);

  return (
    <div>
      {/* Veriler Yüklenirken Devreye Girer */}
      {storeData.loading && <p>Loading...</p>}

      {storeData.users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default ListUsers;
