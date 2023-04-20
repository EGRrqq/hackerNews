import { Link, Outlet, RootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Spinner from '../components/Spinner'

import styles from './styles.module.css'
import classNames from "classnames";

export const rootRoute = new RootRoute({
  component: () => {
    return (
      <>
        <div>
          {/* <div>
            <h1>Hacker News</h1>
          </div> */}
          <div className={classNames(styles.navbar)}>
              {(
                [
                  ['/', 'Hacker News'],
                ] as const
              ).map(([to, label]) => {
                return (
                  <div key={to}>
                    <Link
                      to={to}
                      activeOptions={
                        {
                          // If the route points to the root of it's parent,
                          // make sure it's only active if it's exact
                          // exact: to === '.',
                        }
                      }
                      className={classNames(styles.link)}
                      // Make "active" links bold
                      // activeProps={{ color: 'black' }}
                    >
                      {label}
                    </Link>
                  </div>
                )
              })}
              <Spinner />
            </div>
            <div>
              {/* Render our first route match */}
              <Outlet />
            </div>
        </div>
        <TanStackRouterDevtools position="bottom-right" />
      </>
    )
  },
})
