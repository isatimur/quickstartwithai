import React from 'react'
import { TextArea, Stack, Label } from '@sanity/ui'
import { StringInputProps } from 'sanity'

interface CodeInputProps extends Omit<StringInputProps, 'type'> {
  language?: string;
  filename?: string;
}

const CodeInput = React.forwardRef<HTMLTextAreaElement, CodeInputProps>((props, ref) => {
  const { value, onChange, language, filename } = props;

  return (
    <Stack space={3}>
      {filename && <Label>{filename}</Label>}
      <TextArea
        value={value}
        // @ts-expect-error Sanity Studio is not typed
        onChange={event => onChange(event.currentTarget.value)}
        ref={ref}
        rows={10}
        style={{
          fontFamily: 'monospace',
          fontSize: '14px',
          lineHeight: '1.4',
          padding: '1rem',
        }}
      />
    </Stack>
  )
})

CodeInput.displayName = 'CodeInput'

export default CodeInput
