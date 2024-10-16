/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { TextArea } from '@sanity/ui'

const CodeInput = React.forwardRef((props: any, ref: any) => {
    return (
        <TextArea
            {...props}
            ref={ref}
            rows={10}
            style={{ fontFamily: 'monospace' }}
        />
    )
})

CodeInput.displayName = 'CodeInput'

export default CodeInput