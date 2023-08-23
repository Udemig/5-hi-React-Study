import { useState } from 'react';

const SendForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <h2>Onaylama Testi:</h2>
      <div className="send-container">
        <div>
          <input
            onChange={() => setIsChecked(!isChecked)}
            type="checkbox"
          />
          <label>Koşulları okdum onaylıyorum</label>
        </div>

        <button disabled={!isChecked}>Tweetle</button>
      </div>
    </>
  );
};

export default SendForm;
