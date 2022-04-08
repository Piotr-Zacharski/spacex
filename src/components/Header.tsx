import React from 'react'

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
          <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 text-white">{title}</a>
          ))}
    </nav>
    </>
  )
}

export default Header
