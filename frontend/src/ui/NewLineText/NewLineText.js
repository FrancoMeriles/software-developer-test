const NewLineText = (props) => {
  const { text } = props;
  return text.split('\n').map((str, i) => <p key={i}>{str}</p>);
};

export default NewLineText;
