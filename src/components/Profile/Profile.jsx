import styles from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  avatar,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.firstDiv}>
        <img className={styles.image} src={avatar} alt="User avatar" />
        <p className={styles.Name}>{name}</p>
        <p className={styles.text}>@{tag}</p>
        <p className={styles.text}>{location}</p>
      </div>
      <ul className={styles.ulProfile}>
        <li className={styles.liProfile}>
          <span className={styles.liSpan}>Followers</span>
          <span className={styles.spanStats}>{followers}</span>
        </li>
        <li className={styles.liProfile}>
          <span className={styles.liSpan}>Views</span>
          <span className={styles.spanStats}>{views}</span>
        </li>
        <li className={styles.liProfile}>
          <span className={styles.liSpan}>Likes</span>
          <span className={styles.spanStats}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
