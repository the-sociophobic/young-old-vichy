import React from 'react'


class Img extends React.Component {
  render = () =>
    <div className={`img ${this.props.center && "img--center"}`}>
      <div className="img__container">
        <img
          src={this.props.src}
          className="img__img"
          alt=""
          onClick={() => window.open(this.props.src, "_blank")}
        />
        <div className="img__desc">
          {this.props.children}
        </div>
      </div>
    </div>
}


export default Img