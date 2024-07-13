import styles from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.ulFriend}>
      {friends.map((friend) => (
        <li className={styles.liFriend} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
