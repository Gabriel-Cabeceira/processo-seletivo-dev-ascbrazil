import { ButtonField } from './Button.styles'

const Button = ({text, buttonType}) => {
  return (
    <ButtonField type={buttonType}>
        {text}
    </ButtonField>
  )
}

export { Button }