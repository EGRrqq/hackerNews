import { FC, MouseEventHandler } from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'

interface spinnerProps {
    refetch: MouseEventHandler<HTMLSpanElement>
}

const Spinner: FC<spinnerProps> = ({ refetch }) => {
    return (
        <div className={classNames(styles.container)}>
            <span
                className={classNames(styles.button)}
                onClick={refetch}
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
