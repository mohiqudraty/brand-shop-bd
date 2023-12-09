import PropTypes from "prop-types";

const Faq = ({ faq }) => {
  const { question, answer } = faq || {}
  return (
    <div className="collapse collapse-arrow bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Faq;

Faq.propTypes = {
  faq: PropTypes.object.isRequired,
};
