import React from 'react'

export default function Icons({ size }) {
  const iconSize = size ? `fa-${size}x` : 'fa-2x';
  return (
    <div className="icons">
      <a href="https://www.linkedin.com/in/nelsonsbrian/">
        <i className={`fab fa-linkedin ${iconSize}`}></i>
      </a>
      <a href="https://github.com/nelsonsbrian">
        <i className={`fab fa-github ${iconSize}`}></i>
      </a>
      <a href="https://gitlab.com/nelsonsbrian">
        <i className={`fab fa-gitlab ${iconSize}`}></i>
      </a>
    </div>
  )
}
