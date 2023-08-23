import { useState } from 'react';

const Button = () => {
  const [btnColor, setBtnColor] = useState('red');

  return (
    <>
      <h2>Buton Testi:</h2>
      <div className="btn-container">
        <button
          // rengini belirleme
          onClick={() =>
            setBtnColor(btnColor === 'red' ? 'blue' : 'red')
          }
          style={{ background: btnColor }}
        >
          {/* içeriğini belirleme */}
          {btnColor === 'red' ? 'Maviye Çevir' : 'Kırmızıya Çevir'}
        </button>
      </div>
    </>
  );
};

export default Button;
