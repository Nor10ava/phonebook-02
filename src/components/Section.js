import { Component } from "react";
import PropTypes from "prop-types";

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};