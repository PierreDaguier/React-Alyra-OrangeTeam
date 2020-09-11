import React from "react"


// Ici se trouve la fonction du bouton dropdown
const GradientsSelect = (props) => {
  const { filter, tags, setFilter } = props
  const handleSelectChange = (e) => {
    setFilter(e.target.value)
  }
  // ci dessous "return"
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filtrer par tag
      </label>
      <select
        className="form-select"
        id="select"
        value={filter}
        onChange={handleSelectChange}
      >
        <option value="all">Toutes les couleurs</option>
        {tags.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  )
}

export default GradientsSelect
