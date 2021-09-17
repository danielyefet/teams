function RichFormat({ text }) {
  const pattern = /@[\w\d]+/g;
  const specialStrings = text.match(pattern) || [];
  const regularStrings = text.split(pattern) || [];
  const jsx = [];

  const specialElements = specialStrings.map((specialString) => (
    // eslint-disable-next-line react/jsx-key
    <span style={{ color: '#9797D3' }}>{specialString}</span>
  ));

  regularStrings.forEach((regularString, index) => {
    const specialElement = specialElements[index];

    jsx.push(regularString);

    if (specialElement) jsx.push(specialElement);
  });

  return jsx;
}

export default RichFormat;
