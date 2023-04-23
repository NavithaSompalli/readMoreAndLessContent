import {useState} from 'react'

import {
  ReadMoreBgContainer,
  Heading,
  ReactHookImage,
  Description,
  ReadButton,
  Statement,
} from './styledComponents'

const ReadMore = () => {
  const [isValid, setValid] = useState(false)

  const readMoreButton = () => {
    setValid(prevState => !prevState)
  }

  return (
    <ReadMoreBgContainer>
      <Heading>React Hooks</Heading>
      <Statement>Hooks are a new addition to react</Statement>
      <ReactHookImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>
        {isValid
          ? 'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components.For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by-side with existing code so you can adopt them gradually.'
          : 'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components.'}
      </Description>

      <ReadButton type="button" onClick={readMoreButton}>
        {isValid ? 'Read Less' : 'Read More'}
      </ReadButton>
    </ReadMoreBgContainer>
  )
}

export default ReadMore
