import { useState } from 'react';
import Button from './Button';
import isEmail from 'validator/lib/isEmail';

function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleForm = () => {
    setError('');
    if (isEmail(email)) {
      setIsConfirmed(true);
    } else {
      setError('Valid email required');
    }
  };

  return isConfirmed ? (
    <div className="bg-white max-w-confirm flex flex-col h-full lg:h-auto pb-10 lg:pt-12 lg:pb-16 px-6 lg:px-16 lg:rounded-4xl lg:shadow-2xl text-charcoal-gray">
      <div className="mb-10 flex-grow flex flex-col justify-center">
        <img src="./images/icon-success.svg" alt="success icon" className="w-14 mb-10" />
        <h1 className="text-5xl lg:text-6xl font-bold leading-none mb-6">Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <strong className="font-bold">{email}</strong>. Please open it and click the button inside to confirm your subscription.</p>
      </div>
      <Button onClick={() => setIsConfirmed(false)} title="Dismiss message" />
    </div> 
  ) : (
    <div className="bg-white lg:rounded-4xl pt-0 lg:py-7 lg:pr-6 lg:pl-16 lg:flex gap-16 max-w-sign-up lg:shadow-2xl">
      <img src="./images/illustration-sign-up-mobile.svg" alt="illustration" className="lg:hidden w-full mb-11" />
      <div className="w-full flex flex-col justify-center text-charcoal-gray px-6 pb-10 lg:p-0">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 lg:mb-3 leading-none">Stay updated!</h1>
        <p className="mb-7">Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="flex flex-col gap-3 mb-11 justify-center">
          <li className="flex gap-4"><img src="./images/icon-list.svg" alt="list icon" className="" />Product discovery and building what matters</li>
          <li className="flex gap-4"><img src="./images/icon-list.svg" alt="list icon" className="" />Measuring to ensure updates are a success</li>
          <li className="flex gap-4"><img src="./images/icon-list.svg" alt="list icon" className="" />And much more!</li>
        </ul>
        <div className="text-xs mb-3 font-bold flex justify-between">
          <label htmlFor="email">Email address</label>
          <span className="text-tomato">{error}</span>
        </div>
        <input id="email" value={email} onChange={e => setEmail(e.target.value)} className={`py-4 px-5 mb-5 rounded-lg border focus:outline-none focus-visible:border-charcoal-gray ${error?'border-tomato bg-tomato/20 text-tomato':'border-gray'}`} type="email" placeholder="email@company.com" />
        <Button onClick={handleForm} title="Subscribe to monthly newsletter" />
      </div>
      <img src="./images/illustration-sign-up-desktop.svg" alt="illustration" className="hidden lg:block w-full" />
    </div>    
  )
}

export default App
