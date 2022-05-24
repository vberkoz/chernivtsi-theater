import React, { ReactNode } from "react";
import Header from "./Header2";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="container">
    <Header />
    <div>{props.children}</div>
    <style jsx global>{`
      body {
        font-size: 11pt;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        color: #999;
        background-color: #111;
      }

      .container {
        width: 960px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        min-height: 98vh;
      }

      a, a:visited {
        text-decoration: none;
        color: #999;
      }

      a:hover {
        text-decoration: underline;
        cursor: pointer;
      }

      header, nav {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding: 0;
      }
    `}</style>
  </div>
);

export default Layout;
