import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeftBtn = () => {
    const {index} = this.state
    this.setState(prevIndex => (index > 0 ? {index: prevIndex.index - 1} : ''))
  }

  onClickRightBtn = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    this.setState(prevIndex =>
      index < reviewsList.length - 1 ? {index: prevIndex.index + 1} : '',
    )
  }

  renderingCurrentReview = currentReview => {
    const {imgUrl, username, companyName, description} = currentReview
    return (
      <div className="reivews-list-card">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const currentReview = reviewsList[index]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-container">
          <button
            onClick={this.onClickLeftBtn}
            type="button"
            className="arrow-btn"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-icon"
            />
          </button>
          {this.renderingCurrentReview(currentReview)}
          <button
            onClick={this.onClickRightBtn}
            type="button"
            className="arrow-btn"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-icon"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
