import * as React from "react"
import { Link } from "gatsby"
import { useMenuQuery } from "../hooks/useMenuQuery"

const Header = () => {
  const {site, wpMenu} = useMenuQuery()
  
  return (
    <header
      style={{
        background: `lightblue`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {site.siteMetadata.title}
          </Link>
        </h1>

        <ul>
          { wpMenu.menuItems.nodes.map((item, index) => (
            <li key={index}>
              <Link to={item.url === '/home/' ? '/' : item.url}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
