import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  Container,
  ImageContainer,
  Image,
  EditorContainer,
  IconsContainer,
  Button,
  Input,
  Heading,
} from './StyledEditor'
import './index.css'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false}

  changeBold = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  changeItalic = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  changeUnderline = () => {
    this.setState(prevState => ({
      underline: !prevState.underline,
    }))
  }

  render() {
    const {bold, italic, underline} = this.state

    return (
      <Container>
        <ImageContainer>
          <Heading>Text Editor</Heading>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </ImageContainer>
        <EditorContainer>
          <IconsContainer>
            <Button
              type="button"
              onClick={this.changeBold}
              data-testid="bold"
              color={bold ? '#faff00' : '#f1f5f9'}
            >
              <VscBold size={25} className="icons" />
            </Button>
          </IconsContainer>
          <IconsContainer>
            <Button
              type="button"
              onClick={this.changeItalic}
              data-testid="italic"
              color={italic ? '#faff00' : '#f1f5f9'}
            >
              <GoItalic size={25} className="icons" />
            </Button>
          </IconsContainer>
          <IconsContainer>
            <Button
              type="button"
              onClick={this.changeUnderline}
              data-testid="underline"
              color={underline ? '#faff00' : '#f1f5f9'}
            >
              <AiOutlineUnderline size={25} className="icons" />
            </Button>
          </IconsContainer>
          <Input
            fontStyle={italic ? 'italic' : 'normal'}
            fontWeight={bold ? 'bold' : 'normal'}
            textDecoration={underline ? 'underline' : 'normal'}
            row="20"
            cols="35"
          />
        </EditorContainer>
      </Container>
    )
  }
}

export default TextEditor
