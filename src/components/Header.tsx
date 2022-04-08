import React from 'react'
import styled from 'styled-components'


const StyledLink = styled.a`
color: white;
font-size: 1.2em;
padding: 10px 20px;
text-decoration: none;
align-items: center;
text-align: center;
justify-content: center;
&:hover {
    opacity: 50%;
  }
`;

const Header:React.FC = () => {

  return (
    <>
    <nav className="flex sm:justify-center space-x-4 text-white">
        {[
          ['Home', '/dashboard'],
          ['Spaceships', '/spaceships'],
          ['Projects', '/projects'],
          ['Reports', '/reports'],
        ].map(([title, url]) => (
          <StyledLink href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 text-white">{title}</StyledLink>
          ))}
    </nav>
    </>
  )
}

export default Header
