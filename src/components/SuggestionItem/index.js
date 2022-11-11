import './index.css'

const SuggestionItem = props => {
  const {suggestion, onSuggestion} = props
  const onClickSuggestion = () => {
    onSuggestion(suggestion)
  }

  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="image2"
        alt="arrow"
        onClick={onClickSuggestion}
      />
    </li>
  )
}
export default SuggestionItem
