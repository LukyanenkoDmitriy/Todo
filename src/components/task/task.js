import React from 'react';

function Task({ label }) {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{label}</span>
        </label>
        <button className="icon icon-edit" />
        <button className="icon icon-destroy" />
      </div>
    </li>
  )
}
export default Task;