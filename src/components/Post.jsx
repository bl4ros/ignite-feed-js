import styles from "./Post.module.css";
import { Comment } from "./Comment";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/95880342?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Fernando</strong>
            <span>Front-end Developer</span>
          </div>
        </div>
        <time title="11 de setembro ás 11:12h" dataTime="2022-05-11 08:13:30">
          Públicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>Acabei de subir mais um projeto no meu portifa.</p>
        <p>
          É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do
          projeto é DoctorCare
        </p>
        <p>
          <a href="#">🚀 👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
