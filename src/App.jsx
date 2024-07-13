import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import FriendList from "./components/FriendList/FirendList";
import friends from "./friends.json";
import transactions from "./transactions.json";
import TransactionHistory from "./components/Transactions/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
