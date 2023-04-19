import styles from './styles.module.css'
import classNames from "classnames";

const Spinner = () => {
    return (
        <div className={classNames(styles.spinner, styles.rotateScaleUp)}>
        </div>
    )
}

export default Spinner