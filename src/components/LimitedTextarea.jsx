import React from 'react';
import { InputTextarea } from "primereact/inputtextarea";

const LimitedTextarea = ({ value , limit, register }) => {
  // console.log('value', value)
  const [content, setContent] = React.useState("");
  const [charLength, setCharLength] = React.useState(limit);
  // const [content, setContent] = React.useState(value.slice(0, limit));

  React.useEffect(() => {
    console.log('value', value)
    if(value !== undefined) {
      setContent(value);
      setFormattedContent(value)
    }
  }, [value])

  const setFormattedContent = React.useCallback(
    text => {
      setContent(text.slice(0, limit));

      const charCount = text.length;
      const charLength = limit - charCount;
      setCharLength(charLength);
      
    },
    [limit, setContent]
  );

  return (
    <>
      <InputTextarea
        id="address"
        type="text"
        rows="4"
        {...register("description", {
          required: `* Description is required`,
        })}
        name="description"
        maxLength={limit}
        onChange={event => setFormattedContent(event.target.value)}
        value={content}
      />
      <p>{charLength}/{limit}</p>
    </>
  )

}

export default LimitedTextarea