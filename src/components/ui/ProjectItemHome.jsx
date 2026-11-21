import styles from './ProjectItemHome.module.css';

export default function ProjectItemHome({ title, image, description, linkText, linkHref }) {
  return (
    <article className={styles.row}>
      <div className={styles.mediaColumn}>
        <h3 className={styles.title}>{title}</h3>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.contentColumn}>
        <p className={styles.description}>{description}</p>
        <a href={linkHref}>
          <button>{linkText}</button>
        </a>
      </div>
    </article>
  );
}