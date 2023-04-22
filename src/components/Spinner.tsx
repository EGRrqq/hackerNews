import styles from './styles.module.css'
import classNames from 'classnames'

const Spinner = ({ refetch }) => {
    return (
        <div className={classNames(styles.container)}>
            <span
                className={classNames(styles.button)}
                onClick={() => refetch()}
            >
                <h4 className={classNames(styles.p)}>reload data</h4>
                <span
                    className={classNames(styles.spinner, styles.rotateScaleUp)}
                ></span>
            </span>
        </div>
    )
}

export default Spinner
