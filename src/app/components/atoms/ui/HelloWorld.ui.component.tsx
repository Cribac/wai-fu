'use client'

import { Button } from 'react-aria-components'

export default function HelloWorld() {
  return <Button onPress={() => console.log('hello world')}>Click me</Button>
}
