import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src="https://avatars.githubusercontent.com/u/95880342?v=4"
        className={styles.avatar}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fernando Nunes</strong>
              <time
                title="11 de setembro ás 11:12h"
                dataTime="2022-05-11 08:13:30"
              >
                Cerva de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
