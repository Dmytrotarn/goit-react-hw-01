import styles from "./FriendList.module.css";

export default function FriendListItem({ friend }) {
  return (
    <div className={styles.box}>
      <img className={styles.avatar} src={friend.avatar} alt="Avatar" />
      <p className={styles.name}>{friend.name}</p>
      <p
        className={`${styles.status} ${
          friend.isOnline ? styles.online : styles.offline
        }`}
      >
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
