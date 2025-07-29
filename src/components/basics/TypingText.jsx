import { Typewriter } from 'react-simple-typewriter';

const TypingText = ({text, nameClass}) => {
  return (
    <p className= {nameClass}>
        <Typewriter words={[text]} cursor cursorStyle='|' typeSpeed={130}/>
    </p>
  )
}

export default TypingText;